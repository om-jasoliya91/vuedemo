<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const form = ref({
  name: '',
  email: '',
  password: '',
})

const error = ref({
  name: '',
  email: '',
  password: '',
})

function simpleValidate() {
  //reset errors

  error.value = { name: '', email: '', password: '' }

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

  return !error.value.name && !error.value.email && !error.value.password
}

function submitForm(e) {
  e.preventDefault() //it is stop the normal form submission

  if (simpleValidate()) {
    localStorage.setItem('user', JSON.stringify(form.value))
    alert('Registration successfully.')

    //clear form
    form.value = { name: '', email: '', password: '' }
    router.push('/login')
  }
}
</script>

<template>
  <div class="container my-5" style="width: 500px">
    <h1 class="text-primary">Registration Page</h1>

    <form @submit="submitForm">
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
