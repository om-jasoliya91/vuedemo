<script setup>
// default v-model
const model = defineModel() // v-model

// named models
const title = defineModel('title') // v-model:title
const firstName = defineModel('first-name') // v-model:first-name
const lastName = defineModel('last-name') // v-model:last-name

// custom model with modifier
const text = defineModel('text', {
  set(value, modifiers) {
    if (modifiers?.capitalize) {
      value = value.charAt(0).toUpperCase() + value.slice(1)
    }
    return value
  },
})
</script>

<template>
  <div>
    <input v-model="model" placeholder="default model" />
    <input v-model="title" placeholder="title" />
    <input v-model="firstName" placeholder="first name" />
    <input v-model="lastName" placeholder="last name" />
    <input v-model="text" placeholder="capitalize model" />
  </div>
</template>
