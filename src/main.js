import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import GlobalComponent from './components/practise/GlobalComponent.vue'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import axios from 'axios'

const token = localStorage.getItem('token')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
}
const app = createApp(App)

// Make axios available in all components (critical)
app.config.globalProperties.$axios = axios

app.use(createPinia())
app.use(router)

//blobal register component
app.component('GlobalComponent', GlobalComponent)

app.mount('#app')
