/**
 * POST /api/contact — Cloudflare Pages Function.
 *
 * Receives both site forms and emails them onward. The destination address
 * lives in `MAIL_TO`, which is read server-side and never reaches the browser:
 * the client only ever knows this URL.
 *
 * Required environment variables (Pages → Settings → Environment variables):
 *   RESEND_API_KEY        Secret. From resend.com → API Keys.
 *   MAIL_FROM             Verified sender, e.g. "Dubblestack <forms@dubblestack.com>".
 *                         Must be on a domain verified in Resend.
 * Optional:
 *   MAIL_TO               Destination. Defaults to DEFAULT_MAIL_TO below.
 *   TURNSTILE_SECRET_KEY  If set, a valid Turnstile token becomes mandatory.
 *
 * Mark RESEND_API_KEY (and TURNSTILE_SECRET_KEY) as "Encrypt" in the Pages UI
 * so they are stored as secrets rather than plaintext variables.
 */

const MAX_BODY_BYTES = 50 * 1024
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

// Public-facing alias. Cloudflare Email Routing forwards it to the real inbox,
// so the private address never appears in this repo or in the browser bundle.
// Override with a MAIL_TO environment variable to change it without a deploy.
const DEFAULT_MAIL_TO = 'hello@dubblestack.com'

// Field definitions per form. `required` drives validation; `label` drives the
// rendered email. Anything not listed here is ignored, so a caller cannot
// inject arbitrary content into the message.
const FORMS = {
  contact: {
    subject: (d) => `Contact form — ${d.topic || 'general'} — ${d.name}`,
    fields: [
      { key: 'name', label: 'Name', required: true },
      { key: 'email', label: 'Email', required: true, email: true },
      { key: 'company', label: 'Company' },
      { key: 'topic', label: 'Topic' },
      { key: 'message', label: 'Message', required: true, minLength: 10 },
    ],
  },
  hire: {
    subject: (d) => `Hiring request — ${d.role} — ${d.company}`,
    fields: [
      { key: 'company', label: 'Company', required: true },
      { key: 'name', label: 'Name', required: true },
      { key: 'email', label: 'Work email', required: true, email: true },
      { key: 'phone', label: 'Phone' },
      { key: 'role', label: 'Role needed', required: true },
      { key: 'category', label: 'Practice area' },
      { key: 'seniority', label: 'Seniority' },
      { key: 'timezone', label: 'Overlap hours' },
      { key: 'type', label: 'Employment type' },
      { key: 'count', label: 'Number of hires' },
      { key: 'start', label: 'Ideal start' },
      { key: 'details', label: 'Details' },
    ],
  },
}

const json = (status, body) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8' },
  })

/** Escape for safe interpolation into the HTML email body. */
const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

/** Strip CR/LF so a submitted value cannot forge extra email headers. */
const oneLine = (s) => String(s).replace(/[\r\n]+/g, ' ').trim()

async function verifyTurnstile(token, secret, ip) {
  const body = new FormData()
  body.append('secret', secret)
  body.append('response', token || '')
  if (ip) body.append('remoteip', ip)

  const res = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    body,
  })
  const out = await res.json().catch(() => ({ success: false }))
  return out.success === true
}

export async function onRequestPost({ request, env }) {
  // --- Config guard: fail loudly in logs, vaguely to the caller. ---
  const mailTo = env.MAIL_TO || DEFAULT_MAIL_TO
  if (!env.RESEND_API_KEY || !env.MAIL_FROM) {
    console.error('Mail env vars missing: need RESEND_API_KEY and MAIL_FROM')
    return json(500, { ok: false, error: 'Form is not configured yet. Please email us directly.' })
  }

  // --- Parse, with a size cap so the endpoint cannot be used as a firehose. ---
  const raw = await request.text()
  if (raw.length > MAX_BODY_BYTES) return json(413, { ok: false, error: 'Submission too large.' })

  let payload
  try {
    payload = JSON.parse(raw)
  } catch {
    return json(400, { ok: false, error: 'Malformed request.' })
  }

  const spec = FORMS[payload?.form]
  if (!spec) return json(400, { ok: false, error: 'Unknown form.' })

  // --- Honeypot: a real user never fills a field they cannot see. Answer 200
  //     so bots cannot distinguish rejection from success. ---
  if (payload.company_website) return json(200, { ok: true })

  // --- Turnstile, only enforced when a secret is configured. ---
  if (env.TURNSTILE_SECRET_KEY) {
    const ok = await verifyTurnstile(
      payload.turnstileToken,
      env.TURNSTILE_SECRET_KEY,
      request.headers.get('CF-Connecting-IP')
    )
    if (!ok) return json(400, { ok: false, error: 'Verification failed. Please try again.' })
  }

  // --- Validate against the field spec. ---
  const data = {}
  const errors = {}
  for (const f of spec.fields) {
    const value = typeof payload[f.key] === 'string' ? payload[f.key].trim() : ''
    if (f.required && !value) errors[f.key] = 'Required.'
    else if (value && f.email && !EMAIL_RE.test(value)) errors[f.key] = 'Not a valid email address.'
    else if (value && f.minLength && value.length < f.minLength) errors[f.key] = 'Too short.'
    data[f.key] = value.slice(0, 5000)
  }
  if (Object.keys(errors).length) return json(422, { ok: false, error: 'Please check the form.', errors })

  // --- Compose. ---
  const rows = spec.fields
    .filter((f) => data[f.key])
    .map(
      (f) =>
        `<tr>
           <td style="padding:6px 14px 6px 0;color:#6B6274;font:600 13px system-ui,sans-serif;vertical-align:top;white-space:nowrap">${esc(f.label)}</td>
           <td style="padding:6px 0;color:#1B1420;font:400 14px system-ui,sans-serif;white-space:pre-wrap">${esc(data[f.key])}</td>
         </tr>`
    )
    .join('')

  const meta = [
    `Received ${new Date().toISOString()}`,
    `IP ${request.headers.get('CF-Connecting-IP') || 'unknown'}`,
    `Country ${request.headers.get('CF-IPCountry') || 'unknown'}`,
  ].join(' · ')

  const html = `
    <div style="max-width:640px;margin:0 auto;padding:24px">
      <h2 style="font:700 18px system-ui,sans-serif;color:#66023C;margin:0 0 16px">
        ${esc(payload.form === 'hire' ? 'New hiring request' : 'New contact message')}
      </h2>
      <table style="border-collapse:collapse;width:100%">${rows}</table>
      <p style="margin:24px 0 0;font:400 11px system-ui,sans-serif;color:#948C9C">${esc(meta)}</p>
    </div>`

  // --- Send. reply_to means hitting Reply goes straight to the submitter. ---
  const send = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${env.RESEND_API_KEY}`,
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      from: env.MAIL_FROM,
      to: [mailTo],
      reply_to: data.email,
      subject: oneLine(spec.subject(data)).slice(0, 200),
      html,
    }),
  })

  if (!send.ok) {
    // Log the provider's reason for us; never surface it to the caller.
    console.error('Resend failed', send.status, await send.text().catch(() => ''))
    return json(502, { ok: false, error: 'Could not send right now. Please try again shortly.' })
  }

  return json(200, { ok: true })
}
