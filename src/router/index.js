import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/viewfile/HomeView.vue'
import AboutView from '@/components/viewfile/AboutView.vue'
import WelcomeBack from '@/components/WelcomeBack.vue'
import ComputedView from '@/components/viewfile/ComputedView.vue'
import BindView from '@/components/viewfile/BindView.vue'
import ConditionView from '@/components/viewfile/ConditionView.vue'
import VforView from '@/components/viewfile/VforView.vue'
import EventhandleView from '@/components/viewfile/EventhandleView.vue'
import RegisterView from '@/components/viewfile/RegisterView.vue'
import WatchersView from '@/components/viewfile/WatchersView.vue'
import RefView from '@/components/viewfile/refView.vue'
import TabsView from '@/components/viewfile/TabsView.vue'
import VmodelView from '@/components/viewfile/VmodelView.vue'

const routes = [
  { path: '/', name: 'Welcome', component: WelcomeBack },
  { path: '/home', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/computed', name: 'Computed', component: ComputedView },
  { path: '/bind', name: 'Bind', component: BindView },
  { path: '/condition', name: 'Condition', component: ConditionView },
  { path: '/for', name: 'Vfor', component: VforView },
  { path: '/event', name: 'Event', component: EventhandleView },
  { path: '/register', name: 'Register', component: RegisterView },
  { path: '/watcher', name: 'Watcher', component: WatchersView },
  { path: '/ref', name: 'ref', component: RefView },
  { path: '/tabs', name: 'tabs', component: TabsView },
  { path: '/vmodel', name: 'vmodel', component: VmodelView },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
