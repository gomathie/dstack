<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">For talent</span>
        <h1 class="page-hero__title">Build an international career from home</h1>
        <p class="page-hero__sub">
          Full-time roles with companies abroad, paid well above local market, on a real contract
          with real benefits — without leaving your country.
        </p>
        <div class="page-hero__actions">
          <a href="#roles" class="btn btn--light btn--lg">See open roles</a>
          <router-link to="/profile-login" class="btn btn--ghost-light btn--lg">Create a profile</router-link>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Why join"
          title="What working through Dubblestack means"
          sub="We are not a freelance marketplace. You get one employer, one salary, and a career path."
        />
        <div class="benefits">
          <div v-for="(b, i) in benefits" :key="b.title" class="benefit" v-reveal="i * 65">
            <span class="benefit__icon" aria-hidden="true">{{ b.icon }}</span>
            <h3 class="benefit__title">{{ b.title }}</h3>
            <p class="benefit__desc">{{ b.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Process -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading
          eyebrow="The process"
          title="From application to first day"
          sub="Usually three to four weeks. You will always know which stage you are at."
        />
        <ol class="process">
          <li v-for="(stage, i) in vettingStages" :key="stage.title" class="process__item" v-reveal="i * 70">
            <span class="process__num">{{ i + 1 }}</span>
            <div>
              <h3 class="process__title">{{ stage.title }}</h3>
              <p class="process__desc">{{ stage.desc }}</p>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <!-- Open roles -->
    <section id="roles" class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Open roles"
          title="Currently recruiting"
          sub="Roles we are actively filling. If nothing matches, create a profile anyway — most placements come from our existing pool."
        />
        <div class="openings">
          <article v-for="(job, i) in openings" :key="job.title + job.location" class="opening" v-reveal="i * 50">
            <div class="opening__main">
              <h3 class="opening__title">{{ job.title }}</h3>
              <div class="opening__meta">
                <span class="pill">{{ job.category }}</span>
                <span class="opening__detail">{{ job.location }}</span>
                <span class="opening__detail">{{ job.hours }}</span>
              </div>
            </div>
            <div class="opening__side">
              <span class="opening__terms">{{ job.terms }}</span>
              <router-link to="/profile-login" class="btn btn--outline btn--sm">Apply</router-link>
            </div>
          </article>
        </div>
        <p class="openings__note">
          Listings are illustrative of the roles we regularly fill. Availability changes weekly.
        </p>
      </div>
    </section>

    <!-- FAQ -->
    <section class="section section--alt">
      <div class="container">
        <SectionHeading eyebrow="FAQ" title="Questions from candidates" />
        <FaqList :items="talentFaqs" />
      </div>
    </section>

    <CtaBanner
      title="Put your profile in front of us"
      desc="It takes about fifteen minutes. We review every submission, and we tell you either way."
      primary-label="Create your profile"
      primary-to="/profile-login"
      secondary-label="Ask a question"
      secondary-to="/contact"
      note="No fees, ever. Candidates never pay Dubblestack anything."
    />
  </div>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import CtaBanner from '../components/CtaBanner.vue'
import FaqList from '../components/FaqList.vue'
import { vettingStages } from '../data/roles'

const benefits = [
  { icon: '💵', title: 'Paid above local market', desc: 'Compensation benchmarked to your skill, not to the cheapest rate we could get away with. Paid in local currency, on time, every month.' },
  { icon: '📄', title: 'A real employment contract', desc: 'You are properly employed with statutory benefits in your own country — not classified as a disposable contractor.' },
  { icon: '🏠', title: 'Stay where you are', desc: 'No relocation, no visa process, no leaving your family. Work from home for a company on the other side of the world.' },
  { icon: '📈', title: 'One employer, not gigs', desc: 'Long-term full-time placements with one company. Most of our professionals are still in the same seat after two years.' },
  { icon: '🎓', title: 'Support that continues', desc: 'A Dubblestack account manager stays with you after placement — for reviews, raises, and anything that goes wrong.' },
  { icon: '🌐', title: 'International experience', desc: 'Real exposure to how companies abroad operate, which compounds into everything you do next.' },
]

// ⚠️ PLACEHOLDER — swap for the live vacancy list before launch.
// Compensation is discussed with candidates directly rather than listed here.
const openings = [
  { title: 'Senior Staff Accountant', category: 'Finance', location: 'Peru · Remote', hours: 'US Eastern overlap', terms: 'Full-time' },
  { title: 'Full-Stack Engineer (React / Node)', category: 'Engineering', location: 'Nigeria · Remote', hours: 'European overlap', terms: 'Full-time' },
  { title: 'Customer Support Specialist', category: 'Customer Success', location: 'Philippines · Remote', hours: 'APAC + US West', terms: 'Full-time' },
  { title: 'Executive Assistant', category: 'Operations', location: 'Venezuela · Remote', hours: 'US Central overlap', terms: 'Full-time' },
  { title: 'Bookkeeper', category: 'Finance', location: 'Ghana · Remote', hours: 'UK / US Eastern overlap', terms: 'Full-time' },
  { title: 'Paid Media Buyer', category: 'Marketing', location: 'Any hub · Remote', hours: 'Flexible', terms: 'Part-time or full-time' },
  { title: 'Paralegal (Commercial Contracts)', category: 'Legal', location: 'Venezuela · Remote', hours: 'US Eastern overlap', terms: 'Full-time' },
]

const talentFaqs = [
  { q: 'Does it cost me anything to apply?', a: 'No. Candidates never pay Dubblestack — not to apply, not to be placed, not ever. Our fee is paid entirely by the hiring company. If anyone claiming to represent us asks you for money, it is not us.' },
  { q: 'Who actually employs me?', a: 'Dubblestack does, through our local entity or employer-of-record partner in your country. You get a proper contract, local payroll, tax withholding, and whatever statutory benefits your jurisdiction requires. You work day-to-day with the client company.' },
  { q: 'What English level do I need?', a: 'Comfortable working fluency — you need to run a video call, write a clear email, and handle a difficult conversation. We assess written and spoken English early in the process and tell you honestly where you stand.' },
  { q: 'What hours will I work?', a: 'It depends on the role, and we tell you the required overlap before you interview. Many roles need four to six hours of overlap with the client\'s working day; some are fully flexible. You will never be surprised by the schedule after accepting.' },
  { q: 'Do I need my own equipment?', a: 'A reliable computer and stable internet are required to start. Most placements include an equipment stipend after the first month, and clients frequently upgrade hardware for long-term hires.' },
  { q: 'What if I do not hear back?', a: 'You will. We reply to every application, including rejections, and we tell you which stage you did not pass. If a role is not right we keep your profile in the pool and come back when something fits.' },
]
</script>

<style scoped>
.page-hero__actions {
  display: flex;
  gap: 0.85rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}

.benefits {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem 2.5rem;
}
.benefit__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--plum-50);
  border: 1px solid var(--plum-100);
  font-size: 1.35rem;
  margin-bottom: 1rem;
}
.benefit__title { font-size: 1.08rem; margin-bottom: 0.4rem; }
.benefit__desc { color: var(--color-muted); font-size: 0.93rem; margin: 0; }

/* Process */
.process {
  max-width: 780px;
  margin: 0 auto;
  list-style: none;
  display: grid;
  gap: 0.85rem;
}
.process__item {
  display: flex;
  gap: 1.25rem;
  align-items: flex-start;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.5rem;
}
.process__num {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--plum-700);
  color: #fff;
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.process__title { font-size: 1.05rem; margin-bottom: 0.3rem; }
.process__desc { color: var(--color-muted); font-size: 0.93rem; margin: 0; }

/* Openings */
.openings {
  display: grid;
  gap: 0.85rem;
  max-width: 900px;
  margin: 0 auto;
}
.opening {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  flex-wrap: wrap;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1.4rem 1.6rem;
  transition: border-color var(--transition-normal), box-shadow var(--transition-normal);
}
.opening:hover { border-color: var(--plum-100); box-shadow: var(--shadow-md); }
.opening__title { font-size: 1.08rem; margin-bottom: 0.5rem; }
.opening__meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-wrap: wrap;
}
.opening__detail { font-size: 0.85rem; color: var(--color-light); }
.opening__side {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}
.opening__terms {
  font-size: 0.88rem;
  font-weight: 650;
  color: var(--color-light);
  white-space: nowrap;
}
.openings__note {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.85rem;
  color: var(--color-light);
}

@media (max-width: 600px) {
  .page-hero__actions .btn { width: 100%; max-width: 300px; }
  .opening { flex-direction: column; align-items: flex-start; }
  .opening__side { width: 100%; justify-content: space-between; }
}
</style>
