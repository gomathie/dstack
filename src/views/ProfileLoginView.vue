<template>
  <div class="auth">
    <!-- Brand panel -->
    <aside class="auth__panel">
      <div class="auth__panel-inner">
        <router-link to="/" class="auth__brand">
          <img src="/images/dbs.removebg-preview.png" alt="" class="auth__logo" />
          <span>{{ company.name }}</span>
        </router-link>

        <h1 class="auth__headline">Your career portal</h1>
        <p class="auth__blurb">
          Track your applications, update your profile, and see the roles our recruiters have
          matched you with.
        </p>

        <ul class="auth__points">
          <li v-for="point in points" :key="point">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                 stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" />
            </svg>
            {{ point }}
          </li>
        </ul>

        <p class="auth__footnote">
          New here? <router-link to="/for-talent">Read how placement works</router-link> before
          you create a profile.
        </p>
      </div>
    </aside>

    <!-- Form panel -->
    <main class="auth__main">
      <div class="auth__card">
        <div class="auth__tabs" role="tablist" aria-label="Sign in or register">
          <button
            role="tab" :aria-selected="mode === 'login'" class="auth__tab"
            :class="{ 'auth__tab--active': mode === 'login' }" @click="setMode('login')"
          >
            Sign in
          </button>
          <button
            role="tab" :aria-selected="mode === 'register'" class="auth__tab"
            :class="{ 'auth__tab--active': mode === 'register' }" @click="setMode('register')"
          >
            Create profile
          </button>
        </div>

        <p class="demo-note">
          Demo portal — authentication is not connected. Nothing you type here is submitted anywhere.
        </p>

        <form class="auth__form" novalidate @submit.prevent="submit">
          <div v-if="mode === 'register'" class="field">
            <label for="a-name" class="field__label">Full name</label>
            <input
              id="a-name" v-model.trim="form.name" type="text" class="field__input"
              :class="{ 'field__input--error': errors.name }" placeholder="As it appears on your CV"
            />
            <p v-if="errors.name" class="field__error">{{ errors.name }}</p>
          </div>

          <div class="field">
            <label for="a-email" class="field__label">Email</label>
            <input
              id="a-email" v-model.trim="form.email" type="email" class="field__input"
              :class="{ 'field__input--error': errors.email }"
              autocomplete="username" placeholder="you@example.com"
            />
            <p v-if="errors.email" class="field__error">{{ errors.email }}</p>
          </div>

          <div class="field">
            <label for="a-pass" class="field__label">Password</label>
            <div class="field__wrap">
              <input
                id="a-pass" v-model="form.password" :type="showPassword ? 'text' : 'password'"
                class="field__input" :class="{ 'field__input--error': errors.password }"
                :autocomplete="mode === 'login' ? 'current-password' : 'new-password'"
                :placeholder="mode === 'register' ? 'At least 8 characters' : 'Your password'"
              />
              <button
                type="button" class="field__toggle" @click="showPassword = !showPassword"
                :aria-label="showPassword ? 'Hide password' : 'Show password'"
              >
                <svg v-if="!showPassword" width="19" height="19" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
                <svg v-else width="19" height="19" viewBox="0 0 24 24" fill="none"
                     stroke="currentColor" stroke-width="2" aria-hidden="true">
                  <path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              </button>
            </div>
            <p v-if="errors.password" class="field__error">{{ errors.password }}</p>
          </div>

          <div v-if="mode === 'login'" class="auth__options">
            <label class="checkbox">
              <input type="checkbox" v-model="form.remember" />
              <span>Remember me</span>
            </label>
            <button type="button" class="auth__forgot" @click="notice = 'Password reset is not wired up in this demo.'">
              Forgot password?
            </button>
          </div>

          <button type="submit" class="btn btn--primary btn--block btn--lg">
            {{ mode === 'login' ? 'Sign in' : 'Create profile' }}
          </button>

          <p v-if="notice" class="auth__notice" role="status">{{ notice }}</p>
        </form>

        <p class="auth__switch">
          <template v-if="mode === 'login'">
            No account yet?
            <button type="button" @click="setMode('register')">Create one</button>
          </template>
          <template v-else>
            Already registered?
            <button type="button" @click="setMode('login')">Sign in</button>
          </template>
        </p>
      </div>
    </main>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { company } from '../data/site'

const mode = ref('login')
const showPassword = ref(false)
const notice = ref('')

const form = reactive({ name: '', email: '', password: '', remember: false })
const errors = reactive({ name: '', email: '', password: '' })

const points = [
  'One profile, seen by every client we search for',
  'Status visible at every stage — no silent rejections',
  'Free forever; candidates never pay us anything',
]

function setMode(next) {
  mode.value = next
  notice.value = ''
  Object.assign(errors, { name: '', email: '', password: '' })
}

function submit() {
  errors.name = mode.value === 'register' && !form.name ? 'Please enter your name.' : ''
  errors.email = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email) ? '' : 'Enter a valid email address.'
  errors.password = form.password.length >= 8 ? '' : 'Passwords are at least 8 characters.'

  if (errors.name || errors.email || errors.password) return

  notice.value =
    mode.value === 'login'
      ? 'Demo only — there is no account system connected yet.'
      : 'Demo only — profile creation is not connected yet. Email talent@dubblestack.com in the meantime.'
}
</script>

<style scoped>
.auth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
}

/* Brand side */
.auth__panel {
  background: linear-gradient(160deg, var(--plum-700) 0%, var(--plum-900) 100%);
  padding: calc(var(--header-height) + 3rem) 3rem 3rem;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}
.auth__panel::after {
  content: '';
  position: absolute;
  top: -25%;
  right: -25%;
  width: 700px;
  height: 700px;
  background: radial-gradient(circle, rgba(188, 144, 169, 0.22) 0%, transparent 62%);
  pointer-events: none;
}
.auth__panel-inner { position: relative; z-index: 1; max-width: 420px; margin-left: auto; }
.auth__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 2.5rem;
  font-family: var(--font-heading);
  font-weight: 800;
  color: #fff;
  font-size: 1.1rem;
}
.auth__logo { width: 38px; }
.auth__headline {
  color: #fff;
  font-size: clamp(1.8rem, 3.4vw, 2.4rem);
  margin-bottom: 0.85rem;
}
.auth__blurb {
  color: rgba(255, 255, 255, 0.72);
  font-size: 1rem;
  margin-bottom: 2rem;
}
.auth__points { display: grid; gap: 0.85rem; margin-bottom: 2.5rem; }
.auth__points li {
  display: flex;
  gap: 0.65rem;
  align-items: flex-start;
  color: rgba(255, 255, 255, 0.86);
  font-size: 0.93rem;
  line-height: 1.5;
}
.auth__points svg { color: var(--accent-500); flex-shrink: 0; margin-top: 0.15rem; }
.auth__footnote { font-size: 0.87rem; color: rgba(255, 255, 255, 0.55); margin: 0; }
.auth__footnote a { color: #fff; text-decoration: underline; text-underline-offset: 3px; }

/* Form side */
.auth__main {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: calc(var(--header-height) + 2.5rem) 1.5rem 3rem;
  background: var(--color-bg);
}
.auth__card { width: 100%; max-width: 420px; }

.auth__tabs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.25rem;
  padding: 0.25rem;
  background: var(--color-subtle);
  border-radius: var(--radius-pill);
  margin-bottom: 1.5rem;
}
.auth__tab {
  padding: 0.6rem;
  border: none;
  background: transparent;
  border-radius: var(--radius-pill);
  font-weight: 650;
  font-size: 0.9rem;
  color: var(--color-muted);
  transition: all var(--transition-fast);
}
.auth__tab--active {
  background: var(--color-surface);
  color: var(--plum-700);
  box-shadow: var(--shadow-sm);
}

.demo-note {
  font-size: 0.82rem;
  color: var(--color-light);
  background: var(--color-subtle);
  border-radius: var(--radius-sm);
  padding: 0.7rem 0.9rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
}

.field { margin-bottom: 1.15rem; }
.field__label {
  display: block;
  font-size: 0.85rem;
  font-weight: 650;
  color: var(--color-dark);
  margin-bottom: 0.4rem;
}
.field__wrap { position: relative; }
.field__input {
  width: 100%;
  padding: 0.85rem 1rem;
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  background: var(--color-surface);
  color: var(--color-body);
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
}
.field__wrap .field__input { padding-right: 3rem; }
.field__input:focus {
  outline: none;
  border-color: var(--plum-500);
  box-shadow: 0 0 0 4px rgba(142, 18, 89, 0.09);
}
.field__input--error { border-color: #C53030; }
.field__toggle {
  position: absolute;
  right: 0.6rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-light);
  padding: 0.35rem;
  display: flex;
}
.field__toggle:hover { color: var(--plum-700); }
.field__error {
  margin: 0.4rem 0 0;
  font-size: 0.82rem;
  color: #C53030;
  font-weight: 600;
}

.auth__options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.35rem;
  font-size: 0.87rem;
}
.checkbox {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  cursor: pointer;
  color: var(--color-muted);
}
.checkbox input { accent-color: var(--plum-700); width: 16px; height: 16px; }
.auth__forgot {
  background: none;
  border: none;
  color: var(--plum-700);
  font-weight: 650;
  font-size: 0.87rem;
}
.auth__forgot:hover { text-decoration: underline; }

.auth__notice {
  margin: 1rem 0 0;
  padding: 0.75rem 0.9rem;
  background: var(--accent-100);
  color: var(--accent-600);
  border-radius: var(--radius-sm);
  font-size: 0.87rem;
  text-align: center;
}

.auth__switch {
  margin: 1.5rem 0 0;
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-muted);
}
.auth__switch button {
  background: none;
  border: none;
  color: var(--plum-700);
  font-weight: 650;
  font-size: 0.9rem;
}
.auth__switch button:hover { text-decoration: underline; }

@media (max-width: 900px) {
  .auth { grid-template-columns: 1fr; min-height: 0; }
  .auth__panel {
    padding: calc(var(--header-height) + 2.5rem) var(--edge-padding) 2.5rem;
  }
  .auth__panel-inner { margin: 0 auto; }
  .auth__points { margin-bottom: 1.5rem; }
  .auth__main { padding: 2.5rem var(--edge-padding) 3.5rem; }
}
</style>
