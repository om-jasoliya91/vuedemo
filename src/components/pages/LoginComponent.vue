<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const login = ref({
  email: '',
  password: '',
})
const error = ref('')
function loginUser() {
  const savedUser = JSON.parse(localStorage.getItem('user'))
  if (!savedUser) {
    error.value = 'No registration found.please try again'
    return
  }

  if (login.value.email === savedUser.email && login.value.password === savedUser.password) {
    alert('successfully Login')
    router.push('/dashboard')
  } else {
    error.value = 'Invalid email and password'
  }
}
</script>

<template>
  <div class="container my-5" style="width: 400px">
    <span class="text-danger">{{ error }}</span>
    <h1 class="text-primary">LoginView</h1>
    <form @submit.prevent="loginUser">
      <div class="mb-3">
        <label class="form-label" for="email">Email:</label>
        <input
          v-model="login.email"
          class="form-control"
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
      </div>
      <div class="mb-3">
        <label class="form-label" for="password">Password:</label>
        <input
          v-model="login.password"
          class="form-control"
          type="password"
          name="password"
          placeholder="Enter Your Email"
        />
      </div>
      <div class="mb-3">
        <input class="form-control btn btn-primary" type="submit" value="submit" />
      </div>
      <div class="text-primary text-center mt-3">
        <RouterLink to="/register">Do you wnat to create Account?Register Here</RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
