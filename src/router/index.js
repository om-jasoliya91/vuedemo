import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue' // correct import

const routes = [
  { path: '/', name: 'Home', component: HomeView }, // correct path
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
