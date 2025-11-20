import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref(null)
  const token = ref(null)

  function loginSuccess(u, t) {
    user.value = u
    token.value = t

    //optional svae in local storage
    localStorage.setItem('token', t)

    axios.defaults.headers.common['Authorization'] = `Bearer ${t}`
  }

  function logout(u, t) {
    user.value = u
    token.value = t

    localStorage.removeItem('tokan')

    //In delete code we cannot use Bearer token
    delete axios.defaults.headers.common['Authorization']
  }
  return { user, token, loginSuccess, logout }
})
