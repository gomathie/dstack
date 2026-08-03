<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">About</span>
        <h1 class="page-hero__title">Good work should not require emigrating</h1>
        <p class="page-hero__sub">
          Dubblestack exists so that talented professionals can build serious careers without
          leaving the countries and families they come from.
        </p>
      </div>
    </section>

    <!-- Story -->
    <section class="section">
      <div class="container story">
        <div class="story__text" v-reveal>
          <SectionHeading
            eyebrow="Our story"
            title="Started with one accountant in Caracas"
            align="left"
          />
          <div class="prose">
            <p>
              In {{ company.foundedYear }} we were trying to help a small logistics company in Texas hire a
              bookkeeper. The local market wanted $70,000 for someone junior. Meanwhile a chartered
              accountant with eleven years of experience in Caracas was driving a delivery van, because
              nobody in the market she could reach was hiring at any wage worth having.
            </p>
            <p>
              We put the two together. Six years later she runs a four-person finance team for the same
              client, from the same city, and the company has grown past what it could have afforded to
              staff locally.
            </p>
            <p>
              That mismatch is not rare — it is the ordinary condition of the global labour market. Talent
              is distributed evenly. Access to well-paid work is not. Every placement we have made since
              is a version of that first one.
            </p>
          </div>
        </div>
        <div class="story__media" v-reveal="100">
          <img src="/images/2150312701.jpg" alt="" class="story__image" loading="lazy" decoding="async" />
          <div class="story__badge">
            <strong>{{ new Date().getFullYear() - company.foundedYear }} years</strong>
            <span>placing global talent</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Numbers -->
    <section class="section section--tight section--alt">
      <div class="container">
        <StatBand :stats="stats" />
      </div>
    </section>

    <!-- Values -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="What we believe"
          title="Four things we will not trade away"
          sub="These are the positions that cost us money sometimes. That is how we know they are real."
        />
        <div class="values">
          <div v-for="(v, i) in values" :key="v.title" class="value-card" v-reveal="i * 70">
            <span class="value-card__num">{{ String(i + 1).padStart(2, '0') }}</span>
            <h3 class="value-card__title">{{ v.title }}</h3>
            <p class="value-card__desc">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Hubs -->
    <section class="section section--plum">
      <div class="container">
        <SectionHeading
          eyebrow="Where we are"
          title="Recruiting teams on the ground"
          sub="Not a remote sourcing function with a map on the wall — actual colleagues in each market."
          light
        />
        <div class="hubs">
          <div v-for="(hub, i) in hubs" :key="hub.country" class="hub" v-reveal="i * 80">
            <h3 class="hub__country">{{ hub.country }}</h3>
            <span class="hub__city">{{ hub.city }}</span>
            <p class="hub__note">{{ hub.note }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Team -->
    <section class="section">
      <div class="container">
        <SectionHeading
          eyebrow="Leadership"
          title="Who you will actually deal with"
        />
        <div class="team">
          <div v-for="(person, i) in team" :key="person.name" class="team-card card card--hover" v-reveal="i * 70">
            <img :src="person.avatar" :alt="person.name" class="team-card__avatar" loading="lazy" decoding="async" />
            <h3 class="team-card__name">{{ person.name }}</h3>
            <span class="team-card__role">{{ person.role }}</span>
            <p class="team-card__bio">{{ person.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <CtaBanner
      title="Work with us, or work for us"
      desc="Hiring companies start here. Professionals looking for placement should head to the talent page."
      primary-label="Hire talent"
      secondary-label="I'm looking for work"
      secondary-to="/for-talent"
      note=""
    />
  </div>
</template>

<script setup>
import SectionHeading from '../components/SectionHeading.vue'
import StatBand from '../components/StatBand.vue'
import CtaBanner from '../components/CtaBanner.vue'
import { company, stats } from '../data/site'

const values = [
  {
    title: 'Pay properly, locally',
    desc: 'Our professionals earn well above their local market, not just below yours. Arbitrage that only benefits one side does not hold together past the first year.',
  },
  {
    title: 'Employ people legally',
    desc: 'Everyone we place is on a real contract with real statutory benefits in their own country. The contractor-misclassification shortcut is cheaper and we do not take it.',
  },
  {
    title: 'Say no to bad fits',
    desc: 'If a role needs someone in your building, or the budget cannot support a decent wage, we will tell you rather than fill the seat and collect.',
  },
  {
    title: 'Stay accountable after placement',
    desc: 'An agency\'s job ends at the signature. Ours does not — we manage payroll, check in quarterly, and own the replacement if it fails.',
  },
]

const hubs = [
  { country: 'Venezuela', city: 'Caracas · Valencia', note: 'Our first hub and still the deepest bench in finance and legal support.' },
  { country: 'Peru', city: 'Lima', note: 'Strong accounting and customer success talent with natural US time-zone overlap.' },
  { country: 'Nigeria', city: 'Lagos', note: 'Fast-growing engineering and marketing pool, well aligned to European hours.' },
  { country: 'Ghana', city: 'Accra · Kumasi', note: 'Strong finance, support, and operations talent working comfortably across UK and US Eastern hours.' },
  { country: 'Philippines', city: 'Manila · Cebu', note: 'Deep experience in support and operations, covering Asia-Pacific coverage windows.' },
]

// ⚠️ PLACEHOLDER — replace with the real leadership team and photos.
const team = [
  { name: 'Elena Marquez', role: 'Head of Talent Operations', avatar: '/images/9.png', bio: 'Fifteen years in cross-border recruiting. Built our vetting process and still sits in on final interviews for senior roles.' },
  { name: 'Tobi Adeyemi', role: 'Operations Lead', avatar: '/images/18475.jpg', bio: 'Runs payroll, compliance, and employer-of-record operations across all four hubs. Formerly HR ops at a multinational logistics group.' },
  { name: 'Ana Rivas', role: 'Client Partner', avatar: '/images/2282.jpg', bio: 'Your first call and your account manager afterwards. Ten years placing finance and operations professionals.' },
  { name: 'Samuel Cruz', role: 'Head of Engineering Talent', avatar: '/images/16711.jpg', bio: 'Former engineering manager who now runs technical assessment. Every developer we place has been through his review.' },
]
</script>

<style scoped>
.story {
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;
}
.story__media { position: relative; }
.story__image {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}
.story__badge {
  position: absolute;
  bottom: -20px;
  left: -20px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  padding: 1rem 1.4rem;
  text-align: center;
}
.story__badge strong {
  display: block;
  font-family: var(--font-heading);
  font-size: 1.4rem;
  font-weight: 800;
  color: var(--plum-700);
  letter-spacing: -0.02em;
}
.story__badge span {
  font-size: 0.78rem;
  color: var(--color-light);
}

/* Values */
.values {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}
.value-card {
  padding-top: 1.25rem;
  border-top: 2px solid var(--plum-100);
}
.value-card__num {
  display: block;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 800;
  color: var(--plum-300);
  margin-bottom: 0.6rem;
}
.value-card__title { font-size: 1.1rem; margin-bottom: 0.5rem; }
.value-card__desc { color: var(--color-muted); font-size: 0.93rem; margin: 0; }

/* Hubs */
.hubs {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 1.5rem;
}
.hub {
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
}
.hub__country { font-size: 1.15rem; margin-bottom: 0.2rem; }
.hub__city {
  display: block;
  font-size: 0.83rem;
  color: var(--plum-300);
  font-weight: 600;
  margin-bottom: 0.8rem;
}
.hub__note {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin: 0;
}

/* Team */
.team {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}
.team-card {
  padding: 2rem 1.5rem;
  text-align: center;
}
.team-card__avatar {
  width: 88px;
  height: 88px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid var(--plum-100);
}
.team-card__name { font-size: 1.05rem; margin-bottom: 0.15rem; }
.team-card__role {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--plum-500);
  margin-bottom: 0.85rem;
}
.team-card__bio {
  font-size: 0.89rem;
  color: var(--color-muted);
  line-height: 1.65;
  margin: 0;
}

@media (max-width: 900px) {
  .story { grid-template-columns: 1fr; gap: 2.5rem; }
  .story__badge { left: 1rem; bottom: -16px; }
}
</style>
