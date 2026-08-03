<template>
  <div>
    <section class="page-hero">
      <div class="container page-hero__inner">
        <span class="page-hero__eyebrow">Contact</span>
        <h1 class="page-hero__title">Talk to a person, not a form queue</h1>
        <p class="page-hero__sub">
          Tell us what you are trying to solve. If we are not the right fit we will say so and
          point you somewhere better.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container contact">
        <!-- Channels -->
        <aside class="contact__aside">
          <div class="channel">
            <h2 class="channel__title">Hiring a professional</h2>
            <p class="channel__desc">For companies looking to fill a role.</p>
            <a :href="`mailto:${company.email}`" class="channel__link">{{ company.email }}</a>
            <a :href="`tel:${company.phone.replace(/[^+\d]/g, '')}`" class="channel__link">{{ company.phone }}</a>
          </div>

          <div class="channel">
            <h2 class="channel__title">Looking for work</h2>
            <p class="channel__desc">For professionals who want to be placed.</p>
            <a :href="`mailto:${company.talentEmail}`" class="channel__link">{{ company.talentEmail }}</a>
            <router-link to="/for-talent" class="channel__link channel__link--route">
              Read the talent guide →
            </router-link>
          </div>

          <div class="channel">
            <h2 class="channel__title">Response times</h2>
            <ul class="channel__list">
              <li><strong>Email</strong> — within one business day</li>
              <li><strong>Quote requests</strong> — same or next business day</li>
              <li><strong>Phone</strong> — 9am–6pm ET, Monday to Friday</li>
            </ul>
          </div>

          <div class="channel">
            <h2 class="channel__title">Recruiting hubs</h2>
            <p class="channel__desc">{{ company.hubs.join(' · ') }}</p>
          </div>
        </aside>

        <!-- Form -->
        <div class="contact__form-wrap card">
          <div v-if="sent" class="sent" role="status">
            <div class="sent__icon" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                   stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2 class="sent__title">Message received</h2>
            <p class="sent__desc">
              Thanks {{ form.name.split(' ')[0] || 'for reaching out' }} — we'll reply to
              <strong>{{ form.email }}</strong> within one business day.
            </p>
            <button class="btn btn--outline" @click="reset">Send another message</button>
          </div>

          <form v-else class="form" novalidate @submit.prevent="submit">
            <h2 class="form__title">Send us a message</h2>

            <div class="form__row">
              <div class="form__group">
                <label for="c-name" class="form__label">Your name *</label>
                <input
                  id="c-name" v-model.trim="form.name" type="text" class="form__input"
                  :class="{ 'form__input--error': errors.name }"
                  :aria-invalid="!!errors.name" :aria-describedby="errors.name ? 'err-name' : undefined"
                  placeholder="Full name"
                />
                <p v-if="errors.name" id="err-name" class="form__error">{{ errors.name }}</p>
              </div>
              <div class="form__group">
                <label for="c-email" class="form__label">Email *</label>
                <input
                  id="c-email" v-model.trim="form.email" type="email" class="form__input"
                  :class="{ 'form__input--error': errors.email }"
                  :aria-invalid="!!errors.email" :aria-describedby="errors.email ? 'err-email' : undefined"
                  placeholder="you@company.com"
                />
                <p v-if="errors.email" id="err-email" class="form__error">{{ errors.email }}</p>
              </div>
            </div>

            <div class="form__row">
              <div class="form__group">
                <label for="c-company" class="form__label">Company</label>
                <input id="c-company" v-model.trim="form.company" type="text" class="form__input" placeholder="Optional" />
              </div>
              <div class="form__group">
                <label for="c-topic" class="form__label">What is this about?</label>
                <select id="c-topic" v-model="form.topic" class="form__input">
                  <option value="hiring">Hiring a professional</option>
                  <option value="pricing">Pricing question</option>
                  <option value="talent">Joining as talent</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Something else</option>
                </select>
              </div>
            </div>

            <div class="form__group">
              <label for="c-message" class="form__label">Message *</label>
              <textarea
                id="c-message" v-model.trim="form.message" rows="6" class="form__input form__textarea"
                :class="{ 'form__input--error': errors.message }"
                :aria-invalid="!!errors.message" :aria-describedby="errors.message ? 'err-message' : undefined"
                placeholder="What role are you trying to fill, or what would you like to know?"
              ></textarea>
              <p v-if="errors.message" id="err-message" class="form__error">{{ errors.message }}</p>
            </div>

            <button type="submit" class="btn btn--primary btn--block btn--lg">Send message</button>
            <p class="form__note">
              We use this only to reply to you. See our
              <router-link to="/privacy-policy">privacy policy</router-link>.
            </p>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { company } from '../data/site'

const form = reactive({
  name: '',
  email: '',
  company: '',
  topic: 'hiring',
  message: '',
})

const errors = reactive({ name: '', email: '', message: '' })
const sent = ref(false)

function submit() {
  errors.name = form.name ? '' : 'Please tell us your name.'
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email)
    ? ''
    : 'Enter a valid email address so we can reply.'
  errors.message = form.message.length >= 10
    ? ''
    : 'A sentence or two about what you need would help.'

  if (errors.name || errors.email || errors.message) return

  // NOTE: static site — there is no backend wired up yet. Point this at a form
  // endpoint (Cloudflare Pages Function, Formspree, etc.) before launch.
  sent.value = true
}

function reset() {
  Object.assign(form, { name: '', email: '', company: '', topic: 'hiring', message: '' })
  Object.assign(errors, { name: '', email: '', message: '' })
  sent.value = false
}
</script>

<style scoped>
.contact {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 3rem;
  align-items: start;
}

.channel {
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  border-bottom: 1px solid var(--color-border);
}
.channel:last-child { border-bottom: none; margin-bottom: 0; padding-bottom: 0; }
.channel__title {
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--color-light);
  margin-bottom: 0.6rem;
}
.channel__desc {
  font-size: 0.92rem;
  color: var(--color-muted);
  margin-bottom: 0.6rem;
}
.channel__link {
  display: block;
  font-size: 0.98rem;
  font-weight: 650;
  color: var(--plum-700);
  margin-bottom: 0.3rem;
  transition: color var(--transition-fast);
}
.channel__link:hover { color: var(--plum-500); }
.channel__list {
  display: grid;
  gap: 0.45rem;
  font-size: 0.92rem;
  color: var(--color-muted);
}
.channel__list strong { color: var(--color-dark); font-weight: 650; }

.contact__form-wrap { padding: 2.5rem; }
.form__title { font-size: 1.3rem; margin-bottom: 1.75rem; }
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
.form__input--error:focus { box-shadow: 0 0 0 4px rgba(197, 48, 48, 0.1); }
.form__textarea { resize: vertical; min-height: 130px; }
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

/* Success state */
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
  max-width: 400px;
  margin: 0 auto 1.75rem;
}

@media (max-width: 900px) {
  .contact { grid-template-columns: 1fr; gap: 2.5rem; }
}
@media (max-width: 600px) {
  .contact__form-wrap { padding: 1.5rem; }
  .form__row { grid-template-columns: 1fr; gap: 0; }
}
</style>
