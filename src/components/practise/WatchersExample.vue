<script setup>
import { ref, watch } from 'vue'

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
  </div>
</template>

<style scoped></style>
