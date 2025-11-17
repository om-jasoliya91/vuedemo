<script setup>
import { ref, watch, reactive } from 'vue'

const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)

// watcher → runs automatically when question changes
watch(question, async (newValue) => {
  if (newValue.includes('?')) {
    await getAnswer()
  }
})

async function getAnswer() {
  loading.value = true
  answer.value = 'Thinking.....'

  try {
    const res = await fetch('https://yesno.wtf/api')
    const data = await res.json()
    answer.value = data.answer
  } catch (error) {
    answer.value = 'Error! Could not reach the API. ' + error
  } finally {
    loading.value = false
  }
}

const user = reactive({
  name: '',
  profile: {
    age: 0,
    city: '',
  },
})

// deep watcher → detects ANY nested change in the object

const count = ref(0)
let hasRun = false

watch(
  user,
  (newValue) => {
    if (hasRun) return //prevent futures runs
    // console.log('Deep Watcher triggered:', newValue)
    // console.log('Deep Watcher triggered', JSON.parse(JSON.stringify(newValue)))
    // console.log('Eager Watcher triggered:', newValue)
    // console.log(JSON.parse(JSON.stringify(newValue)))
    console.log('Once watcher triggered:', JSON.parse(JSON.stringify(newValue)))
    hasRun = true // block future watcher calls
  },
  { deep: true }, //important
  // { immediate: true },
)
</script>

<template>
  <div class="container my-5" style="width: 500px">
    <h3>Watcher Demo Page</h3>
    <h2>Ask a Yes/No Question</h2>

    <div class="mb-3">
      <label class="form-label">Question</label>

      <!-- FIXED: v-model added here -->
      <input
        v-model="question"
        type="text"
        class="form-control"
        placeholder="Type your question (must include ?)"
      />

      <p v-if="loading">⏳ Loading...</p>
      <p v-else><strong>Answer:</strong> {{ answer }}</p>
    </div>

    <h2>Deep Watcher Demo</h2>

    <div class="mb-3">
      <label class="form-label">User Name</label>
      <input v-model="user.name" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">Age</label>
      <input type="number" v-model="user.profile.age" class="form-control" />
    </div>

    <div class="mb-3">
      <label class="form-label">City</label>
      <input v-model="user.profile.city" class="form-control" />
    </div>

    <p class="mt-3"><strong>User Data:</strong> {{ user }}</p>
    <h1>once watcher</h1>

    <h2>Count: {{ count }}</h2>
    <button @click="count++">Increase</button>
  </div>
</template>

<style scoped></style>
