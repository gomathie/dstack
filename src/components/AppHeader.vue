<template>
  <header class="site-header" :class="{ 'header--scrolled': scrolled }">
    <div class="header__inner container">
      <router-link to="/" class="header__brand">
        <img src="/images/dbs.removebg-preview.png" alt="Dubblestack" class="header__logo" />
        <span class="header__title">Dubblestack</span>
      </router-link>

      <nav class="header__nav" :class="{ 'header__nav--open': mobileOpen }">
        <router-link to="/blog" class="header__nav-link" @click="mobileOpen = false">Blog</router-link>
        <router-link to="/profile-login" class="btn btn--primary btn--sm" @click="mobileOpen = false">Career Site</router-link>
      </nav>

      <button class="header__toggle" @click="mobileOpen = !mobileOpen" :aria-expanded="mobileOpen" aria-label="Toggle menu">
        <span class="header__toggle-bar" :class="{ 'open': mobileOpen }"></span>
      </button>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all var(--transition-normal);
  background: var(--brand-primary-alpha);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}
.header--scrolled {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  box-shadow: var(--shadow-md);
}
.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 85px;
}
.header__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  text-decoration: none;
  z-index: 10;
}
.header__logo {
  width: 50px;
  height: auto;
  transition: transform var(--transition-normal);
}
.header__brand:hover .header__logo {
  transform: scale(1.08) rotate(-3deg);
}
.header__title {
  font-family: var(--font-heading);
  font-weight: 700;
  font-size: 1.2rem;
  color: #fff;
  transition: color var(--transition-normal);
}
.header--scrolled .header__title {
  color: var(--color-dark);
}
.header__nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.header__nav-link {
  font-weight: 600;
  color: #fff;
  position: relative;
  padding: 0.4rem 0;
  transition: color var(--transition-fast);
}
.header__nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--brand-primary);
  transition: width var(--transition-normal);
  border-radius: 2px;
}
.header__nav-link:hover::after,
.header__nav-link.router-link-active::after {
  width: 100%;
}
.header--scrolled .header__nav-link {
  color: var(--brand-primary);
}
.header__nav-link:hover {
  color: var(--brand-primary);
}
.header--scrolled .header__nav-link:hover {
  color: var(--color-dark);
}

/* Mobile Toggle */
.header__toggle {
  display: none;
  background: none;
  border: none;
  width: 32px;
  height: 32px;
  position: relative;
  z-index: 10;
}
.header__toggle-bar,
.header__toggle-bar::before,
.header__toggle-bar::after {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: all var(--transition-normal);
  position: absolute;
  left: 4px;
}
.header--scrolled .header__toggle-bar,
.header--scrolled .header__toggle-bar::before,
.header--scrolled .header__toggle-bar::after {
  background: var(--color-dark);
}
.header__toggle-bar { top: 50%; transform: translateY(-50%); }
.header__toggle-bar::before { content: ''; top: -8px; }
.header__toggle-bar::after { content: ''; top: 8px; }
.header__toggle-bar.open { background: transparent; }
.header__toggle-bar.open::before { top: 0; transform: rotate(45deg); background: #fff; }
.header__toggle-bar.open::after { top: 0; transform: rotate(-45deg); background: #fff; }

@media (max-width: 768px) {
  .header__toggle { display: block; }
  .header__nav {
    position: fixed;
    top: 0;
    right: 0;
    width: 280px;
    height: 100vh;
    background: var(--color-dark);
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    transform: translateX(100%);
    transition: transform var(--transition-slow);
    box-shadow: -10px 0 40px rgba(0,0,0,0.3);
  }
  .header__nav--open {
    transform: translateX(0);
  }
  .header__nav-link {
    color: #fff !important;
    font-size: 1.1rem;
  }
}
</style>
