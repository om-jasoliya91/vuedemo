<script setup>
import { computed, ref } from 'vue'

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

const id = ref(10)

const ok = ref(true)
const message = ref('Hello World')

// const output = computed(() => {
//   return ok.value ? message.value : ""
// })

function sayHello() {
  alert('Hello Vue from Vue function')
}

const date = ref('2024-01-01')
function toTitleDate(d) {
  return new Date(d).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

function formatDate(d) {
  return new Date(d).toLocaleDateString('en-GB')
}

const url = ref('https://google.com')
</script>

<template>
  <h2>Javascript Expression demo</h2>

  <!-- Interpolation expressions -->
  <p>Upercase Name:{{ username.toUpperCase() }}</p>
  <p>Count * 2 = {{ count * 2 }}</p>
  <p>Total Price = {{ price * quantity }}</p>

  <p>status : {{ count > 5 ? 'high Count' : 'Low Count' }}</p>

  <button @click="increase">Increase Count (Current :{{ count }})</button>

  <div :id="`list-${id}`">{{ id }}</div>

  <!-- <span>{{ output }}</span> -->

  <span v-if="ok">{{ message }}</span>
  <span v-else>No message</span>
  <br />
  <button @click="sayHello">Click Me</button>

  <br />
  {{ formatDate(date) }}
  <br />
  <time :title="toTitleDate(date)" :datetime="date">
    {{ formatDate(date) }}
  </time>
  <br />
  <a :href="url">google</a>
</template>

<style scoped>
p {
  margin-bottom: 6px;
}
</style>
