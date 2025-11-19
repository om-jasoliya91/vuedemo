<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios' //this is axios which is library of javascrit it is work like ajax
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
})

const error = ref({})
const backendError = ref({})

function resetError() {
  error.value = { name: '', email: '', password: '' }
  backendError.value = ''
}

async function submitForm(e) {
  e.preventDefault() //it is use because no one can perform normal submit
  resetError()

  // local simple validation

  if (!form.value.name.trim()) {
    error.value.name = 'Name is Required'
  }
  if (!form.value.email.trim()) {
    error.value.email = 'Email is Required'
  }
  if (!form.value.password.trim()) {
    error.value.password = 'Password is Required'
  } else if (form.value.password.length < 6) {
    error.value.password = 'Must be minimum 6 character'
  }
  // Stop if any validation error exists
  if (error.value.name || error.value.email || error.value.password) {
    return
  }
  try {
    //it is used to send data of email and password and backend check if match  and response.
    const response = await axios.post('http://127.0.0.1:8000/api/users', form.value)
    console.log(response.data)
    alert('Registration successfully')

    //it is clear data.
    form.value = { name: '', email: '', password: '' }
    router.push('/login')
  } catch (err) {
    if (err.response?.data?.errors) {
      backendError.value = err.response.data.errors //it is take error response from api where data already exist
    } else {
      backendError.value = 'Something Went Wrong'
    }
  }
}
</script>

<template>
  <div class="container my-5" style="width: 500px">
    <h1 class="text-primary">Registration Page</h1>

    <form @submit="submitForm">
      <span class="text-danger">{{ backendError }}</span>
      <div class="mb-3">
        <label class="form-label" for="name">Name:</label>
        <input
          v-model="form.name"
          class="form-control"
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <span class="text-danger">{{ error.name }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label" for="name">Email:</label>
        <input
          v-model="form.email"
          class="form-control"
          type="text"
          name="email"
          placeholder="Enter Your Name"
        />
        <span class="text-danger">{{ error.email }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label" for="name">Password:</label>
        <input
          v-model="form.password"
          class="form-control"
          type="text"
          name="password"
          placeholder="Enter Your Name"
        />
        <span class="text-danger">{{ error.password }}</span>
      </div>
      <div mb-3>
        <input class="btn btn-outline-primary form-control" type="submit" value="submit" />
      </div>
      <div class="text-decoration-none text-center mt-3">
        <RouterLink to="/login">If you have account?Login Here</RouterLink>
      </div>
    </form>
  </div>
</template>

<style scoped></style>
