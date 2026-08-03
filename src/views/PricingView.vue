<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Pricing</span>
        <h1 class="page-hero__title">One flat rate. Nothing underneath it.</h1>
        <p class="page-hero__sub">
          No placement fees, no onboarding charges, no percentage of salary. You pay monthly from
          your hire's start date and can stop with 30 days' notice.
        </p>
      </div>
    </section>

    <!-- Rate card -->
    <section class="section">
      <div class="container">
        <div class="rate card" v-reveal>
          <div class="rate__main">
            <p class="rate__figure">
              <template v-if="pricing.rate">
                <span class="rate__amount">{{ pricing.rate }}</span>
                <span class="rate__unit">{{ pricing.rateUnit }}</span>
              </template>
              <template v-else>
                <span class="rate__amount rate__amount--text">{{ pricing.rateFallback }}</span>
                <span class="rate__unit">{{ pricing.rateFallbackUnit }}</span>
              </template>
            </p>

            <ul class="promises">
              <li v-for="p in pricing.promises" :key="p">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {{ p }}
              </li>
            </ul>

            <div class="rate__actions">
              <router-link to="/hire-form" class="btn btn--primary btn--lg">Get your quote</router-link>
              <router-link to="/contact" class="btn btn--outline btn--lg">Schedule a consultation</router-link>
            </div>
            <p class="rate__note">
              Tell us the role and you get a specific figure back — usually within one business day.
            </p>
          </div>

          <aside class="rate__aside">
            <h2 class="rate__aside-title">Works the same for</h2>
            <ul class="rate__roles">
              <li v-for="cat in roleCategories" :key="cat.slug">
                <span aria-hidden="true">{{ cat.icon }}</span>
                {{ cat.title }}
              </li>
            </ul>
          </aside>
        </div>
      </div>
    </section>

    <!-- What's included -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading
          eyebrow="Included"
          title="What the rate covers"
          sub="One number. Everything below sits inside it."
        />
        <div class="incl-grid">
          <div v-for="(item, i) in included" :key="item.title" class="incl" v-reveal="i * 55">
            <svg class="incl__check" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <div>
              <h3 class="incl__title">{{ item.title }}</h3>
              <p class="incl__desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>

        <div class="excl" v-reveal>
          <h3 class="excl__title">What you will never be billed for</h3>
          <ul class="excl__list">
            <li v-for="item in notIncluded" :key="item">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2.5" stroke-linecap="round" aria-hidden="true">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Comparison -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Comparison"
          title="How the routes compare"
          sub="One mid-level hire, judged on the things that actually differ between the options."
        />
        <div class="table-scroll">
          <table class="compare">
            <caption class="visually-hidden">
              Comparison of hiring routes across relative cost, time to hire, fee structure, and who handles compliance
            </caption>
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Relative cost</th>
                <th scope="col">Time to hire</th>
                <th scope="col">Fee structure</th>
                <th scope="col">Compliance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in comparison" :key="row.route" :class="{ 'compare__row--ours': row.ours }">
                <th scope="row">
                  {{ row.route }}
                  <span v-if="row.ours" class="pill compare__pill">You are here</span>
                </th>
                <td>{{ row.cost }}</td>
                <td>{{ row.time }}</td>
                <td>{{ row.fees }}</td>
                <td>{{ row.compliance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="compare__note">
          Relative cost compares total first-year outlay including salary, employment taxes, benefits,
          and any recruiting fees. Your own numbers will differ — this is a shape, not a quote.
        </p>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container">
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <FaqList :items="pricingFaqs" />
      </div>
    </section>

    <CtaBanner
      title="Want a real number for your role?"
      desc="Send us the job description. We come back with a specific figure, not a range."
      primary-label="Get your quote"
      secondary-label="Schedule a consultation"
      secondary-to="/contact"
      note="Quotes usually land within one business day."
    />
  </div>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import CtaBanner from '../components/CtaBanner.vue'
import FaqList from '../components/FaqList.vue'
import { pricing, included, notIncluded, pricingFaqs } from '../data/pricing'
import { roleCategories } from '../data/roles'

const comparison = [
  { route: 'US in-house hire', cost: 'Highest', time: '6–10 weeks', fees: 'Recruiter fee or in-house cost', compliance: 'You', ours: false },
  { route: 'Staffing agency', cost: 'Highest', time: '4–8 weeks', fees: 'Placement fee on top of salary', compliance: 'Shared', ours: false },
  { route: 'Freelance marketplace', cost: 'Variable', time: '1–3 weeks', fees: 'Platform cut per hour', compliance: 'You', ours: false },
  { route: 'Dubblestack', cost: 'Lowest', time: '2–3 weeks', fees: 'Flat monthly fee, nothing else', compliance: 'Us', ours: true },
]
</script>

<style scoped>
/* Rate card */
.rate {
  display: grid;
  grid-template-columns: 1.35fr 0.65fr;
  overflow: hidden;
}
.rate__main { padding: 3rem; }
.rate__figure { margin-bottom: 1.75rem; }
.rate__amount {
  display: block;
  font-family: var(--font-heading);
  font-size: clamp(2.6rem, 6vw, 4rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1.02;
  color: var(--color-dark);
}
.rate__amount--text { font-size: clamp(2rem, 4.4vw, 2.9rem); }
.rate__unit {
  display: block;
  font-size: 1rem;
  color: var(--color-muted);
  margin-top: 0.5rem;
}

.promises {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem 1.75rem;
  padding: 1.5rem 0;
  margin-bottom: 1.75rem;
  border-top: 1px solid var(--color-border);
  border-bottom: 1px solid var(--color-border);
}
.promises li {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  font-weight: 650;
  color: var(--color-dark);
}
.promises svg { color: var(--accent-600); flex-shrink: 0; }

.rate__actions {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.rate__note {
  margin: 1.25rem 0 0;
  font-size: 0.87rem;
  color: var(--color-light);
}

.rate__aside {
  background: var(--plum-50);
  border-left: 1px solid var(--color-border);
  padding: 3rem 2rem;
}
.rate__aside-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--plum-500);
  margin-bottom: 1.1rem;
}
.rate__roles { display: grid; gap: 0.7rem; }
.rate__roles li {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.92rem;
  color: var(--color-body);
  font-weight: 500;
}

/* Included */
.incl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.75rem;
}
.incl { display: flex; gap: 0.85rem; align-items: flex-start; }
.incl__check { color: var(--accent-600); flex-shrink: 0; margin-top: 0.15rem; }
.incl__title { font-size: 1rem; margin-bottom: 0.25rem; }
.incl__desc { color: var(--color-muted); font-size: 0.9rem; margin: 0; }

.excl {
  margin-top: 3rem;
  padding: 1.75rem 2rem;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
}
.excl__title { font-size: 1.05rem; margin-bottom: 1rem; }
.excl__list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 0.7rem 1.75rem;
}
.excl__list li {
  display: flex;
  align-items: flex-start;
  gap: 0.55rem;
  font-size: 0.92rem;
  color: var(--color-muted);
}
.excl__list svg { color: var(--plum-300); flex-shrink: 0; margin-top: 0.2rem; }

/* Comparison table */
.table-scroll { overflow-x: auto; }
.compare {
  width: 100%;
  min-width: 720px;
  border-collapse: separate;
  border-spacing: 0;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: hidden;
  text-align: left;
}
.compare th, .compare td {
  padding: 1rem 1.25rem;
  font-size: 0.92rem;
  border-bottom: 1px solid var(--color-border);
}
.compare thead th {
  background: var(--color-subtle);
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  color: var(--color-muted);
}
.compare tbody th { font-weight: 650; color: var(--color-dark); }
.compare tbody tr:last-child th,
.compare tbody tr:last-child td { border-bottom: none; }
.compare__row--ours { background: var(--plum-50); }
.compare__row--ours th, .compare__row--ours td { color: var(--plum-700); font-weight: 650; }
.compare__pill {
  margin-left: 0.5rem;
  background: var(--plum-700);
  color: #fff;
  border-color: transparent;
  font-size: 0.68rem;
}
.compare__note {
  max-width: 660px;
  margin: 1.5rem auto 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--color-light);
}

@media (max-width: 900px) {
  .rate { grid-template-columns: 1fr; }
  .rate__aside { border-left: none; border-top: 1px solid var(--color-border); padding: 2rem; }
}
@media (max-width: 600px) {
  .rate__main { padding: 1.75rem 1.5rem; }
  .rate__actions .btn { width: 100%; }
}
</style>
