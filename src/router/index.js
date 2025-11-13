import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/viewfile/HomeView.vue'
import AboutView from '@/components/viewfile/AboutView.vue'
import WelcomeBack from '@/components/WelcomeBack.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomeBack },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
