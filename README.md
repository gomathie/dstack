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

- `public/_redirects` — `/* /index.html 200`. The router uses HTML5 history mode, so without this a direct request to `/blog` or a page refresh returns 404. Vite copies it into `dist/` on build.
- `.node-version` — pins Node 22, since Vite 8 requires Node ^20.19 or >=22.12 and the Pages default is older.
- the `optionalDependencies` block in `package.json` — a workaround for an upstream packaging bug, not a real dependency. `@rolldown/binding-wasm32-wasi` (pulled in by Vite via Rolldown) declares `@emnapi/core` and `@emnapi/runtime` as hard dependencies but ships no `os`/`cpu` constraint. Linux CI therefore resolves it while macOS prunes it, so a lockfile generated on macOS omits those two packages and `npm ci` aborts on Cloudflare with `Missing: @emnapi/runtime@2.0.0-alpha.3 from lock file`. Declaring them keeps the lockfile valid on both platforms. Drop it once Rolldown fixes the upstream package.

`dist/` is gitignored; Cloudflare builds it from source on each push. Pushes to `main` publish to production, other branches get preview deployments.
