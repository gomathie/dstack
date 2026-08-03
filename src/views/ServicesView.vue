<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Services</span>
        <h1 class="page-hero__title">Roles we staff, and how we fill them</h1>
        <p class="page-hero__sub">
          Six practice areas covered by recruiters who have hired for that function before.
          Every placement is a dedicated full-time professional, not a shared resource.
        </p>
      </div>
    </section>

    <!-- Role categories -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Practice areas"
          title="Where we go deep"
          sub="Every area runs on the same flat monthly fee — no role costs extra to recruit for."
        />
        <div class="cat-grid">
          <article v-for="(cat, i) in roleCategories" :key="cat.slug" class="cat-card card" v-reveal="i * 70">
            <header class="cat-card__head">
              <span class="cat-card__icon" aria-hidden="true">{{ cat.icon }}</span>
              <div>
                <h2 class="cat-card__title">{{ cat.title }}</h2>
                <span class="cat-card__from">{{ cat.roles.length }} common roles</span>
              </div>
            </header>
            <p class="cat-card__summary">{{ cat.summary }}</p>

            <h3 class="cat-card__label">Common roles</h3>
            <ul class="cat-card__roles">
              <li v-for="role in cat.roles" :key="role">{{ role }}</li>
            </ul>

            <h3 class="cat-card__label">Tools they know</h3>
            <ul class="cat-card__tools">
              <li v-for="tool in cat.tools" :key="tool" class="pill">{{ tool }}</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- Vetting -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading
          eyebrow="Vetting"
          title="What every candidate passes before you see them"
          sub="Roughly 3 in 100 applicants reach a client shortlist. Here is what happens to the other 97."
        />
        <ol class="vet-list">
          <li v-for="(stage, i) in vettingStages" :key="stage.title" class="vet-item" v-reveal="i * 80">
            <span class="vet-item__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <div>
              <h3 class="vet-item__title">{{ stage.title }}</h3>
              <p class="vet-item__desc">{{ stage.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- What's included -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Included"
          title="What the monthly fee covers"
          sub="One number. Everything below sits inside it."
        />
        <div class="incl-grid">
          <div v-for="(item, i) in included" :key="item.title" class="incl-card" v-reveal="i * 60">
            <svg class="incl-card__check" width="20" height="20" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            <div>
              <h3 class="incl-card__title">{{ item.title }}</h3>
              <p class="incl-card__desc">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Tell us which seat is empty"
      desc="Thirty minutes on a call is enough for us to start sourcing. No commitment until you meet finalists."
      primary-label="Start hiring"
      secondary-label="Compare plans"
    />
  </div>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { roleCategories, vettingStages } from '../data/roles'

const included = [
  { title: 'Sourcing and recruiting', desc: 'In-country teams running the search, not a job-board repost.' },
  { title: 'Skills and English testing', desc: 'Practical, role-specific assessment plus working-fluency screening.' },
  { title: 'Structured interviews', desc: 'Run by a recruiter with hiring experience in that function.' },
  { title: 'Employer of record', desc: 'We employ the professional legally in their country. You get an invoice.' },
  { title: 'Local payroll and tax', desc: 'Paid in local currency, on local payroll, with withholding handled.' },
  { title: 'Statutory benefits', desc: 'Whatever their jurisdiction requires — healthcare, leave, contributions.' },
  { title: 'Onboarding support', desc: 'Equipment stipend, systems access, and a 30-day check-in cadence.' },
  { title: 'Replacement guarantee', desc: 'If the placement fails inside the guarantee window, we refill it free.' },
]
</script>

<style scoped>
.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
}
.cat-card { padding: 2rem; }
.cat-card__head {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}
.cat-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  background: var(--plum-50);
  border: 1px solid var(--plum-100);
  font-size: 1.5rem;
  flex-shrink: 0;
}
.cat-card__title { font-size: 1.2rem; margin-bottom: 0.15rem; }
.cat-card__from { font-size: 0.85rem; font-weight: 700; color: var(--plum-500); }
.cat-card__summary {
  color: var(--color-muted);
  font-size: 0.93rem;
  line-height: 1.68;
  margin-bottom: 1.5rem;
}
.cat-card__label {
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-light);
  margin-bottom: 0.6rem;
}
.cat-card__roles {
  margin-bottom: 1.35rem;
  display: grid;
  gap: 0.35rem;
}
.cat-card__roles li {
  font-size: 0.9rem;
  color: var(--color-body);
  padding-left: 1.1rem;
  position: relative;
}
.cat-card__roles li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.6em;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--plum-300);
}
.cat-card__tools {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* Vetting */
.vet-list {
  max-width: 780px;
  margin: 0 auto;
  list-style: none;
  display: grid;
  gap: 0.85rem;
}
.vet-item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}
.vet-item__num {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.05rem;
  color: var(--plum-300);
  flex-shrink: 0;
  padding-top: 0.1rem;
}
.vet-item__title { font-size: 1.05rem; margin-bottom: 0.3rem; }
.vet-item__desc { color: var(--color-muted); font-size: 0.93rem; margin: 0; }

/* Included */
.incl-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.75rem;
}
.incl-card { display: flex; gap: 0.85rem; align-items: flex-start; }
.incl-card__check {
  color: var(--accent-600);
  flex-shrink: 0;
  margin-top: 0.15rem;
}
.incl-card__title { font-size: 1rem; margin-bottom: 0.25rem; }
.incl-card__desc { color: var(--color-muted); font-size: 0.9rem; margin: 0; }

@media (max-width: 767px) {
  .cat-grid { grid-template-columns: 1fr; }
  .cat-card { padding: 1.5rem; }
}
</style>
