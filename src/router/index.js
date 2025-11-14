import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/viewfile/HomeView.vue'
import AboutView from '@/components/viewfile/AboutView.vue'
import WelcomeBack from '@/components/WelcomeBack.vue'
import ComputedView from '@/components/viewfile/ComputedView.vue'
import BindView from '@/components/viewfile/BindView.vue'
import ConditionView from '@/components/viewfile/ConditionView.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomeBack },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/computed', name: 'Computed', component: ComputedView },
  { path: '/bind', name: 'Bind', component: BindView },
  { path: '/condition', name: 'Condition', component: ConditionView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
