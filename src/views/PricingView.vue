<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Pricing</span>
        <h1 class="page-hero__title">One flat fee. Nothing underneath it.</h1>
        <p class="page-hero__sub">
          No recruiting fee, no onboarding charge, no placement percentage. You pay monthly from
          your hire's start date and can stop with 30 days' notice.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="plans">
          <article
            v-for="(plan, i) in plans"
            :key="plan.name"
            class="plan"
            :class="{ 'plan--featured': plan.highlight }"
            v-reveal="i * 90"
          >
            <span v-if="plan.highlight" class="plan__badge">Most chosen</span>
            <h2 class="plan__name">{{ plan.name }}</h2>
            <p class="plan__tagline">{{ plan.tagline }}</p>

            <p class="plan__price">
              <template v-if="plan.price">
                <span class="plan__amount">${{ plan.price.toLocaleString() }}</span>
                <span class="plan__unit">{{ plan.unit }}</span>
              </template>
              <template v-else>
                <span class="plan__amount plan__amount--custom">Custom</span>
                <span class="plan__unit">Volume pricing from 5 hires</span>
              </template>
            </p>

            <p class="plan__blurb">{{ plan.blurb }}</p>

            <router-link
              :to="plan.price ? '/hire-form' : '/contact'"
              class="btn btn--block"
              :class="plan.highlight ? 'btn--primary' : 'btn--outline'"
            >
              {{ plan.price ? 'Get started' : 'Talk to sales' }}
            </router-link>

            <ul class="plan__features">
              <li v-for="f in plan.features" :key="f">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                     stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                  <path d="M20 6L9 17l-5-5" />
                </svg>
                {{ f }}
              </li>
            </ul>
          </article>
        </div>

        <p class="plans__note">
          Prices are per hire, per month, in USD. A shift differential applies to coverage well
          outside a professional's local working hours — always quoted before you commit.
        </p>
      </div>
    </section>

    <!-- Comparison against alternatives -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading
          eyebrow="Comparison"
          title="What the alternatives actually cost"
          sub="Illustrative totals for one mid-level finance hire over twelve months."
        />
        <div class="table-scroll">
          <table class="compare">
            <caption class="visually-hidden">
              Annual cost comparison between a US hire, a staffing agency, a freelancer, and Dubblestack
            </caption>
            <thead>
              <tr>
                <th scope="col">Route</th>
                <th scope="col">Year-one cost</th>
                <th scope="col">Time to hire</th>
                <th scope="col">Who handles compliance</th>
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
                <td>{{ row.compliance }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p class="compare__note">
          US figure assumes $78,000 base salary plus roughly 28% in payroll tax, benefits, equipment,
          and recruiting cost. Your numbers will differ — this is a shape, not a quote.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <SectionHeading eyebrow="FAQ" title="Pricing questions" />
        <FaqList :items="pricingFaqs" />
      </div>
    </section>

    <CtaBanner
      title="Want a real number for your role?"
      desc="Send us the job description. We come back with a specific monthly figure, not a range."
      primary-label="Request a quote"
      secondary-label="Talk to us"
      secondary-to="/contact"
      note="Quotes usually land within one business day."
    />
  </div>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import CtaBanner from '../components/CtaBanner.vue'
import FaqList from '../components/FaqList.vue'
import { plans, pricingFaqs } from '../data/pricing'

const comparison = [
  { route: 'US in-house hire', cost: '~$99,800', time: '6–10 weeks', compliance: 'You', ours: false },
  { route: 'Staffing agency', cost: '~$104,000 + 20% fee', time: '4–8 weeks', compliance: 'Shared', ours: false },
  { route: 'Freelance marketplace', cost: '~$42,000', time: '1–3 weeks', compliance: 'You', ours: false },
  { route: 'Dubblestack', cost: '~$21,600', time: '2–3 weeks', compliance: 'Us', ours: true },
]
</script>

<style scoped>
.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
  align-items: start;
}
.plan {
  position: relative;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 2.25rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: box-shadow var(--transition-normal), transform var(--transition-normal);
}
.plan:hover { box-shadow: var(--shadow-md); }
.plan--featured {
  border-color: var(--plum-300);
  box-shadow: var(--shadow-lg);
}
.plan__badge {
  position: absolute;
  top: -12px;
  left: 2rem;
  background: var(--plum-700);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 0.32rem 0.8rem;
  border-radius: var(--radius-pill);
}
.plan__name { font-size: 1.3rem; margin-bottom: 0.25rem; }
.plan__tagline {
  color: var(--color-light);
  font-size: 0.88rem;
  margin-bottom: 1.5rem;
}
.plan__price { margin-bottom: 1.25rem; }
.plan__amount {
  display: block;
  font-family: var(--font-heading);
  font-size: 2.75rem;
  font-weight: 800;
  letter-spacing: -0.035em;
  color: var(--color-dark);
  line-height: 1.05;
}
.plan__amount--custom { font-size: 2.1rem; }
.plan__unit {
  display: block;
  font-size: 0.85rem;
  color: var(--color-light);
  margin-top: 0.25rem;
}
.plan__blurb {
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1.5rem;
  min-height: 3.2em;
}
.plan__features {
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-border);
  display: grid;
  gap: 0.7rem;
}
.plan__features li {
  display: flex;
  gap: 0.6rem;
  align-items: flex-start;
  font-size: 0.9rem;
  color: var(--color-body);
  line-height: 1.5;
}
.plan__features svg {
  color: var(--accent-600);
  flex-shrink: 0;
  margin-top: 0.25rem;
}
.plans__note {
  text-align: center;
  max-width: 620px;
  margin: 2.5rem auto 0;
  font-size: 0.87rem;
  color: var(--color-light);
}

/* Comparison table */
.table-scroll { overflow-x: auto; }
.compare {
  width: 100%;
  min-width: 620px;
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
.compare tbody th {
  font-weight: 650;
  color: var(--color-dark);
}
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
  max-width: 640px;
  margin: 1.5rem auto 0;
  text-align: center;
  font-size: 0.85rem;
  color: var(--color-light);
}

@media (max-width: 767px) {
  .plan { padding: 1.75rem 1.5rem; }
  .plan__blurb { min-height: 0; }
}
</style>
