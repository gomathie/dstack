import { createRouter, createWebHistory } from 'vue-router'

// Home is eager (it's the landing route); the rest are split into their own
// chunks so the initial page load doesn't pay for every view.
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/blog', name: 'Blog', component: () => import('../views/BlogView.vue') },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: () => import('../views/PrivacyPolicyView.vue') },
  { path: '/profile-login', name: 'ProfileLogin', component: () => import('../views/ProfileLoginView.vue') },
  { path: '/hire-form', name: 'HireForm', component: () => import('../views/HireFormView.vue') },
  // Unknown paths fall back to Home rather than a blank screen.
  { path: '/:pathMatch(.*)*', redirect: '/' },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
