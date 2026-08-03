# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).

## Local development

```sh
npm install
npm run dev      # dev server
npm run build    # production build -> dist/
npm run preview  # serve the built dist/ locally
```

## Deploying to Cloudflare Pages

Connect the repo in the Cloudflare dashboard (Workers & Pages → Create → Pages → Connect to Git) and use:

| Setting | Value |
| --- | --- |
| Framework preset | Vue (or None) |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(leave blank)* |

Two files in this repo make that work and shouldn't be removed:

- `public/_redirects` — currently a no-op. It holds the classic SPA rule `/* /index.html 200`, but Cloudflare rejects that as a self-referential loop (`Parsed 0 valid redirect rules` in the build log) and falls back to its own behaviour: with no top-level `404.html` present, Pages treats the deployment as a single-page app and serves `index.html` for unmatched paths automatically. Deep links work either way. Safe to delete; kept only so the intent is visible.
- `.node-version` — pins Node 22, since Vite 8 requires Node ^20.19 or >=22.12 and the Pages default is older.
- the `optionalDependencies` block in `package.json` — a workaround for an upstream packaging bug, not a real dependency. `@rolldown/binding-wasm32-wasi` (pulled in by Vite via Rolldown) declares `@emnapi/core` and `@emnapi/runtime` as hard dependencies but ships no `os`/`cpu` constraint. Linux CI therefore resolves it while macOS prunes it, so a lockfile generated on macOS omits those two packages and `npm ci` aborts on Cloudflare with `Missing: @emnapi/runtime@2.0.0-alpha.3 from lock file`. Declaring them keeps the lockfile valid on both platforms. Drop it once Rolldown fixes the upstream package.

`dist/` is gitignored; Cloudflare builds it from source on each push. Pushes to `main` publish to production, other branches get preview deployments.

## Forms

The contact and hiring forms POST to `/api/contact`, a Cloudflare Pages Function at
[`functions/api/contact.js`](functions/api/contact.js). It validates the submission
server-side and emails it on via Resend.

The destination address is **never shipped to the browser** — the bundle only knows the
URL. It defaults to `hello@dubblestack.com`, which is a Cloudflare Email Routing alias
that forwards to the real inbox, so the private address appears nowhere in this repo,
the built assets, or the page source.

### Setup

1. **Email Routing** — Cloudflare dashboard → your domain → Email → Email Routing.
   Create `hello@dubblestack.com` and forward it to wherever you actually read mail.
2. **Resend** — sign up at resend.com, verify the `dubblestack.com` domain (adds a few
   DNS records), and create an API key.
3. **Pages environment variables** — Pages project → Settings → Environment variables.
   Set these for **both** Production and Preview:

   | Variable | Required | Value | Encrypt? |
   | --- | --- | --- | --- |
   | `RESEND_API_KEY` | yes | `re_…` from Resend | **yes** |
   | `MAIL_FROM` | yes | `Dubblestack <forms@dubblestack.com>` — must be on the domain verified in Resend | no |
   | `MAIL_TO` | no | Overrides the default destination without a redeploy | no |
   | `TURNSTILE_SECRET_KEY` | no | Enables bot verification (see below) | **yes** |

Until `RESEND_API_KEY` and `MAIL_FROM` are set, the endpoint returns a 500 and the forms
show *"Form is not configured yet."* — no submissions are silently lost.

### Spam protection

A honeypot field is always active: bots that fill the hidden `company_website` input get
a `200 {ok:true}` and their message is dropped, so they cannot tell they were rejected.

Turnstile is wired but dormant. To enable it, create a widget in the Cloudflare dashboard,
then set `VITE_TURNSTILE_SITE_KEY` (a build-time variable — it is public, which is fine)
and `TURNSTILE_SECRET_KEY` (encrypted). The widget renders itself and the Function starts
requiring a valid token. With no site key set, nothing renders and nothing changes.

### Testing locally

`npm run dev` has no Functions runtime, so `/api/*` falls through to the SPA and the forms
report that plainly. To exercise the real Function:

```sh
npm run build
printf 'RESEND_API_KEY=re_your_key\nMAIL_FROM=Dubblestack <forms@dubblestack.com>\n' > .dev.vars
npx wrangler pages dev dist
```

`.dev.vars` is gitignored. Wrangler 4 or newer is required — v3 compiles the Function but
does not route to it.
