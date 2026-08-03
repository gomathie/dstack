<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Case studies</span>
        <h1 class="page-hero__title">What actually changed for these teams</h1>
        <p class="page-hero__sub">
          Three engagements, with the problem, the shape of the solution, and the numbers
          that moved afterwards.
        </p>
      </div>
    </section>

    <article
      v-for="(study, i) in caseStudies"
      :key="study.slug"
      :id="study.slug"
      class="section study"
      :class="{ 'section--alt': i % 2 === 1 }"
    >
      <div class="container">
        <div class="study__grid" :class="{ 'study__grid--flip': i % 2 === 1 }">
          <div class="study__media" v-reveal>
            <img :src="study.image" :alt="`${study.client} case study`" class="study__image" loading="lazy" decoding="async" />
          </div>

          <div class="study__body" v-reveal="90">
            <div class="study__meta">
              <span class="pill">{{ study.industry }}</span>
              <span class="pill">{{ study.size }}</span>
            </div>
            <h2 class="study__client">{{ study.client }}</h2>
            <p class="study__headline">{{ study.headline }}</p>

            <div class="study__section">
              <h3 class="study__label">The problem</h3>
              <p>{{ study.challenge }}</p>
            </div>
            <div class="study__section">
              <h3 class="study__label">What we did</h3>
              <p>{{ study.approach }}</p>
            </div>
            <div class="study__section">
              <h3 class="study__label">The outcome</h3>
              <p>{{ study.outcome }}</p>
            </div>
          </div>
        </div>

        <div class="study__metrics" v-reveal>
          <div v-for="m in study.metrics" :key="m.label" class="metric">
            <span class="metric__value">{{ m.value }}</span>
            <span class="metric__label">{{ m.label }}</span>
          </div>
        </div>

        <figure class="study__quote" v-reveal>
          <blockquote>“{{ study.quote }}”</blockquote>
          <figcaption>
            <strong>{{ study.quoteAuthor }}</strong>
            <span>{{ study.quoteRole }}</span>
          </figcaption>
        </figure>
      </div>
    </article>

    <CtaBanner
      title="Your turn"
      desc="Most of these started with a single frustrated hiring manager and a 30-minute call."
      primary-label="Start hiring"
      secondary-label="See pricing"
    />
  </div>
</template>

<script setup>
import CtaBanner from '../components/CtaBanner.vue'
import { caseStudies } from '../data/caseStudies'
</script>

<style scoped>
.study__grid {
  display: grid;
  grid-template-columns: 1fr 1.15fr;
  gap: 3.5rem;
  align-items: center;
}
.study__grid--flip .study__media { order: 2; }

.study__image {
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
.study__meta {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.study__client {
  font-size: clamp(1.6rem, 3vw, 2.1rem);
  margin-bottom: 0.5rem;
}
.study__headline {
  font-size: 1.1rem;
  color: var(--plum-700);
  font-weight: 650;
  margin-bottom: 1.75rem;
  text-wrap: pretty;
}
.study__section { margin-bottom: 1.5rem; }
.study__section:last-child { margin-bottom: 0; }
.study__label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-light);
  margin-bottom: 0.4rem;
}
.study__section p {
  color: var(--color-muted);
  font-size: 0.95rem;
  line-height: 1.72;
  margin: 0;
}

.study__metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.25rem;
  margin-top: 3rem;
}
.metric {
  text-align: center;
  padding: 1.5rem 1rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}
.metric__value {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(1.5rem, 2.8vw, 2rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--plum-700);
  margin-bottom: 0.3rem;
}
.metric__label {
  font-size: 0.85rem;
  color: var(--color-muted);
}

.study__quote {
  max-width: 760px;
  margin: 3rem auto 0;
  text-align: center;
}
.study__quote blockquote {
  font-family: var(--font-heading);
  font-size: clamp(1.1rem, 2.2vw, 1.4rem);
  font-weight: 500;
  line-height: 1.55;
  color: var(--color-dark);
  margin-bottom: 1.25rem;
  text-wrap: pretty;
}
.study__quote figcaption strong {
  display: block;
  font-size: 0.95rem;
  color: var(--color-dark);
}
.study__quote figcaption span {
  font-size: 0.87rem;
  color: var(--color-light);
}

@media (max-width: 900px) {
  .study__grid { grid-template-columns: 1fr; gap: 2rem; }
  .study__grid--flip .study__media { order: 0; }
}
</style>
