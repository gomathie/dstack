import { createRouter, createWebHistory } from 'vue-router'

// Home is eager (it's the landing route); the rest are split into their own
// chunks so the initial page load doesn't pay for every view.
import HomeView from '../views/HomeView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView, meta: { title: 'Remote Hiring Company' } },
  {
    path: '/services',
    name: 'Services',
    component: () => import('../views/ServicesView.vue'),
    meta: { title: 'Services' },
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: () => import('../views/PricingView.vue'),
    meta: { title: 'Pricing' },
  },
  {
    path: '/case-studies',
    name: 'CaseStudies',
    component: () => import('../views/CaseStudiesView.vue'),
    meta: { title: 'Case Studies' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { title: 'About' },
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { title: 'Contact' },
  },
  {
    path: '/for-talent',
    name: 'ForTalent',
    component: () => import('../views/ForTalentView.vue'),
    meta: { title: 'For Talent' },
  },
  { path: '/blog', name: 'Blog', component: () => import('../views/BlogView.vue'), meta: { title: 'Blog' } },
  {
    path: '/blog/:slug',
    name: 'BlogPost',
    component: () => import('../views/BlogPostView.vue'),
    meta: { title: 'Blog' },
  },
  {
    path: '/hire-form',
    name: 'HireForm',
    component: () => import('../views/HireFormView.vue'),
    meta: { title: 'Hire Talent' },
  },
  {
    path: '/profile-login',
    name: 'ProfileLogin',
    component: () => import('../views/ProfileLoginView.vue'),
    meta: { title: 'Career Site' },
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: () => import('../views/PrivacyPolicyView.vue'),
    meta: { title: 'Privacy Policy' },
  },
  {
    path: '/terms',
    name: 'Terms',
    component: () => import('../views/TermsView.vue'),
    meta: { title: 'Terms of Service' },
  },
  // A real 404 rather than a silent redirect home, so bad links are visible
  // instead of pretending they worked.
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue'),
    meta: { title: 'Page Not Found' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    // In-page anchors (e.g. /for-talent#roles) scroll to the target, offset
    // for the fixed header rather than hiding beneath it.
    if (to.hash) return { el: to.hash, top: 90, behavior: 'smooth' }
    return { top: 0 }
  },
})

router.afterEach((to) => {
  const base = 'Dubblestack'
  const title = to.meta?.title
  document.title = title && title !== base ? `${title} | ${base}` : base
})

export default router
