<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
function logout() {
  localStorage.clear()
  alert('Logout successfully')
  router.push('/login')
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
        <a href="#" @click="logout" class="text-primary text-decoration-none hover:text-danger"
          >Logout</a
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Hover color (Bootstrap does not provide text-primary:hover by default) */
.hover\:text-primary:hover {
  color: #0d6efd; /* Bootstrap primary blue */
}
</style>
