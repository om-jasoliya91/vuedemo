<script setup>
import { watch } from 'vue'

const emit = defineEmits(['updatesFoo']) //child can send event
const { foo, id, title } = defineProps({
  foo: String,
  id: Number,
  //normal basic type check
  title: String,

  //multiple Allowed types
  propB: [String, Number],

  //Required string
  propC: { type: String, required: true },

  //required but nullable string
  propD: {
    type: [String, null],
    required: true,
  },
  //Number with default value
  propE: {
    type: Number,
    default: 100,
  },
  // Object with default value
  propF: {
    type: Object,
    default(rawProps) {
      return { message: 'hello' }
    },
  },
  // Custom validator
  propG: {
    validator(value, props) {
      return ['success', 'warning', 'danger'].includes(value)
    },
  },
  propH: {
    type: Function,
    default() {
      return 'Default function'
    },
  },
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

  <div>
    <p>B: {{ propB }}</p>
    <p>C: {{ propC }}</p>
    <p>D: {{ propD }}</p>
    <p>E: {{ propE }}</p>
    <p>F: {{ propF }}</p>
    <p>G: {{ propG }}</p>
    <p>H: {{ propH() }}</p>
  </div>
</template>

<style scoped></style>
