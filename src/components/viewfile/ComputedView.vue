<script setup>
import { computed, reactive } from 'vue';

const author = reactive({
  name: 'om',
  books: [
    'vue 2- Advanced Guide',
    'vue 3- Baic Guide',
    'vue 4- The Mystery'
  ]
})
// console.log(author.books.length > 0 ? 'yes' : 'No')

const publishBookMessage = computed(() => {
  return author.books.length > 0 ? 'yes' : 'No'
})

const now = computed(() => {
  // return Date.now()
  return new Date().toLocaleString()
  // return new Date().toLocaleString()
})
</script>

<template>
  <h1>Comuted Example Page</h1>
  <p>Has Published Books</p>

  <!-- this is first method to display data -->
  <!-- <span>{{ author.books.length > 0 ? 'yes' : 'No' }}</span> -->

  <p>{{ publishBookMessage }}</p>

  <p>{{ now }}</p>
</template>

<style scoped></style>
