<template>
  <div class="nf">
    <div class="container nf__inner">
      <span class="nf__code" aria-hidden="true">404</span>
      <h1 class="nf__title">We cannot find that page</h1>
      <p class="nf__desc">
        The link may be out of date, or the page may have moved. Here is where most people
        are heading.
      </p>

      <div class="nf__actions">
        <router-link to="/" class="btn btn--primary btn--lg">Back to home</router-link>
        <router-link to="/contact" class="btn btn--outline btn--lg">Contact us</router-link>
      </div>

      <nav class="nf__links" aria-label="Popular pages">
        <router-link v-for="link in links" :key="link.to" :to="link.to" class="nf__link">
          <strong>{{ link.label }}</strong>
          <span>{{ link.desc }}</span>
        </router-link>
      </nav>
    </div>
  </div>
</template>

<script setup>
const links = [
  { label: 'Services', to: '/services', desc: 'Roles we staff and how we vet' },
  { label: 'Pricing', to: '/pricing', desc: 'Plans and what they include' },
  { label: 'Case Studies', to: '/case-studies', desc: 'Results from real engagements' },
  { label: 'For Talent', to: '/for-talent', desc: 'Apply to be placed' },
]
</script>

<style scoped>
.nf {
  padding: calc(var(--header-height) + 5rem) 0 6rem;
  text-align: center;
}
.nf__code {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(5rem, 16vw, 9rem);
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.05em;
  background: linear-gradient(150deg, var(--plum-500), var(--plum-300));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  margin-bottom: 0.5rem;
}
.nf__title { margin-bottom: 0.85rem; }
.nf__desc {
  color: var(--color-muted);
  font-size: 1.05rem;
  max-width: 460px;
  margin: 0 auto 2rem;
}
.nf__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 3.5rem;
}
.nf__links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  max-width: 880px;
  margin: 0 auto;
  text-align: left;
}
.nf__link {
  padding: 1.25rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  transition: all var(--transition-normal);
}
.nf__link:hover {
  border-color: var(--plum-300);
  box-shadow: var(--shadow-md);
  transform: translateY(-2px);
}
.nf__link strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1rem;
  color: var(--color-dark);
  margin-bottom: 0.2rem;
}
.nf__link span {
  font-size: 0.85rem;
  color: var(--color-muted);
}

@media (max-width: 600px) {
  .nf__actions .btn { width: 100%; max-width: 300px; }
}
</style>
