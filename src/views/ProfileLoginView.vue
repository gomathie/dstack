<template>
  <div class="login-page">
    <section class="login-hero">
      <div class="container login-hero__inner">
        <div class="login-card card animate-fade-in-up">
          <div class="login-card__header">
            <img src="/images/dbs.removebg-preview.png" alt="Dubblestack" class="login-card__logo" />
            <h1 class="login-card__title">Career Portal</h1>
            <p class="login-card__sub">Sign in to access your profile</p>
          </div>

          <form class="login-form" @submit.prevent="handleLogin">
            <div class="login-form__group">
              <label for="user_login" class="login-form__label">Email or Username</label>
              <input type="text" id="user_login" v-model="email" placeholder="Enter your email or username" required class="login-form__input" />
            </div>

            <div class="login-form__group">
              <label for="user_pass" class="login-form__label">Password</label>
              <div class="login-form__password-wrap">
                <input :type="showPassword ? 'text' : 'password'" id="user_pass" v-model="password" placeholder="Enter your password" required class="login-form__input" />
                <button type="button" class="login-form__toggle-pass" @click="showPassword = !showPassword" aria-label="Toggle password visibility">
                  <svg v-if="!showPassword" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                  <svg v-else width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.94 17.94A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.5 18.5 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/></svg>
                </button>
              </div>
            </div>

            <div class="login-form__options">
              <label class="login-form__remember">
                <input type="checkbox" v-model="rememberMe" />
                <span>Remember Me</span>
              </label>
              <a href="#" class="login-form__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="btn btn--primary login-form__submit">Login</button>

            <div class="login-form__register">
              <span>Don't have an account?</span>
              <a href="#" class="login-form__register-link">Register</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const showPassword = ref(false)
const rememberMe = ref(false)

function handleLogin() {
  alert('This is a static clone. Login functionality is not connected.')
}
</script>

<style scoped>
.login-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: linear-gradient(135deg, #66023c 0%, #2d0f3e 50%, #1a0a2e 100%);
  padding: 6rem 0 3rem;
}
.login-hero__inner {
  display: flex;
  justify-content: center;
}
.login-card {
  width: 100%;
  max-width: 440px;
  padding: 3rem;
}
.login-card__header {
  text-align: center;
  margin-bottom: 2rem;
}
.login-card__logo {
  width: 60px;
  margin: 0 auto 1rem;
}
.login-card__title {
  font-size: 1.6rem;
  margin-bottom: 0.25rem;
}
.login-card__sub {
  color: var(--color-light);
  font-size: 0.9rem;
  margin: 0;
}

.login-form__group {
  margin-bottom: 1.25rem;
}
.login-form__label {
  display: block;
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-dark);
  margin-bottom: 0.4rem;
}
.login-form__input {
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  font-size: 0.95rem;
  font-family: inherit;
  transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
  background: var(--color-bg);
}
.login-form__input:focus {
  outline: none;
  border-color: var(--brand-primary);
  box-shadow: 0 0 0 3px rgba(102, 2, 60, 0.1);
}
.login-form__password-wrap {
  position: relative;
}
.login-form__password-wrap .login-form__input {
  padding-right: 3rem;
}
.login-form__toggle-pass {
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--color-light);
  padding: 0.25rem;
}
.login-form__toggle-pass:hover {
  color: var(--brand-primary);
}
.login-form__options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
  font-size: 0.85rem;
}
.login-form__remember {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  color: var(--color-muted);
}
.login-form__remember input {
  accent-color: var(--brand-primary);
}
.login-form__forgot {
  color: var(--brand-primary);
  font-weight: 600;
}
.login-form__forgot:hover {
  text-decoration: underline;
}
.login-form__submit {
  width: 100%;
  padding: 0.9rem;
  font-size: 1rem;
}
.login-form__register {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: var(--color-light);
}
.login-form__register-link {
  color: var(--brand-primary);
  font-weight: 600;
  margin-left: 0.25rem;
}
.login-form__register-link:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-card {
    padding: 2rem 1.5rem;
  }
}
</style>
