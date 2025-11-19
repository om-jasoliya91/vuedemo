<script setup>
// default v-model
const model = defineModel() // v-model

// named models
const title = defineModel('title') // v-model:title
const firstName = defineModel('firstName') // v-model:first-name
const lastName = defineModel('lastName') // v-model:last-name

// custom model with capitalize modifier
const text = defineModel('text', {
  get(value) {
    return value
  },
  set(value, modifiers) {
    console.log('Modifiers:', modifiers) // <– check if capitalize is coming

    if (modifiers?.capitalize) {
      if (typeof value === 'string' && value.length > 0) {
        value = value.charAt(0).toUpperCase() + value.slice(1)
      }
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
