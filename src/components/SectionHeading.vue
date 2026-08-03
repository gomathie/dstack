<template>
  <div class="section-heading" :class="[`section-heading--${align}`, { 'section-heading--light': light }]">
    <span v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</span>
    <component :is="level" class="section-heading__title">{{ title }}</component>
    <p v-if="sub" class="section-heading__sub">{{ sub }}</p>
  </div>
</template>

<script setup>
defineProps({
  eyebrow: { type: String, default: '' },
  title: { type: String, required: true },
  sub: { type: String, default: '' },
  align: { type: String, default: 'center' }, // 'center' | 'left'
  light: { type: Boolean, default: false },   // for plum/dark backgrounds
  level: { type: String, default: 'h2' },
})
</script>

<style scoped>
.section-heading {
  margin-bottom: 3.25rem;
  max-width: 720px;
}
.section-heading--center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.section-heading__eyebrow {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--plum-500);
  margin-bottom: 0.75rem;
}
.section-heading__title {
  margin-bottom: 0.85rem;
}
.section-heading__sub {
  color: var(--color-muted);
  font-size: clamp(1rem, 1.5vw, 1.1rem);
  line-height: 1.65;
  margin: 0;
  text-wrap: pretty;
}

.section-heading--light .section-heading__eyebrow { color: var(--plum-300); }
.section-heading--light .section-heading__title { color: #fff; }
.section-heading--light .section-heading__sub { color: rgba(255, 255, 255, 0.74); }

@media (max-width: 767px) {
  .section-heading { margin-bottom: 2.25rem; }
}
</style>
