<template>
  <div class="hire-page">
    <section class="hire-hero">
      <div class="container">
        <h1 class="hire-hero__title animate-fade-in-up">Recruit Top Talent</h1>
        <p class="hire-hero__sub animate-fade-in-up delay-2">Tell us about the role you need to fill and we'll find the perfect match.</p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="hire-form-card card animate-fade-in-up delay-3">
          <form class="hire-form" @submit.prevent="handleSubmit">
            <div class="hire-form__row">
              <div class="hire-form__group">
                <label for="company" class="hire-form__label">Company Name *</label>
                <input type="text" id="company" v-model="form.company" required class="hire-form__input" placeholder="Your company name" />
              </div>
              <div class="hire-form__group">
                <label for="name" class="hire-form__label">Your Name *</label>
                <input type="text" id="name" v-model="form.name" required class="hire-form__input" placeholder="Full name" />
              </div>
            </div>

            <div class="hire-form__row">
              <div class="hire-form__group">
                <label for="email" class="hire-form__label">Email Address *</label>
                <input type="email" id="email" v-model="form.email" required class="hire-form__input" placeholder="you@company.com" />
              </div>
              <div class="hire-form__group">
                <label for="phone" class="hire-form__label">Phone Number</label>
                <input type="tel" id="phone" v-model="form.phone" class="hire-form__input" placeholder="+1 (555) 000-0000" />
              </div>
            </div>

            <div class="hire-form__group">
              <label for="role" class="hire-form__label">Role You Need *</label>
              <input type="text" id="role" v-model="form.role" required class="hire-form__input" placeholder="e.g. Software Engineer, Virtual Assistant, Accountant" />
            </div>

            <div class="hire-form__group">
              <label for="details" class="hire-form__label">Additional Details</label>
              <textarea id="details" v-model="form.details" rows="5" class="hire-form__input hire-form__textarea" placeholder="Describe the role requirements, time zone preferences, experience level needed, etc."></textarea>
            </div>

            <div class="hire-form__row">
              <div class="hire-form__group">
                <label for="timezone" class="hire-form__label">Preferred Time Zone</label>
                <select id="timezone" v-model="form.timezone" class="hire-form__input">
                  <option value="">Select time zone</option>
                  <option value="EST">Eastern (EST)</option>
                  <option value="CST">Central (CST)</option>
                  <option value="MST">Mountain (MST)</option>
                  <option value="PST">Pacific (PST)</option>
                  <option value="GMT">GMT</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div class="hire-form__group">
                <label for="type" class="hire-form__label">Employment Type</label>
                <select id="type" v-model="form.type" class="hire-form__input">
                  <option value="">Select type</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="contract">Contract</option>
                </select>
              </div>
            </div>

            <button type="submit" class="btn btn--primary hire-form__submit">
              Submit Request
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  role: '',
  details: '',
  timezone: '',
  type: '',
})

function handleSubmit() {
  alert('Thank you! This is a static clone. Your request has been noted.')
}
</script>

<style scoped>
.hire-hero {
  background: linear-gradient(135deg, #66023c 0%, #2d0f3e 100%);
  padding: 8rem 0 4rem;
  text-align: center;
}
.hire-hero__title {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 0.75rem;
}
.hire-hero__sub {
  color: rgba(255,255,255,0.7);
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.hire-form-card {
  max-width: 700px;
  margin: 0 auto;
  padding: 3rem;
}
.hire-form__row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.hire-form__group {
  margin-bottom: 1.25rem;
}
.hire-form__label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: 0.4rem;
}
.hire-form__input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: var(--color-bg);
}
.hire-form__input:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(102, 2, 60, 0.1);
}
.hire-form__textarea {
  resize: vertical;
  min-height: 120px;
}
select.hire-form__input {
  cursor: pointer;
  appearance: auto;
}
.hire-form__submit {
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
  margin-top: 0.5rem;
}

@media (max-width: 600px) {
  .hire-form__row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  .hire-form-card {
    padding: 1.5rem;
  }
}
</style>
