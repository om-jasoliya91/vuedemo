<script setup>
import { ref } from 'vue'

//Reactive Variables
const count = ref(5)
const username = ref('om')
const price = ref(100)
const quantity = ref(3)

//Js Expression inside the function
// const total = ref(price.value * quantity.value)

// function to increase count
function increase() {
  count.value++
}
</script>

<template>
  <h2>Javascript Expression demo</h2>

  <!-- Interpolation expressions -->
  <p>Upercase Name:{{ username.toUpperCase() }}</p>
  <p>Count * 2 = {{ count * 2 }}</p>
  <p>Total Price = {{ price * quantity }}</p>

  <p>status : {{ count > 5 ? "high Count" : "Low Count" }}</p>

  <button @click="increase">
    Increase Count (Current :{{ count }})
  </button>
</template>

<style scoped>
p {
  margin-bottom: 6px;
}
</style>
