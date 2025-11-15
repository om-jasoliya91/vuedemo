<script setup>
import { ref } from 'vue'
// FORM INPUT FIELDS

// text fields
const name = ref('')
const email = ref('')
const password = ref('')

// radio button (MUST start as null → means "not selected")
const gender = ref(null)

// checkbox (false = unchecked)
const agree = ref(false)

// select dropdown (empty = not selected)
const country = ref('')

// loader state
const loading = ref(false)

// SIMPLE VALIDATION

// store error messages
const errors = ref({
  name: '',
  email: '',
  password: '',
  gender: '',
  country: '',
})

// simple validation function
function simpleValidate() {
  let valid = true

  // reset previous errors
  errors.value = { name: '', email: '', password: '', gender: '', country: '' }

  // name validation
  if (!name.value) {
    errors.value.name = 'Name is required'
    valid = false
  }

  // email validation
  if (!email.value) {
    errors.value.email = 'Email is required'
    valid = false
  }

  // password validation
  if (!password.value) {
    errors.value.password = 'Password is required'
    valid = false
  }

  // radio validation (must select male/female)
  if (!gender.value) {
    errors.value.gender = 'Please select gender'
    valid = false
  }

  // select validation (must pick a country)
  if (!country.value) {
    errors.value.country = 'Please choose a country'
    valid = false
  }

  return valid
}

// FORM SUBMIT HANDLER

async function handleSubmit() {
  // stop submit if validation fails
  if (!simpleValidate()) return

  loading.value = true

  // fake API delay
  await new Promise((resolve) => setTimeout(resolve, 1500))

  alert('Form submitted successfully!')

  loading.value = false
}
</script>

<template>
  <div class="container my-5">
    <div class="card shadow p-4" style="max-width: 450px; margin: auto">
      <h2 class="text-center mb-4">Register Form</h2>

      <form @submit.prevent="handleSubmit">
        <!-- NAME FIELD -->
        <div class="mb-3">
          <label class="form-label">Name</label>

          <!-- v-model binds text -->
          <!-- :class adds 'is-invalid' if error exists -->
          <input
            v-model="name"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
          />

          <small class="text-danger">{{ errors.name }}</small>
        </div>

        <!-- EMAIL FIELD -->
        <div class="mb-3">
          <label class="form-label">Email</label>

          <input
            v-model="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid': errors.email }"
          />

          <small class="text-danger">{{ errors.email }}</small>
        </div>

        <!-- PASSWORD FIELD -->
        <div class="mb-3">
          <label class="form-label">Password</label>

          <input
            v-model="password"
            type="password"
            class="form-control"
            :class="{ 'is-invalid': errors.password }"
          />

          <small class="text-danger">{{ errors.password }}</small>
        </div>

        <!-- RADIO BUTTON: GENDER -->
        <div class="mb-3">
          <label class="form-label">Gender</label>

          <!-- v-model="gender" binds the selected value -->
          <div>
            <label class="me-3"> <input type="radio" value="male" v-model="gender" /> Male </label>

            <label> <input type="radio" value="female" v-model="gender" /> Female </label>
          </div>

          <small class="text-danger">{{ errors.gender }}</small>
        </div>

        <!-- SELECT FIELD: COUNTRY -->
        <div class="mb-3">
          <label class="form-label">Country</label>

          <select v-model="country" class="form-control" :class="{ 'is-invalid': errors.country }">
            <!-- Disabled: prevents auto-selection -->
            <option disabled value="">Choose one</option>
            <option :value="{ code: 'IN', name: 'india' }">India</option>
            <option :value="{ code: 'USA', name: 'usa' }">USA</option>
            <option :value="{ code: 'UK', name: 'united kingdom' }">UK</option>
          </select>

          <small class="text-danger">{{ errors.country }}</small>
        </div>

        <!-- CHECKBOX: AGREE TERMS -->
        <div class="mb-4">
          <!-- v-model returns true/false -->
          <label>
            <input type="checkbox" v-model="agree" true-value="yes" false-value="no" /> I agree to
            terms
          </label>
        </div>

        <!-- SUBMIT BUTTON -->
        <button class="btn btn-primary w-100" type="submit" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          {{ loading ? 'Submitting...' : 'Submit' }}
        </button>
      </form>

      <!-- PREVIEW SECTION -->
      <hr class="my-4" />

      <h4>Preview</h4>
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Password:</strong> {{ password }}</p>
      <p><strong>Gender:</strong> {{ gender }}</p>
      <p><strong>Country:</strong> {{ country }}</p>
      <p><strong>Agreed:</strong> {{ agree }}</p>
    </div>
  </div>
</template>

<style scoped>
button[disabled] {
  opacity: 0.8;
  cursor: not-allowed;
}
</style>
