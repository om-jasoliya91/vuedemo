<script setup>
import { watch } from 'vue'

const emit = defineEmits(['updatesFoo']) //child can send event
const { foo, id, title } = defineProps({
  foo: String,
  id: Number,
  title: String,
})
function requestToChange() {
  emit('updatesFoo', 'child wants too change foo!')
}
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

  <br />
  <button @click="requestToChange">Request to foo update</button>
</template>

<style scoped></style>
