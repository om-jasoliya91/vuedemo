<script setup>
import { ref } from 'vue'

const rawHtml = ref("<b style='color:red;'>This is bold text</b>")
const isButtonDisabled = ref(false)

function handleClick() {
  isButtonDisabled.value = true
}

// const count = ref(0)
// const username = ref('om')
// const isOpen = ref(false)
// function increase() {
//   count.value++
// }

import { useCounterStore } from './stores/counter';
const counter = useCounterStore()

// Dynamically Binding Multiple Attributes
const objectOfAttrs = {
  id: 'container',
  class: 'wrapper',
  style: 'background-color:green; margin-top:10px;'
}
</script>

<template>
  <h1>Hello World</h1>
  <div class="app">
    <button @click="counter.increase">Count is:{{ counter.count }}</button>

    <!-- here v-html is use for Renders HTML inside a variable like => const rawHtml = ref("<b>This is bold text</b>") -->
    <p>Using v-html directive: <span v-html="rawHtml"></span></p>
  </div>

  <div v-bind:id="dynamicId"></div>
  <div :id="hello"></div> <!-- it is shorthand syntax of v-bind-->
  <button :disabled="isButtonDisabled" @click="handleClick">Disabled</button>

  <div v-bind="objectOfAttrs">hello</div>
</template>

<style scoped></style>
