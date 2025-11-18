<script setup>
import { watch } from 'vue'

const emit = defineEmits(['updatesFoo']) //child can send event
const props = defineProps({
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

  disabled: Boolean,
  boolString: [Boolean, String], //true
  boolNumber: [Boolean, Number], //true
  // boolNumber: [Number,Boolean], //true
  stringBool: [String, Boolean], //empty string
})
function requestToChange() {
  emit('updatesFoo', 'child wants too change foo!')
}
// destructure for easier usage
watch(
  () => props.foo,
  (newValue, oldValue) => {
    console.log('old foo:', oldValue)
    console.log('new foo:', newValue)
  },
)
</script>

<template>
  <div>Foo = {{ props.foo }}</div>
  <h3>{{ props.id }} - {{ props.title }}</h3>

  <br />
  <button @click="requestToChange">Request to foo update</button>

  <div>
    <p>B: {{ props.propB }}</p>
    <p>C: {{ props.propC }}</p>
    <p>D: {{ props.propD }}</p>
    <p>E: {{ props.propE }}</p>
    <p>F: {{ props.propF }}</p>
    <p>G: {{ props.propG }}</p>
    <p>H: {{ props.propH() }}</p>
  </div>

  <p>DISABLED:{{ props.disabled }}</p>
  <p>boolString: {{ props.boolString }}</p>
  <p>boolNumber: {{ props.boolNumber }}</p>
  <p>stringBool: {{ props.stringBool }}</p>
</template>

<style scoped></style>
