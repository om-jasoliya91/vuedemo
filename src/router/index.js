import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' // correct import
import AboutView from '@/views/AboutView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView }, // correct path
  { path: '/about', name: 'About', component: AboutView }, // <-- new page
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
