<script setup>
import { ref } from 'vue'

// FORM INPUT FIELDS

const name = ref('') // .trim
const age = ref(null) // .number
const bio = ref('') // .lazy
const email = ref('')
const password = ref('')

const gender = ref(null) // radio
const agree = ref(false) // checkbox (yes/no)
const hobbies = ref([]) // multiple checkbox
const country = ref('') // select

const loading = ref(false)

// ERROR MESSAGES

const errors = ref({
  name: '',
  email: '',
  password: '',
  gender: '',
  country: '',
  hobbies: '',
})
// SIMPLE VALIDATION

function simpleValidate() {
  let valid = true

  // reset errors
  errors.value = { name: '', email: '', password: '', gender: '', country: '', hobbies: '' }

  if (!name.value.trim()) {
    errors.value.name = 'Name is required'
    valid = false
  }

  if (!email.value.trim()) {
    errors.value.email = 'Email is required'
    valid = false
  }

  if (!password.value.trim()) {
    errors.value.password = 'Password is required'
    valid = false
  }

  if (!gender.value) {
    errors.value.gender = 'Please select gender'
    valid = false
  }

  if (!country.value) {
    errors.value.country = 'Please choose a country'
    valid = false
  }

  if (hobbies.value.length === 0) {
    errors.value.hobbies = 'Please select at least 1 hobby'
    valid = false
  }

  return valid
}

// FORM SUBMIT

async function handleSubmit() {
  if (!simpleValidate()) return

  loading.value = true
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
        <!-- NAME -->
        <div class="mb-3">
          <label class="form-label">Name (.trim)</label>
          <input
            v-model.trim="name"
            type="text"
            class="form-control"
            :class="{ 'is-invalid': errors.name }"
          />
          <small class="text-danger">{{ errors.name }}</small>
        </div>

        <!-- EMAIL -->
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

        <!-- PASSWORD -->
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

        <!-- GENDER -->
        <div class="mb-3">
          <label class="form-label">Gender</label>
          <div>
            <label class="me-3"><input type="radio" value="male" v-model="gender" /> Male</label>
            <label><input type="radio" value="female" v-model="gender" /> Female</label>
          </div>
          <small class="text-danger">{{ errors.gender }}</small>
        </div>

        <!-- COUNTRY -->
        <div class="mb-3">
          <label class="form-label">Country</label>
          <select v-model="country" class="form-control" :class="{ 'is-invalid': errors.country }">
            <option disabled value="">Choose one</option>
            <option :value="{ code: 'IN', name: 'India' }">India</option>
            <option :value="{ code: 'USA', name: 'USA' }">USA</option>
            <option :value="{ code: 'UK', name: 'United Kingdom' }">UK</option>
          </select>
          <small class="text-danger">{{ errors.country }}</small>
        </div>

        <!-- HOBBIES -->
        <div class="mb-3">
          <label class="form-label">Hobbies:</label><br />
          <label class="me-3"
            ><input type="checkbox" value="cricket" v-model="hobbies" /> Cricket</label
          >
          <label class="me-3"
            ><input type="checkbox" value="football" v-model="hobbies" /> Football</label
          >
          <label><input type="checkbox" value="basketball" v-model="hobbies" /> Basketball</label>
          <br />
          <small class="text-danger">{{ errors.hobbies }}</small>
        </div>

        <!-- AGE -->
        <div class="mb-3">
          <label class="form-label">Age (.number)</label>
          <input type="number" v-model.number="age" class="form-control" />
        </div>

        <!-- BIO -->
        <div class="mb-3">
          <label class="form-label">Short Bio (.lazy)</label>
          <textarea class="form-control" rows="3" v-model.lazy="bio"></textarea>
        </div>

        <!-- TERMS -->
        <div class="mb-4">
          <label
            ><input type="checkbox" v-model="agree" true-value="yes" false-value="no" /> I agree to
            terms</label
          >
        </div>

        <!-- SUBMIT -->
        <button class="btn btn-primary w-100" type="submit" :disabled="loading">
          <span v-if="loading" class="spinner-border spinner-border-sm me-2"></span>
          {{ loading ? 'Submitting...' : 'Submit' }}
        </button>
      </form>

      <!-- PREVIEW -->
      <hr class="my-4" />
      <h4>Preview</h4>

      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
      <p><strong>Password:</strong> {{ password }}</p>
      <p><strong>Gender:</strong> {{ gender }}</p>
      <p><strong>Country:</strong> {{ country }}</p>
      <p><strong>Age:</strong> {{ age }}</p>
      <p><strong>Bio:</strong> {{ bio }}</p>
      <p><strong>Agreed:</strong> {{ agree }}</p>
      <p><strong>Hobbies:</strong> {{ hobbies }}</p>
    </div>
  </div>
</template>

<style scoped>
button[disabled] {
  opacity: 0.8;
  cursor: not-allowed;
}
</style>
