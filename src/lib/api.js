// Client side of the form pipeline. The destination address lives only in the
// Pages Function's environment — this file knows nothing but the URL.

const ENDPOINT = '/api/contact'

/**
 * POST a form payload to the Function.
 *
 * @param {'contact'|'hire'} form  which form spec the server should validate against
 * @param {object} payload         field values, plus optional turnstileToken / company_website
 * @returns {Promise<{ok: boolean, error?: string, errors?: Record<string,string>}>}
 */
export async function submitForm(form, payload) {
  let res
  try {
    res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ form, ...payload }),
    })
  } catch {
    return { ok: false, error: 'Network problem — check your connection and try again.' }
  }

  // `vite dev` has no Functions runtime, so /api/* falls through to the SPA
  // shell and we get HTML back. Say so plainly rather than throwing a parse
  // error that looks like a real bug.
  const type = res.headers.get('content-type') || ''
  if (!type.includes('application/json')) {
    if (import.meta.env.DEV) {
      return {
        ok: false,
        error: 'The form endpoint only runs on Cloudflare. Use `npx wrangler pages dev dist` to test it locally.',
      }
    }
    return { ok: false, error: 'Unexpected response from the server. Please try again.' }
  }

  const body = await res.json().catch(() => null)
  if (!body) return { ok: false, error: 'Unexpected response from the server. Please try again.' }
  if (!res.ok || !body.ok) {
    return { ok: false, error: body.error || 'Something went wrong. Please try again.', errors: body.errors }
  }
  return { ok: true }
}
