import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import PrivacyPolicyView from '../views/PrivacyPolicyView.vue'
import ProfileLoginView from '../views/ProfileLoginView.vue'
import HireFormView from '../views/HireFormView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/blog', name: 'Blog', component: BlogView },
  { path: '/privacy-policy', name: 'PrivacyPolicy', component: PrivacyPolicyView },
  { path: '/profile-login', name: 'ProfileLogin', component: ProfileLoginView },
  { path: '/hire-form', name: 'HireForm', component: HireFormView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' }
  }
})

export default router
