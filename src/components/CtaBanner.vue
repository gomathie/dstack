<template>
  <section class="cta-banner">
    <div class="container cta-banner__inner" v-reveal>
      <h2 class="cta-banner__title">{{ title }}</h2>
      <p class="cta-banner__desc">{{ desc }}</p>
      <div class="cta-banner__actions">
        <router-link :to="primaryTo" class="btn btn--light btn--lg">{{ primaryLabel }}</router-link>
        <router-link v-if="secondaryTo" :to="secondaryTo" class="btn btn--ghost-light btn--lg">
          {{ secondaryLabel }}
        </router-link>
      </div>
      <p v-if="note" class="cta-banner__note">{{ note }}</p>
    </div>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Ready to build your dream team?' },
  desc: {
    type: String,
    default: 'Tell us the role. We come back with a vetted shortlist inside two weeks.',
  },
  primaryLabel: { type: String, default: 'Start hiring' },
  primaryTo: { type: String, default: '/hire-form' },
  secondaryLabel: { type: String, default: 'See pricing' },
  secondaryTo: { type: String, default: '/pricing' },
  note: { type: String, default: 'No recruiting fees. No onboarding charges. Cancel with 30 days’ notice.' },
})
</script>

<style scoped>
.cta-banner {
  position: relative;
  background: linear-gradient(160deg, var(--plum-700) 0%, var(--plum-900) 100%);
  padding: 5.5rem 0;
  overflow: hidden;
}
.cta-banner::after {
  content: '';
  position: absolute;
  bottom: -55%;
  left: 50%;
  width: 820px;
  height: 820px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(188, 144, 169, 0.2) 0%, transparent 62%);
  pointer-events: none;
}
.cta-banner__inner {
  position: relative;
  z-index: 1;
  text-align: center;
}
.cta-banner__title {
  color: #fff;
  margin-bottom: 0.9rem;
}
.cta-banner__desc {
  color: rgba(255, 255, 255, 0.76);
  font-size: clamp(1rem, 1.6vw, 1.15rem);
  max-width: 560px;
  margin: 0 auto 2rem;
  text-wrap: pretty;
}
.cta-banner__actions {
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
}
.cta-banner__note {
  margin: 1.5rem 0 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

@media (max-width: 767px) {
  .cta-banner { padding: 3.5rem 0; }
  .cta-banner__actions .btn { width: 100%; max-width: 320px; }
}
</style>
