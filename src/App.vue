<script setup>
// import { ref } from 'vue'

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
  </div>
</template>

<style scoped></style>
