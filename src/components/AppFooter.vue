<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer__top">
        <div class="footer__brand-col">
          <router-link to="/" class="footer__brand">
            <img src="/images/cropped-dbs-150x150.png" alt="" class="footer__logo" />
            <span class="footer__brand-name">{{ company.name }}</span>
          </router-link>
          <p class="footer__blurb">{{ company.description }}</p>
          <div class="footer__contact">
            <a :href="`mailto:${company.email}`" class="footer__contact-link">{{ company.email }}</a>
            <a :href="`tel:${company.phone.replace(/[^+\d]/g, '')}`" class="footer__contact-link">{{ company.phone }}</a>
          </div>
          <a
            :href="company.linkedin"
            target="_blank"
            rel="noopener noreferrer"
            class="footer__social"
            aria-label="Dubblestack on LinkedIn"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>

        <nav v-for="group in footerNav" :key="group.heading" class="footer__col" :aria-label="group.heading">
          <h2 class="footer__col-heading">{{ group.heading }}</h2>
          <ul class="footer__list">
            <li v-for="link in group.links" :key="link.to + link.label">
              <router-link :to="link.to" class="footer__link">{{ link.label }}</router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="footer__hubs">
        <span class="footer__hubs-label">Recruiting hubs</span>
        <span class="footer__hubs-list">{{ company.hubs.join(' · ') }}</span>
      </div>

      <div class="footer__bottom">
        <p class="footer__copy">&copy; {{ year }} {{ company.name }}. All rights reserved.</p>
        <p class="footer__legal">
          <router-link to="/privacy-policy" class="footer__link">Privacy</router-link>
          <span aria-hidden="true">·</span>
          <router-link to="/terms" class="footer__link">Terms</router-link>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { company, footerNav } from '../data/site'

const year = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background: linear-gradient(170deg, var(--plum-800) 0%, var(--plum-900) 100%);
  color: rgba(255, 255, 255, 0.7);
  margin-top: auto;
  padding: 4.5rem 0 2rem;
}
.footer__top {
  display: grid;
  grid-template-columns: 1.6fr repeat(4, 1fr);
  gap: 2.5rem;
  padding-bottom: 3rem;
}
.footer__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 1rem;
}
.footer__logo {
  width: 44px;
  height: 44px;
  object-fit: contain;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.9);
  padding: 4px;
}
.footer__brand-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.15rem;
  color: #fff;
  letter-spacing: -0.02em;
}
.footer__blurb {
  font-size: 0.9rem;
  line-height: 1.65;
  max-width: 34ch;
  margin-bottom: 1.25rem;
}
.footer__contact {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 1.25rem;
}
.footer__contact-link {
  font-size: 0.9rem;
  color: #fff;
  font-weight: 600;
  transition: color var(--transition-fast);
}
.footer__contact-link:hover { color: var(--plum-300); }
.footer__social {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.16);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}
.footer__social:hover {
  background: #fff;
  color: var(--plum-700);
  transform: translateY(-2px);
}

.footer__col-heading {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--plum-300);
  margin-bottom: 1rem;
}
.footer__list {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}
.footer__link {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.72);
  transition: color var(--transition-fast);
}
.footer__link:hover { color: #fff; }

.footer__hubs {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
  padding: 1.25rem 0;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.85rem;
}
.footer__hubs-label {
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  font-size: 0.72rem;
  color: var(--plum-300);
}
.footer__hubs-list { color: rgba(255, 255, 255, 0.66); }

.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding-top: 1.5rem;
}
.footer__copy, .footer__legal {
  font-size: 0.85rem;
  margin: 0;
  color: rgba(255, 255, 255, 0.55);
}
.footer__legal {
  display: flex;
  gap: 0.6rem;
  align-items: center;
}

@media (max-width: 980px) {
  .footer__top { grid-template-columns: 1fr 1fr; gap: 2rem; }
}
@media (max-width: 600px) {
  .site-footer { padding-top: 3rem; }
  .footer__top { grid-template-columns: 1fr; }
  .footer__bottom { flex-direction: column; text-align: center; }
}
</style>
