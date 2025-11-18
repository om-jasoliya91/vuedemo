<script setup>
import { ref } from 'vue'
import VmodelComponent from '../practise/VmodelComponent.vue'

// Variables bound via v-model
const countModel = ref(0)
const inputValue = ref('')

const first = ref('')
const last = ref('')
</script>

<template>
  <VmodelComponent
    v-model:title="countModel"
    v-model="inputValue"
    v-model:first-name="first"
    v-model:last-name="last"
  />

  <h4>Parent Values</h4>
  <p>Count Model: {{ countModel }}</p>
  <p>Input Value: {{ inputValue }}</p>

  <h4>Parent Values:</h4>
  <p>First Name: {{ first }}</p>
  <p>Last Name: {{ last }}</p>
</template>
