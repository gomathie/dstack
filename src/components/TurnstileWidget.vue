<template>
  <!-- Renders nothing unless a site key is configured, so the forms work
       untouched until you opt in. -->
  <div v-if="siteKey" class="turnstile">
    <div ref="host"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['token'])

// The site key is public by design — it is the secret key, held only in the
// Pages Function environment, that actually validates the token.
const siteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || ''
const host = ref(null)
let widgetId = null

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

function loadScript() {
  if (window.turnstile) return Promise.resolve()
  const existing = document.querySelector(`script[src="${SCRIPT_SRC}"]`)
  if (existing) return new Promise((res) => existing.addEventListener('load', res, { once: true }))

  return new Promise((res, rej) => {
    const s = document.createElement('script')
    s.src = SCRIPT_SRC
    s.async = true
    s.defer = true
    s.onload = res
    s.onerror = rej
    document.head.appendChild(s)
  })
}

onMounted(async () => {
  if (!siteKey) return
  try {
    await loadScript()
  } catch {
    return // Widget unavailable; the server still enforces if its secret is set.
  }
  if (!host.value || !window.turnstile) return

  widgetId = window.turnstile.render(host.value, {
    sitekey: siteKey,
    theme: 'light',
    callback: (token) => emit('token', token),
    'expired-callback': () => emit('token', ''),
    'error-callback': () => emit('token', ''),
  })
})

onUnmounted(() => {
  if (widgetId && window.turnstile) window.turnstile.remove(widgetId)
})

// Let the parent reset the challenge after a submission.
defineExpose({
  reset() {
    if (widgetId && window.turnstile) window.turnstile.reset(widgetId)
  },
})
</script>

<style scoped>
.turnstile {
  display: flex;
  justify-content: center;
  margin-bottom: 1.25rem;
}
</style>
