<script setup>
import { ref } from 'vue'

const rawHtml = ref("<b style='color:red;'>This is bold text</b>")

// const count = ref(0)
// const username = ref('om')
// const isOpen = ref(false)
// function increase() {
//   count.value++
// }

import { useCounterStore } from './stores/counter';
const counter = useCounterStore()
</script>

<template>
  <h1>Hello World</h1>
  <div class="app">
    <button @click="counter.increase">Count is:{{ counter.count }}</button>

    <!-- here v-html is use for Renders HTML inside a variable like => const rawHtml = ref("<b>This is bold text</b>") -->
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>
</template>

<style scoped></style>
