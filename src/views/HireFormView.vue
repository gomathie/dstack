<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Start hiring</span>
        <h1 class="page-hero__title">Tell us about the role</h1>
        <p class="page-hero__sub">
          Five minutes here saves a month of searching. We reply within one business day with next
          steps and an indicative monthly rate.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container hire">
        <!-- Form -->
        <div class="hire__form-wrap card">
          <div v-if="sent" class="sent" role="status">
            <div class="sent__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 class="sent__title">Request received</h2>
            <p class="sent__desc">
              Thanks{{ form.name ? `, ${form.name.split(' ')[0]}` : '' }}. We'll email
              <strong>{{ form.email }}</strong> within one business day about the
              <strong>{{ form.role }}</strong> role.
            </p>
            <div class="sent__actions">
              <router-link to="/case-studies" class="btn btn--primary">Read case studies</router-link>
              <button class="btn btn--outline" @click="reset">Submit another role</button>
            </div>
          </div>

          <form v-else class="form" novalidate @submit.prevent="submit">
            <fieldset class="fieldset">
              <legend class="fieldset__legend">About you</legend>
              <div class="form__row">
                <div class="form__group">
                  <label for="h-company" class="form__label">Company name *</label>
                  <input
                    id="h-company" v-model.trim="form.company" type="text" class="form__input"
                    :class="{ 'form__input--error': errors.company }"
                    :aria-invalid="!!errors.company" :aria-describedby="errors.company ? 'e-company' : undefined"
                    placeholder="Your company"
                  />
                  <p v-if="errors.company" id="e-company" class="form__error">{{ errors.company }}</p>
                </div>
                <div class="form__group">
                  <label for="h-name" class="form__label">Your name *</label>
                  <input
                    id="h-name" v-model.trim="form.name" type="text" class="form__input"
                    :class="{ 'form__input--error': errors.name }"
                    :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'e-name' : undefined"
                    placeholder="Full name"
                  />
                  <p v-if="errors.name" id="e-name" class="form__error">{{ errors.name }}</p>
                </div>
              </div>
              <div class="form__row">
                <div class="form__group">
                  <label for="h-email" class="form__label">Work email *</label>
                  <input
                    id="h-email" v-model.trim="form.email" type="email" class="form__input"
                    :class="{ 'form__input--error': errors.email }"
                    :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'e-email' : undefined"
                    placeholder="you@company.com"
                  />
                  <p v-if="errors.email" id="e-email" class="form__error">{{ errors.email }}</p>
                </div>
                <div class="form__group">
                  <label for="h-phone" class="form__label">Phone</label>
                  <input id="h-phone" v-model.trim="form.phone" type="tel" class="form__input" placeholder="Optional" />
                </div>
              </div>
            </fieldset>

            <fieldset class="fieldset">
              <legend class="fieldset__legend">About the role</legend>
              <div class="form__group">
                <label for="h-role" class="form__label">Role you need *</label>
                <input
                  id="h-role" v-model.trim="form.role" type="text" class="form__input"
                  :class="{ 'form__input--error': errors.role }"
                  :aria-invalid="!!errors.role" :aria-describedby="errors.role ? 'e-role' : undefined"
                  placeholder="e.g. Staff Accountant, Executive Assistant, React Engineer"
                />
                <p v-if="errors.role" id="e-role" class="form__error">{{ errors.role }}</p>
              </div>

              <div class="form__row">
                <div class="form__group">
                  <label for="h-category" class="form__label">Practice area</label>
                  <select id="h-category" v-model="form.category" class="form__input">
                    <option value="">Not sure yet</option>
                    <option v-for="cat in roleCategories" :key="cat.slug" :value="cat.slug">{{ cat.title }}</option>
                  </select>
                </div>
                <div class="form__group">
                  <label for="h-seniority" class="form__label">Seniority</label>
                  <select id="h-seniority" v-model="form.seniority" class="form__input">
                    <option value="">Select level</option>
                    <option value="junior">Junior (0–2 years)</option>
                    <option value="mid">Mid-level (3–5 years)</option>
                    <option value="senior">Senior (6+ years)</option>
                    <option value="lead">Lead / Manager</option>
                  </select>
                </div>
              </div>

              <div class="form__row">
                <div class="form__group">
                  <label for="h-timezone" class="form__label">Overlap hours needed</label>
                  <select id="h-timezone" v-model="form.timezone" class="form__input">
                    <option value="">Select time zone</option>
                    <option value="EST">US Eastern</option>
                    <option value="CST">US Central</option>
                    <option value="MST">US Mountain</option>
                    <option value="PST">US Pacific</option>
                    <option value="GMT">UK / Europe</option>
                    <option value="APAC">Asia-Pacific</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>
                <div class="form__group">
                  <label for="h-type" class="form__label">Employment type</label>
                  <select id="h-type" v-model="form.type" class="form__input">
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract</option>
                  </select>
                </div>
              </div>

              <div class="form__row">
                <div class="form__group">
                  <label for="h-count" class="form__label">How many hires?</label>
                  <select id="h-count" v-model="form.count" class="form__input">
                    <option value="1">1</option>
                    <option value="2-4">2–4</option>
                    <option value="5+">5 or more</option>
                  </select>
                </div>
                <div class="form__group">
                  <label for="h-start" class="form__label">Ideal start</label>
                  <select id="h-start" v-model="form.start" class="form__input">
                    <option value="asap">As soon as possible</option>
                    <option value="1month">Within a month</option>
                    <option value="quarter">This quarter</option>
                    <option value="exploring">Just exploring</option>
                  </select>
                </div>
              </div>

              <div class="form__group">
                <label for="h-details" class="form__label">Anything else we should know?</label>
                <textarea
                  id="h-details" v-model.trim="form.details" rows="5" class="form__input form__textarea"
                  placeholder="Tools they'll need to know, experience level, what the first 90 days look like…"
                ></textarea>
              </div>
            </fieldset>

            <button type="submit" class="btn btn--primary btn--block btn--lg">
              Send request
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>
            <p class="form__note">
              No obligation, and no charge until a hire starts. See our
              <router-link to="/privacy-policy">privacy policy</router-link>.
            </p>
          </form>
        </div>

        <!-- Side panel -->
        <aside class="hire__aside">
          <div class="aside-card">
            <h2 class="aside-card__title">What happens next</h2>
            <ol class="timeline">
              <li v-for="(s, i) in nextSteps" :key="s.title" class="timeline__item">
                <span class="timeline__dot">{{ i + 1 }}</span>
                <div>
                  <strong>{{ s.title }}</strong>
                  <span>{{ s.desc }}</span>
                </div>
              </li>
            </ol>
          </div>

          <div class="aside-card aside-card--quiet">
            <h2 class="aside-card__title">Rather just talk?</h2>
            <p class="aside-card__text">
              Some roles are easier to explain out loud. Book a call instead and we will take
              the details there.
            </p>
            <router-link to="/contact" class="btn btn--outline btn--block btn--sm">Contact us</router-link>
          </div>

          <div class="aside-card aside-card--quiet">
            <h2 class="aside-card__title">Looking for work instead?</h2>
            <p class="aside-card__text">
              This form is for companies hiring. Professionals should start on the talent page.
            </p>
            <router-link to="/for-talent" class="btn btn--outline btn--block btn--sm">For talent</router-link>
          </div>
        </aside>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { roleCategories } from '../data/roles'

const form = reactive({
  company: '', name: '', email: '', phone: '',
  role: '', category: '', seniority: '', timezone: '',
  type: 'full-time', count: '1', start: 'asap', details: '',
})

const errors = reactive({ company: '', name: '', email: '', role: '' })
const sent = ref(false)

function submit() {
  errors.company = form.company ? '' : 'We need your company name.'
  errors.name = form.name ? '' : 'Please tell us your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)
    ? ''
    : 'Enter a valid email address so we can reply.'
  errors.role = form.role ? '' : 'Which role are you trying to fill?'

  if (errors.company || errors.name || errors.email || errors.role) return

  // NOTE: static site — no backend wired up yet. Point this at a form endpoint
  // (Cloudflare Pages Function, Formspree, etc.) before launch.
  sent.value = true
}

function reset() {
  Object.assign(form, {
    company: '', name: '', email: '', phone: '',
    role: '', category: '', seniority: '', timezone: '',
    type: 'full-time', count: '1', start: 'asap', details: '',
  })
  Object.assign(errors, { company: '', name: '', email: '', role: '' })
  sent.value = false
}

const nextSteps = [
  { title: 'We reply within a day', desc: 'A real person reads this and comes back with questions and an indicative rate.' },
  { title: 'Thirty-minute scoping call', desc: 'We turn your description into a scorecard we can hire against.' },
  { title: 'We search, you wait', desc: 'Our in-country teams source, test, and interview. Usually 10–14 days.' },
  { title: 'You meet finalists', desc: 'Three to five candidates with scorecards and recorded intros attached.' },
  { title: 'They start', desc: 'We handle the contract, payroll, equipment, and onboarding cadence.' },
]
</script>

<style scoped>
.hire {
  display: grid;
  grid-template-columns: 1.5fr 0.85fr;
  gap: 2.5rem;
  align-items: start;
}
.hire__form-wrap { padding: 2.5rem; }

.fieldset {
  border: none;
  margin-bottom: 1.5rem;
}
.fieldset__legend {
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-light);
  padding-bottom: 0.85rem;
  margin-bottom: 1.25rem;
  border-bottom: 1px solid var(--color-border);
  width: 100%;
}

.form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
}
.form__group { margin-bottom: 1.25rem; }
.form__label {
  display: block;
  font-size: 0.85rem;
  font-weight: 650;
  color: var(--color-dark);
  margin-bottom: 0.4rem;
}
.form__input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  background: var(--color-bg);
  color: var(--color-body);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}
.form__input:focus {
  outline: none;
  border-color: var(--plum-500);
  background: var(--color-surface);
  box-shadow: 0 0 0 4px rgba(142, 18, 89, 0.09);
}
.form__input--error { border-color: #C53030; }
.form__textarea { resize: vertical; min-height: 120px; }
select.form__input { cursor: pointer; }
.form__error {
  margin: 0.4rem 0 0;
  font-size: 0.82rem;
  color: #C53030;
  font-weight: 600;
}
.form__note {
  margin: 1rem 0 0;
  font-size: 0.83rem;
  color: var(--color-light);
  text-align: center;
}
.form__note a { color: var(--plum-700); text-decoration: underline; text-underline-offset: 2px; }

/* Success */
.sent { text-align: center; padding: 2rem 0; }
.sent__icon {
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background: var(--accent-100);
  color: var(--accent-600);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
}
.sent__title { font-size: 1.35rem; margin-bottom: 0.6rem; }
.sent__desc {
  color: var(--color-muted);
  font-size: 0.95rem;
  max-width: 420px;
  margin: 0 auto 1.75rem;
}
.sent__actions {
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
}

/* Aside */
.hire__aside {
  display: grid;
  gap: 1rem;
  position: sticky;
  top: calc(var(--header-height) + 1.5rem);
}
.aside-card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: 1.75rem;
}
.aside-card--quiet { background: var(--color-subtle); }
.aside-card__title { font-size: 1rem; margin-bottom: 1rem; }
.aside-card__text {
  font-size: 0.9rem;
  color: var(--color-muted);
  margin-bottom: 1rem;
}

.timeline { display: grid; gap: 1.1rem; list-style: none; }
.timeline__item { display: flex; gap: 0.85rem; align-items: flex-start; }
.timeline__dot {
  width: 26px;
  height: 26px;
  border-radius: 50%;
  background: var(--plum-50);
  border: 1px solid var(--plum-100);
  color: var(--plum-700);
  font-size: 0.78rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.timeline__item strong {
  display: block;
  font-size: 0.92rem;
  color: var(--color-dark);
  margin-bottom: 0.15rem;
}
.timeline__item span {
  font-size: 0.85rem;
  color: var(--color-muted);
  line-height: 1.55;
}

@media (max-width: 980px) {
  .hire { grid-template-columns: 1fr; }
  .hire__aside { position: static; }
}
@media (max-width: 600px) {
  .hire__form-wrap { padding: 1.5rem; }
  .form__row { grid-template-columns: 1fr; gap: 0; }
}
</style>
