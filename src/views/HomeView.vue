<template>
  <div class="home">
    <!-- ========== HERO ========== -->
    <section class="hero">
      <div class="hero__bg"></div>
      <div class="hero__overlay"></div>
      <div class="container hero__content">
        <p class="hero__pretitle animate-fade-in-up">Qualified Professionals to Expand Your Business</p>
        <h1 class="hero__heading animate-fade-in-up delay-2">Elite Worldwide Talent</h1>
        <p class="hero__desc animate-fade-in-up delay-3">Your next hire at 70% lower cost than a US equivalent.</p>
        <router-link to="/hire-form" class="hero__cta animate-fade-in-up delay-4">
          Recruit now
        </router-link>
      </div>
      <div class="hero__scroll-indicator">
        <div class="hero__scroll-dot"></div>
      </div>
    </section>

    <!-- ========== TALENT PROFILES ========== -->
    <section class="section talent">
      <div class="container">
        <h2 class="talent__title">Latest Talent Profiles</h2>
        <div class="talent__grid">
          <div v-for="(profile, i) in profiles" :key="i" class="talent-card card">
            <div class="talent-card__avatar-wrap">
              <img :src="profile.avatar" :alt="profile.name" class="talent-card__avatar" />
            </div>
            <div class="talent-card__info">
              <h3 class="talent-card__name">{{ profile.name }}</h3>
              <span class="talent-card__role">{{ profile.role }}</span>
              <span class="talent-card__cert">{{ profile.cert }}</span>
            </div>
            <p class="talent-card__desc">{{ profile.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== HOW IT WORKS ========== -->
    <section class="section section--alt how-it-works">
      <div class="container">
        <h2 class="how-it-works__title">How It Works</h2>
        <div class="how-it-works__steps">
          <div v-for="(step, i) in steps" :key="i" class="step-card">
            <div class="step-card__number">{{ i + 1 }}</div>
            <img :src="step.image" :alt="step.title" class="step-card__image" />
            <h3 class="step-card__title">{{ step.title }}</h3>
            <p class="step-card__desc">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== WHY DUBBLESTACK ========== -->
    <section class="section why">
      <div class="container">
        <h2 class="why__title">Why DubbleStack</h2>
        <div class="why__grid">
          <div v-for="(item, i) in whyItems" :key="i" class="why-card card">
            <div class="why-card__icon">{{ item.icon }}</div>
            <h3 class="why-card__title">{{ item.title }}</h3>
            <p class="why-card__desc">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== FAQ ========== -->
    <section class="section section--alt faq">
      <div class="container">
        <h2 class="faq__title">Frequently Asked Questions</h2>
        <div class="faq__list">
          <div v-for="(item, i) in faqs" :key="i" class="faq-item" :class="{ 'faq-item--open': openFaq === i }">
            <button class="faq-item__question" @click="toggleFaq(i)">
              <span>{{ item.q }}</span>
              <svg class="faq-item__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>
            </button>
            <div class="faq-item__answer" v-show="openFaq === i">
              <p>{{ item.a }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========== CTA ========== -->
    <section class="cta-section">
      <div class="container cta-section__inner">
        <h2 class="cta-section__title">Ready to Build Your Dream Team?</h2>
        <p class="cta-section__desc">Get started today and find the perfect talent for your business.</p>
        <router-link to="/hire-form" class="btn btn--primary">Start Recruiting</router-link>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const profiles = [
  { name: 'Mark', role: 'Accounting', cert: 'B.S Certified Public Accountant', avatar: '/images/47.png', desc: 'Over 12 years of experience in Administration and Accounting. Accountable for all accounting functions, including audits, monthly and annual reporting, foreign exchange, accounts payable and receivable, and more.' },
  { name: 'David', role: 'Legal Assistant', cert: 'LLB With 8 Years Of Experience', avatar: '/images/16711.jpg', desc: 'I have worked as a corporate lawyer for 8 years, primarily focusing on negotiating and reviewing commercial and corporate agreements, while also offering legal counsel and support to companies.' },
  { name: 'Maria', role: 'Marketing Specialist', cert: 'B.S Social Communication', avatar: '/images/9.png', desc: 'I possess over 12 years of experience in creating communication and marketing strategies, managing digital content, and leading creative teams to achieve brand growth.' },
  { name: 'Alex', role: 'Software Engineer', cert: 'B.S Computer Science', avatar: '/images/18475.jpg', desc: 'Full-stack developer with 6+ years experience building scalable web applications using React, Node.js, and cloud services.' },
  { name: 'Laura', role: 'Customer Success', cert: 'B.A Business Administration', avatar: '/images/2282.jpg', desc: 'Customer-centric professional with 5+ years supporting SaaS companies in onboarding, retention, and scaling customer relationships.' },
  { name: 'Carlos', role: 'Virtual Assistant', cert: 'Project Management Certified', avatar: '/images/33447.jpg', desc: 'Highly organized virtual assistant with expertise in executive support, calendar management, and project coordination for remote teams.' },
]

const steps = [
  { title: 'Tell Us Your Needs', desc: 'Share the role requirements and job description with our team.', image: '/images/2150171838.jpg' },
  { title: 'We Source & Vet', desc: 'Our global recruiting teams find, test, and interview the best candidates.', image: '/images/2150312701.jpg' },
  { title: 'You Select & Hire', desc: 'Review the shortlisted profiles and choose your ideal team member.', image: '/images/18475.jpg' },
]

const whyItems = [
  { icon: '💰', title: '70% Cost Savings', desc: 'Get the same quality talent at a fraction of the cost compared to US equivalents.' },
  { icon: '🌍', title: 'Global Talent Pool', desc: 'Access professionals from Venezuela, Peru, Nigeria, Philippines and more.' },
  { icon: '⚡', title: 'Fast Hiring', desc: 'Our streamlined process gets you matched with talent quickly and efficiently.' },
  { icon: '🛡️', title: 'Zero Legal Hassle', desc: 'We handle all legal, tax, and compliance documentation so you don\'t have to.' },
  { icon: '🕐', title: 'Flexible Time Zones', desc: 'Talent available to work in any time zone you prefer.' },
  { icon: '📋', title: 'Simple Pricing', desc: 'One flat monthly fee. No recruiting or onboarding charges.' },
]

const faqs = [
  { q: 'What are the services offered by DubbleStack?', a: 'DubbleStack is an international staff augmentation service that manages the recruiting, vetting, testing, and hiring of global talent on your behalf. Simply select the professionals you\'d like to partner with from our talent network, and we\'ll handle everything else.' },
  { q: 'What is the mission of DubbleStack?', a: 'At DubbleStack, we are committed to creating equal opportunities for talent worldwide. Our mission is to empower individuals to stay in their home countries while earning life-changing incomes, enabling them to support their families and contribute to their local communities.' },
  { q: 'How does DubbleStack source its talent?', a: 'DubbleStack has recruiting teams based in Venezuela, Peru, Nigeria, and the Philippines, enabling us to operate across various time zones globally. Our team collaborates with local resources in these countries to source, test, and interview talent tailored to your specific job requirements.' },
  { q: 'What are the costs associated with working with DubbleStack?', a: 'Each role varies, and the cost may change based on your specific requirements. Contact us for a consultation, and once we assess your needs, we\'ll provide you with an accurate answer.' },
  { q: 'What are your pricing details?', a: 'At DubbleStack, we\'ve aimed to simplify the process. We offer a single flat monthly fee for roles that do not involve commission. You pay once a month starting from the initial date, with no additional recruiting or onboarding charges.' },
  { q: 'What are the working hours for DubbleStack talent?', a: 'We will identify talent available to work in any time zone you prefer. Our recruiting teams located worldwide enable us to source candidates that align with nearly every time zone.' },
  { q: 'Are these individuals working part-time or full-time?', a: 'We have talent that can be tailored to meet your needs.' },
  { q: 'Do I need to complete any legal or tax documentation?', a: 'We take on that responsibility so you don\'t have to. Simply share your requirements, conduct interviews, and choose your preferred candidate, and we\'ll handle everything else!' },
]

const openFaq = ref(0)
function toggleFaq(i) {
  openFaq.value = openFaq.value === i ? -1 : i
}
</script>

<style scoped>
/* ---- Hero ---- */
.hero {
  position: relative;
  min-height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}
.hero__bg {
  position: absolute;
  inset: 0;
  background-image: url('/images/hero-bg.jpg');
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
}
.hero__bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, #BC90A9 0%, #000000 53%);
  opacity: 0.88;
  z-index: 1;
}
.hero__overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
}
.hero__content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 6rem 1rem 4rem;
}
.hero__pretitle {
  font-family: 'Roboto', sans-serif;
  font-size: 18px;
  font-weight: 400;
  color: #BC90A9;
  margin-bottom: 0.5rem;
}
.hero__heading {
  font-family: 'Roboto', sans-serif;
  color: #BC90A9;
  font-size: clamp(2rem, 4.5vw, 40px);
  font-weight: 600;
  margin-bottom: 1rem;
  letter-spacing: -0.01em;
}
.hero__desc {
  font-family: 'Roboto', sans-serif;
  color: #BC90A9;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 2.5rem;
}
.hero__cta {
  display: inline-block;
  background-color: #BC90A9;
  color: #66023C;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 1rem;
  padding: 0.85rem 2.5rem;
  border-radius: 15px;
  border: none;
  text-decoration: none;
  transition: all var(--transition-normal);
}
.hero__cta:hover {
  background-color: #d4a8c0;
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(188, 144, 169, 0.3);
}
.hero__scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  width: 26px;
  height: 42px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 13px;
}
.hero__scroll-dot {
  width: 4px;
  height: 8px;
  background: #fff;
  border-radius: 2px;
  margin: 6px auto 0;
  animation: scrollBounce 2s ease-in-out infinite;
}
@keyframes scrollBounce {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(14px); opacity: 0.3; }
}

/* ---- Talent ---- */
.talent__title {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
}
.talent__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--brand-primary);
  border-radius: 2px;
  margin: 0.8rem auto 0;
}
.talent__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
  gap: 2rem;
}
.talent-card {
  padding: 2rem;
  text-align: center;
}
.talent-card__avatar-wrap {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  margin: 0 auto 1rem;
  border: 3px solid var(--brand-primary);
  padding: 3px;
  background: linear-gradient(135deg, var(--brand-primary), var(--accent-blue));
}
.talent-card__avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}
.talent-card__info {
  margin-bottom: 1rem;
}
.talent-card__name {
  font-size: 1.15rem;
  margin-bottom: 0.25rem;
}
.talent-card__role {
  display: block;
  color: var(--brand-primary);
  font-weight: 600;
  font-size: 0.9rem;
}
.talent-card__cert {
  display: block;
  color: var(--color-light);
  font-size: 0.8rem;
  margin-top: 0.15rem;
}
.talent-card__desc {
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.6;
  margin: 0;
}

/* ---- How It Works ---- */
.how-it-works__title {
  text-align: center;
  margin-bottom: 3rem;
}
.how-it-works__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--brand-primary);
  border-radius: 2px;
  margin: 0.8rem auto 0;
}
.how-it-works__steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2.5rem;
}
.step-card {
  text-align: center;
  position: relative;
}
.step-card__number {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--brand-primary);
  color: #fff;
  font-weight: 800;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 15px rgba(102, 2, 60, 0.3);
}
.step-card__image {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: var(--radius-md);
  margin-bottom: 1.5rem;
}
.step-card__title {
  margin-bottom: 0.5rem;
}
.step-card__desc {
  color: var(--color-muted);
  font-size: 0.95rem;
  margin: 0;
}

/* ---- Why ---- */
.why__title {
  text-align: center;
  margin-bottom: 3rem;
}
.why__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--brand-primary);
  border-radius: 2px;
  margin: 0.8rem auto 0;
}
.why__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}
.why-card {
  padding: 2rem;
  text-align: center;
}
.why-card__icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}
.why-card__title {
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}
.why-card__desc {
  color: var(--color-muted);
  font-size: 0.9rem;
  margin: 0;
}

/* ---- FAQ ---- */
.faq__title {
  text-align: center;
  margin-bottom: 3rem;
}
.faq__title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: var(--brand-primary);
  border-radius: 2px;
  margin: 0.8rem auto 0;
}
.faq__list {
  max-width: 800px;
  margin: 0 auto;
}
.faq-item {
  background: var(--color-surface);
  border-radius: var(--radius-md);
  margin-bottom: 0.75rem;
  box-shadow: var(--shadow-sm);
  overflow: hidden;
  transition: box-shadow var(--transition-normal);
}
.faq-item:hover {
  box-shadow: var(--shadow-md);
}
.faq-item__question {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  background: none;
  border: none;
  text-align: left;
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--color-dark);
  gap: 1rem;
}
.faq-item__icon {
  flex-shrink: 0;
  transition: transform var(--transition-normal);
}
.faq-item--open .faq-item__icon {
  transform: rotate(180deg);
}
.faq-item__answer {
  padding: 0 1.5rem 1.25rem;
  color: var(--color-muted);
  font-size: 0.9rem;
  line-height: 1.7;
}
.faq-item__answer p { margin: 0; }

/* ---- CTA ---- */
.cta-section {
  background: linear-gradient(135deg, #66023c 0%, #2d0f3e 100%);
  padding: 5rem 0;
}
.cta-section__inner {
  text-align: center;
}
.cta-section__title {
  color: #fff;
  font-size: clamp(1.5rem, 3vw, 2.2rem);
  margin-bottom: 1rem;
}
.cta-section__desc {
  color: rgba(255,255,255,0.7);
  font-size: 1.1rem;
  margin-bottom: 2rem;
}

/* ---- Responsive ---- */
@media (max-width: 767px) {
  .talent__grid {
    grid-template-columns: 1fr;
  }
  .hero__content {
    padding: 8rem 1rem 3rem;
  }
}
</style>
