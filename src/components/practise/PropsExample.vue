<script setup>
import { watch } from 'vue'

const { foo, id, title } = defineProps({
  foo: String,
  id: Number,
  title: String,
})

// destructure for easier usage
watch(
  () => foo,
  (newValue, oldValue) => {
    console.log('old foo:', oldValue)
    console.log('new foo:', newValue)
  },
)
</script>

<template>
  <div>Foo = {{ foo }}</div>
  <h3>{{ id }} - {{ title }}</h3>
</template>

<style scoped></style>
