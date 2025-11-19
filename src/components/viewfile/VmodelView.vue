<script setup>
import { ref } from 'vue'
import VmodelComponent from '../practise/VmodelComponent.vue'

const countModel = ref(0)
const inputValue = ref('')
const first = ref('')
const last = ref('')

// Needed for v-model.capitalize
const myText = ref('')
</script>

<template>
  <VmodelComponent
    v-model:title="countModel"
    v-model="inputValue"
    v-model:first-name="first"
    v-model:last-name="last"
    v-model:text.capitalize="myText"
  />

  <h4>Parent Values</h4>
  <p>Count Model: {{ countModel }}</p>
  <p>Input Value: {{ inputValue }}</p>

  <h4>Parent Values:</h4>
  <p>First Name: {{ first }}</p>
  <p>Last Name: {{ last }}</p>

  <h4>My Text: {{ myText }}</h4>
</template>
