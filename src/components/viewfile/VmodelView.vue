<script setup>
import { ref } from 'vue'
import VmodelComponent from '../practise/VmodelComponent.vue'

// Variables bound via v-model
const countModel = ref(0)
const inputValue = ref('')
</script>

<template>
  <VmodelComponent v-model:title="countModel" v-model="inputValue" />

  <h4>Parent Values</h4>
  <p>Count Model: {{ countModel }}</p>
  <p>Input Value: {{ inputValue }}</p>
</template>
