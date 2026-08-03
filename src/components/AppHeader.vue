<template>
  <header class="site-header" :class="{ 'site-header--solid': solid }">
    <div class="header__inner container">
      <router-link to="/" class="header__brand" aria-label="Dubblestack — home">
        <img src="/images/dbs.removebg-preview.png" alt="" class="header__logo" />
        <span class="header__title">Dubblestack</span>
      </router-link>

      <nav class="header__nav" aria-label="Main">
        <router-link v-for="link in primaryNav" :key="link.to" :to="link.to" class="header__link">
          {{ link.label }}
        </router-link>
      </nav>

      <div class="header__actions">
        <router-link to="/for-talent" class="header__link header__link--quiet">For Talent</router-link>
        <router-link to="/hire-form" class="btn btn--primary btn--sm">Hire talent</router-link>
      </div>

      <button
        class="header__toggle"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="header__toggle-bar" :class="{ open: mobileOpen }"></span>
      </button>
    </div>

    <!-- Mobile drawer -->
    <div class="header__scrim" :class="{ 'header__scrim--on': mobileOpen }" @click="mobileOpen = false"></div>
    <nav id="mobile-nav" class="mobile-nav" :class="{ 'mobile-nav--open': mobileOpen }" aria-label="Mobile">
      <router-link v-for="link in primaryNav" :key="link.to" :to="link.to" class="mobile-nav__link">
        {{ link.label }}
      </router-link>
      <router-link to="/for-talent" class="mobile-nav__link">For Talent</router-link>
      <router-link to="/contact" class="mobile-nav__link">Contact</router-link>
      <div class="mobile-nav__actions">
        <router-link to="/hire-form" class="btn btn--primary btn--block">Hire talent</router-link>
        <router-link to="/profile-login" class="btn btn--outline btn--block">Career Site</router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { primaryNav } from '../data/site'

const route = useRoute()
const scrolled = ref(false)
const mobileOpen = ref(false)

// The transparent treatment only works over a dark hero. Home has one, and so
// does every page using .page-hero — but the 404 and any future light page
// don't, so those get the solid header from the start.
const overHero = computed(() => route.name !== 'NotFound')
const solid = computed(() => scrolled.value || !overHero.value || mobileOpen.value)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}
function handleKeydown(e) {
  if (e.key === 'Escape') mobileOpen.value = false
}

// Close the drawer on navigation, and stop the page behind it from scrolling
// while it's open.
watch(() => route.fullPath, () => { mobileOpen.value = false })
watch(mobileOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : ''
})

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
  window.addEventListener('keydown', handleKeydown)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background-color var(--transition-normal), box-shadow var(--transition-normal),
              backdrop-filter var(--transition-normal);
  background: transparent;
}
.site-header--solid {
  background: rgba(255, 255, 255, 0.88);
  backdrop-filter: saturate(180%) blur(16px);
  -webkit-backdrop-filter: saturate(180%) blur(16px);
  box-shadow: 0 1px 0 var(--color-border), var(--shadow-sm);
}
.header__inner {
  display: flex;
  align-items: center;
  gap: 2rem;
  min-height: var(--header-height);
}
.header__brand {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-right: auto;
  z-index: 10;
}
.header__logo {
  width: 40px;
  height: auto;
  transition: transform var(--transition-normal);
}
.header__brand:hover .header__logo { transform: scale(1.06) rotate(-3deg); }
.header__title {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
  color: #fff;
  transition: color var(--transition-normal);
}
.site-header--solid .header__title { color: var(--color-dark); }

.header__nav {
  display: flex;
  align-items: center;
  gap: 1.9rem;
}
.header__actions {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.header__link {
  position: relative;
  font-size: 0.93rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.88);
  padding: 0.35rem 0;
  transition: color var(--transition-fast);
  white-space: nowrap;
}
.header__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  transition: width var(--transition-normal);
}
.header__link:hover { color: #fff; }
.header__link:hover::after,
.header__link.router-link-active::after { width: 100%; }
.site-header--solid .header__link { color: var(--color-muted); }
.site-header--solid .header__link:hover,
.site-header--solid .header__link.router-link-active { color: var(--plum-700); }
.header__link--quiet { font-weight: 500; }

/* Mobile toggle */
.header__toggle {
  display: none;
  background: none;
  border: none;
  width: 40px;
  height: 40px;
  position: relative;
  z-index: 1100;
}
.header__toggle-bar,
.header__toggle-bar::before,
.header__toggle-bar::after {
  display: block;
  width: 22px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all var(--transition-normal);
  position: absolute;
  left: 9px;
}
.site-header--solid .header__toggle-bar,
.site-header--solid .header__toggle-bar::before,
.site-header--solid .header__toggle-bar::after { background: var(--color-dark); }
.header__toggle-bar { top: 50%; transform: translateY(-50%); }
.header__toggle-bar::before { content: ''; top: -7px; }
.header__toggle-bar::after { content: ''; top: 7px; }
.header__toggle-bar.open { background: transparent !important; }
.header__toggle-bar.open::before { top: 0; transform: rotate(45deg); }
.header__toggle-bar.open::after { top: 0; transform: rotate(-45deg); }

/* Drawer */
.header__scrim {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(27, 20, 32, 0.45);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
  z-index: 1050;
}
.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  right: 0;
  width: min(320px, 84vw);
  height: 100dvh;
  padding: calc(var(--header-height) + 1.5rem) 1.5rem 2rem;
  background: var(--color-surface);
  flex-direction: column;
  gap: 0.35rem;
  transform: translateX(100%);
  transition: transform var(--transition-slow);
  box-shadow: -12px 0 44px rgba(27, 20, 32, 0.18);
  z-index: 1060;
  overflow-y: auto;
}
.mobile-nav__link {
  padding: 0.85rem 0.25rem;
  font-family: var(--font-heading);
  font-weight: 650;
  font-size: 1.05rem;
  color: var(--color-dark);
  border-bottom: 1px solid var(--color-border);
}
.mobile-nav__link.router-link-active { color: var(--plum-700); }
.mobile-nav__actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 1.5rem;
}

@media (max-width: 980px) {
  .header__nav, .header__actions { display: none; }
  .header__toggle { display: block; }
  .header__scrim { display: block; }
  .header__scrim--on { opacity: 1; pointer-events: auto; }
  .mobile-nav { display: flex; }
  .mobile-nav--open { transform: translateX(0); }
}
</style>
