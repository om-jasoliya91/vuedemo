<script setup>
import axios from 'axios'
import { useRouter } from 'vue-router'
const router = useRouter()

async function logout() {
  try {
    const response = await axios.post('http://127.0.0.1:8000/api/logout')
    console.log(response)
    alert('Logged Out!')
    router.push('/login')
  } catch (err) {
    console.log('LOGOUT ERROR:', err.response?.data)
  }
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark px-4 py-3 shadow">
    <ul class="d-flex gap-4 list-unstyled m-0">
      <li>
        <router-link to="/dashboard" class="text-white text-decoration-none hover:text-primary">
          Home
        </router-link>
      </li>

      <li>
        <router-link to="/about" class="text-white text-decoration-none hover:text-primary">
          About
        </router-link>
      </li>

      <li>
        <router-link to="/contact" class="text-white text-decoration-none hover:text-primary">
          Contact
        </router-link>
      </li>
      <li>
        <button @click="logout">Logout</button>
      </li>
    </ul>
  </nav>
</template>

<style scoped></style>
