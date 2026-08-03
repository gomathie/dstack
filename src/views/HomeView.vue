<template>
  <div class="home">
    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero__bg" aria-hidden="true"></div>
      <div class="container hero__content">
        <span class="pill pill--light animate-fade-in-up">
          <span class="hero__dot" aria-hidden="true"></span>
          Hiring in {{ company.hubs.length }} countries
        </span>
        <h1 class="hero__heading animate-fade-in-up delay-2">
          Elite worldwide talent,<br />without the US price tag
        </h1>
        <p class="hero__desc animate-fade-in-up delay-3">
          We recruit, vet, and manage full-time remote professionals for growing companies —
          at roughly 70% less than an equivalent local hire.
        </p>
        <div class="hero__actions animate-fade-in-up delay-4">
          <router-link to="/hire-form" class="btn btn--light btn--lg">Start hiring</router-link>
          <router-link to="/case-studies" class="btn btn--ghost-light btn--lg">See the results</router-link>
        </div>
        <p class="hero__note animate-fade-in-up delay-5">
          Vetted shortlist in 14 days · No recruiting fees · Payroll and compliance handled
        </p>
      </div>
    </section>

    <!-- ========== STATS ========== -->
    <section class="section section--tight stats-section">
      <div class="container">
        <StatBand :stats="stats" />
      </div>
    </section>

    <!-- ========== ROLES ========== -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="What we staff"
          title="Every role your team runs on"
          sub="Six practice areas, each with recruiters who have actually hired for that function."
        />
        <div class="roles-grid">
          <router-link
            v-for="(cat, i) in roleCategories"
            :key="cat.slug"
            to="/services"
            class="role-card card card--hover"
            v-reveal="i * 70"
          >
            <span class="role-card__icon" aria-hidden="true">{{ cat.icon }}</span>
            <h3 class="role-card__title">{{ cat.title }}</h3>
            <p class="role-card__desc">{{ cat.summary }}</p>
            <span class="role-card__from">Same flat rate →</span>
          </router-link>
        </div>
      </div>
    </section>

    <!-- ========== HOW IT WORKS ========== -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading
          eyebrow="How it works"
          title="Three steps, about two weeks"
          sub="You describe the role. We do the sourcing, testing, and interviewing. You pick from a shortlist."
        />
        <ol class="steps">
          <li v-for="(step, i) in steps" :key="step.title" class="step" v-reveal="i * 100">
            <div class="step__media">
              <img :src="step.image" alt="" class="step__image" loading="lazy" decoding="async" />
              <span class="step__number">{{ i + 1 }}</span>
            </div>
            <h3 class="step__title">{{ step.title }}</h3>
            <p class="step__desc">{{ step.desc }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- ========== TALENT PROFILES ========== -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Available now"
          title="Latest talent profiles"
          sub="A sample of professionals currently between placements. Real profiles are shared once we know your role."
        />
        <div class="talent-grid">
          <article v-for="(p, i) in profiles" :key="p.name" class="talent-card card card--hover" v-reveal="i * 60">
            <div class="talent-card__head">
              <img :src="p.avatar" :alt="`${p.name}, ${p.role}`" class="talent-card__avatar" loading="lazy" decoding="async" />
              <div>
                <h3 class="talent-card__name">{{ p.name }}</h3>
                <span class="talent-card__role">{{ p.role }}</span>
              </div>
            </div>
            <span class="pill pill--accent talent-card__cert">{{ p.cert }}</span>
            <p class="talent-card__desc">{{ p.desc }}</p>
          </article>
        </div>
        <div class="talent-cta">
          <router-link to="/hire-form" class="btn btn--outline">Request matching profiles</router-link>
        </div>
      </div>
    </section>

    <!-- ========== TESTIMONIALS ========== -->
    <section class="section section--plum quotes">
      <div class="container">
        <SectionHeading
          eyebrow="Client results"
          title="What changes after the first hire"
          light
        />
        <div class="quotes-grid">
          <figure v-for="(t, i) in testimonials" :key="t.author" class="quote-card" v-reveal="i * 90">
            <blockquote class="quote-card__text">“{{ t.quote }}”</blockquote>
            <figcaption class="quote-card__author">
              <img :src="t.avatar" alt="" class="quote-card__avatar" loading="lazy" decoding="async" />
              <span>
                <strong>{{ t.author }}</strong>
                <small>{{ t.role }}</small>
              </span>
            </figcaption>
          </figure>
        </div>
        <div class="quotes-cta">
          <router-link to="/case-studies" class="btn btn--light">Read the case studies</router-link>
        </div>
      </div>
    </section>

    <!-- ========== WHY ========== -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Why Dubblestack"
          title="Staffing without the usual friction"
          sub="We are not a job board and not an agency retainer. We hire the person, employ them properly, and stay accountable for the placement."
        />
        <div class="why-grid">
          <div v-for="(item, i) in whyItems" :key="item.title" class="why-card" v-reveal="i * 60">
            <span class="why-card__icon" aria-hidden="true">{{ item.icon }}</span>
            <h3 class="why-card__title">{{ item.title }}</h3>
            <p class="why-card__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== FAQ ========== -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading eyebrow="FAQ" title="Questions we get asked first" />
        <FaqList :items="faqs" />
        <p class="faq-more">
          Still deciding? <router-link to="/contact">Talk to us directly</router-link> —
          no pitch, just a straight answer on whether this fits.
        </p>
      </div>
    </section>

    <CtaBanner />
  </div>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import StatBand from '../components/StatBand.vue'
import CtaBanner from '../components/CtaBanner.vue'
import FaqList from '../components/FaqList.vue'
import { company, stats } from '../data/site'
import { roleCategories } from '../data/roles'
import { testimonials } from '../data/caseStudies'

const profiles = [
  { name: 'Mark', role: 'Accounting', cert: 'Certified Public Accountant', avatar: '/images/47.png', desc: 'Over 12 years across administration and accounting — audits, monthly and annual reporting, foreign exchange, and full AP/AR ownership.' },
  { name: 'David', role: 'Legal Assistant', cert: 'LLB · 8 years experience', avatar: '/images/16711.jpg', desc: 'Corporate lawyer for 8 years, focused on negotiating and reviewing commercial agreements and advising company leadership.' },
  { name: 'Maria', role: 'Marketing Specialist', cert: 'B.S. Social Communication', avatar: '/images/9.png', desc: '12+ years building communication and marketing strategy, managing digital content, and leading creative teams through brand growth.' },
  { name: 'Alex', role: 'Software Engineer', cert: 'B.S. Computer Science', avatar: '/images/18475.jpg', desc: 'Full-stack developer with 6+ years shipping scalable web applications on React, Node.js, and AWS.' },
  { name: 'Laura', role: 'Customer Success', cert: 'B.A. Business Administration', avatar: '/images/2282.jpg', desc: 'Five years supporting SaaS companies through onboarding, retention, and scaling customer relationships past first renewal.' },
  { name: 'Carlos', role: 'Executive Assistant', cert: 'Project Management Certified', avatar: '/images/33447.jpg', desc: 'Executive support specialist covering calendar, inbox, travel, and project coordination for distributed leadership teams.' },
]

const steps = [
  { title: 'Tell us the role', desc: 'A 30-minute call and a job description. We translate it into a scorecard we can actually hire against.', image: '/images/2150171838.jpg' },
  { title: 'We source and vet', desc: 'Our in-country teams recruit, test, and interview. You stay out of it until there is something worth reviewing.', image: '/images/2150312701.jpg' },
  { title: 'You choose and onboard', desc: 'Three to five finalists with scorecards and recorded intros. Pick one, and we handle contracts, payroll, and compliance.', image: '/images/18475.jpg' },
]

const whyItems = [
  { icon: '💰', title: '70% cost savings', desc: 'The same calibre of professional for a fraction of a US equivalent — without cutting their pay to get there.' },
  { icon: '🌍', title: 'Genuine global reach', desc: 'Recruiting teams on the ground in Venezuela, Peru, Nigeria, Ghana, and the Philippines.' },
  { icon: '⚡', title: 'Shortlist in 14 days', desc: 'Most roles reach a vetted shortlist inside two weeks of the kickoff call.' },
  { icon: '🛡️', title: 'Zero legal overhead', desc: 'We are the employer of record. Contracts, tax, and local compliance are our problem, not yours.' },
  { icon: '🕐', title: 'Your time zone', desc: 'We hire for the overlap hours you need, so your team is not waiting overnight for answers.' },
  { icon: '📋', title: 'One flat fee', desc: 'A single monthly number covering salary, benefits, and our work. No recruiting or onboarding charges.' },
]

const faqs = [
  { q: 'What exactly does Dubblestack do?', a: 'We are an international staff augmentation service. We manage recruiting, vetting, testing, and hiring of global talent on your behalf, then act as employer of record so the professional is properly and legally employed. You select who you work with; we handle everything around it.' },
  { q: 'What is the mission behind the company?', a: 'We are committed to creating equal opportunity for talent worldwide. Our aim is to let people stay in their home countries while earning a life-changing income, supporting their families and contributing to their local economies rather than having to emigrate to access good work.' },
  { q: 'How do you source talent?', a: 'We have recruiting teams based in Venezuela, Peru, Nigeria, Ghana, and the Philippines. They work through local universities, professional networks, and referrals to source, test, and interview candidates against your specific role requirements.' },
  { q: 'What does it cost?', a: 'One flat monthly fee per hire — the same simple structure for every role we staff. It covers the professional\'s full compensation, local payroll and benefits, and our recruiting and management work. There are no placement fees, recruiting fees, or onboarding charges. Send us the role and we quote a specific figure, usually within one business day.' },
  { q: 'What are the working hours?', a: 'Whatever overlap you need. Because our recruiting teams span several regions, we can source candidates aligned to almost any time zone. Coverage far outside a professional\'s local hours carries a shift differential, quoted up front.' },
  { q: 'Full-time or part-time?', a: 'Both. Most placements are full-time, but we staff part-time and contract engagements where the role genuinely warrants it.' },
  { q: 'Do I have to handle legal or tax paperwork?', a: 'No. We take that on. You share requirements, interview candidates, and choose your hire — contracts, tax withholding, statutory benefits, and compliance in the professional\'s country are handled on our side.' },
  { q: 'What if the hire does not work out?', a: 'Tell your account manager and we replace them at no additional cost within your plan\'s guarantee window — 60 days on Essential, 90 on Professional. We keep searching until the role is filled properly.' },
]
</script>

<style scoped>
/* ---- Hero ---- */
.hero {
  position: relative;
  min-height: min(88vh, 780px);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: calc(var(--header-height) + 3rem) 0 5rem;
}
.hero__bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(165deg, rgba(102, 2, 60, 0.92) 0%, rgba(61, 1, 36, 0.97) 62%),
    url('/images/hero-bg.jpg');
  background-position: center, top center;
  background-size: cover, cover;
  background-repeat: no-repeat;
  z-index: 0;
}
/* Radial bloom behind the headline for depth. */
.hero__bg::after {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  width: 1000px;
  height: 1000px;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(188, 144, 169, 0.28) 0%, transparent 60%);
}
.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
}
.hero__dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--accent-500);
  box-shadow: 0 0 0 3px rgba(20, 184, 166, 0.25);
}
.hero__heading {
  color: #fff;
  margin: 1.5rem 0 1.25rem;
  font-size: clamp(2.3rem, 5.6vw, 4rem);
  letter-spacing: -0.035em;
}
.hero__desc {
  color: rgba(255, 255, 255, 0.78);
  font-size: clamp(1.05rem, 1.9vw, 1.25rem);
  max-width: 620px;
  margin: 0 auto 2.25rem;
  text-wrap: pretty;
}
.hero__actions {
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
}
.hero__note {
  margin: 1.75rem 0 0;
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.5);
}

.stats-section { margin-top: -3.5rem; position: relative; z-index: 3; }

/* ---- Roles ---- */
.roles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
}
.role-card {
  display: flex;
  flex-direction: column;
  padding: 2rem;
}
.role-card__icon { font-size: 1.9rem; margin-bottom: 1rem; }
.role-card__title { font-size: 1.15rem; margin-bottom: 0.55rem; }
.role-card__desc {
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.65;
  margin-bottom: 1.25rem;
  flex: 1;
}
.role-card__from {
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--plum-700);
}

/* ---- Steps ---- */
.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
  list-style: none;
}
.step__media { position: relative; margin-bottom: 1.5rem; }
.step__image {
  width: 100%;
  height: 210px;
  object-fit: cover;
  border-radius: var(--radius-lg);
}
.step__number {
  position: absolute;
  bottom: -16px;
  left: 20px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--plum-700);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid var(--color-subtle);
}
.step__title { margin-bottom: 0.5rem; font-size: 1.2rem; }
.step__desc { color: var(--color-muted); font-size: 0.94rem; margin: 0; }

/* ---- Talent ---- */
.talent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
  gap: 1.5rem;
}
.talent-card { padding: 1.75rem; display: flex; flex-direction: column; }
.talent-card__head {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-bottom: 0.9rem;
}
.talent-card__avatar {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--plum-100);
  flex-shrink: 0;
}
.talent-card__name { font-size: 1.05rem; margin-bottom: 0.1rem; }
.talent-card__role {
  font-size: 0.86rem;
  font-weight: 600;
  color: var(--plum-500);
}
.talent-card__cert { align-self: flex-start; margin-bottom: 0.9rem; }
.talent-card__desc {
  color: var(--color-muted);
  font-size: 0.92rem;
  line-height: 1.68;
  margin: 0;
}
.talent-cta { text-align: center; margin-top: 2.5rem; }

/* ---- Quotes ---- */
.quotes-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
}
.quote-card {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-lg);
  padding: 2rem;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.quote-card__text {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  line-height: 1.7;
  margin: 0 0 1.5rem;
  flex: 1;
  text-wrap: pretty;
}
.quote-card__author {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
.quote-card__avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.25);
}
.quote-card__author strong {
  display: block;
  color: #fff;
  font-size: 0.92rem;
  font-weight: 650;
}
.quote-card__author small {
  display: block;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.82rem;
}
.quotes-cta { text-align: center; margin-top: 2.75rem; }

/* ---- Why ---- */
.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
  gap: 2rem 2.5rem;
}
.why-card__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--plum-50);
  border: 1px solid var(--plum-100);
  font-size: 1.4rem;
  margin-bottom: 1rem;
}
.why-card__title { font-size: 1.1rem; margin-bottom: 0.45rem; }
.why-card__desc { color: var(--color-muted); font-size: 0.93rem; margin: 0; }

.faq-more {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.93rem;
  color: var(--color-muted);
}
.faq-more a {
  color: var(--plum-700);
  font-weight: 650;
  text-decoration: underline;
  text-underline-offset: 3px;
}

@media (max-width: 767px) {
  .hero { min-height: auto; padding: calc(var(--header-height) + 2.5rem) 0 3.5rem; }
  .hero__actions .btn { width: 100%; max-width: 320px; }
  .stats-section { margin-top: 0; }
  .roles-grid, .talent-grid { grid-template-columns: 1fr; }
}
</style>
