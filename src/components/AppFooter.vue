<template>
  <footer class="site-footer">
    <div class="footer__top">
      <div class="container footer__top-inner">
        <div class="footer__brand">
          <img src="/images/cropped-dbs-150x150.png" alt="Dubblestack" class="footer__logo" />
          <span class="footer__tagline">Remote Hiring Company</span>
        </div>
        <div class="footer__social">
          <a href="https://www.linkedin.com/company/dubblestack/" target="_blank" rel="noopener noreferrer" class="footer__social-btn" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">&copy; {{ new Date().getFullYear() }} Dubblestack</p>
        <nav class="footer__nav">
          <router-link to="/privacy-policy" class="footer__nav-link">Privacy Policy</router-link>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--brand-primary-footer);
  margin-top: auto;
}
.footer__top {
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
.footer__top-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1.5rem;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.footer__logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
  border-radius: var(--radius-sm);
}
.footer__tagline {
  font-weight: 600;
  color: var(--brand-primary);
  font-size: 0.9rem;
}
.footer__social {
  display: flex;
  gap: 0.5rem;
}
.footer__social-btn {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f8f8f8;
  color: var(--brand-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-normal);
}
.footer__social-btn:hover {
  background: var(--brand-primary);
  color: #fff;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(102, 2, 60, 0.3);
}
.footer__bottom {
  padding: 1.5rem 0;
}
.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
}
.footer__copy {
  color: var(--brand-primary);
  font-weight: 600;
  font-size: 0.9rem;
  margin: 0;
}
.footer__nav-link {
  color: var(--brand-primary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}
.footer__nav-link:hover {
  color: #fff;
}

@media (max-width: 600px) {
  .footer__top-inner,
  .footer__bottom-inner {
    flex-direction: column;
    text-align: center;
  }
}
</style>
