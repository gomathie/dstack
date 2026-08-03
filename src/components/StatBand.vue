<template>
  <div class="stat-band" :class="{ 'stat-band--light': light }">
    <div v-for="(stat, i) in stats" :key="stat.label" class="stat-band__item" v-reveal="i * 80">
      <span class="stat-band__value">{{ stat.value }}</span>
      <span class="stat-band__label">{{ stat.label }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  stats: { type: Array, required: true },
  light: { type: Boolean, default: false }, // for plum/dark backgrounds
})
</script>

<style scoped>
.stat-band {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.5rem;
}
.stat-band__item {
  text-align: center;
  padding: 1.75rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-sm);
}
.stat-band__value {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(1.9rem, 3.4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.1;
  color: var(--plum-700);
  margin-bottom: 0.4rem;
}
.stat-band__label {
  display: block;
  font-size: 0.87rem;
  color: var(--color-muted);
  line-height: 1.45;
}

.stat-band--light .stat-band__item {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.14);
  box-shadow: none;
}
.stat-band--light .stat-band__value { color: #fff; }
.stat-band--light .stat-band__label { color: rgba(255, 255, 255, 0.66); }
</style>
