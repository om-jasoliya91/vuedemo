<script setup>
// Custom v-model:title (parent: v-model:title="countModel")
const titleModel = defineModel('title')

// Default v-model (parent: v-model="inputValue")
const inputModel = defineModel()

function update() {
  titleModel.value++ // increment parent value
}
</script>

<template>
  <h3>Vmodel Component</h3>

  <!-- Display the custom v-model:title -->
  <div>Parent bound v-model:title is: {{ titleModel }}</div>
  <button @click="update">Increment</button>

  <br /><br />

  <!-- Default v-model for <input> -->
  <input v-model="inputModel" placeholder="Type something..." />
</template>
