<script setup>
import { watch } from 'vue'

// Events the child will send to parent
const emit = defineEmits(['updatesFoo', 'alert', 'some-event', 'increase-by', 'save', 'delete'])

// Props received from parent
const props = defineProps({
  foo: String,
  id: Number,
  title: String,

  propB: [String, Number],
  propC: { type: String, required: true },
  propD: { type: [String, null], required: true },

  propE: { type: Number, default: 100 },
  propF: {
    type: Object,
    default() {
      return { message: 'hello' }
    },
  },

  propG: {
    validator(value) {
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
  boolString: [Boolean, String],
  boolNumber: [Boolean, Number],
  stringBool: [String, Boolean],
})

// Emits message change
function requestToChange() {
  emit('updatesFoo', 'child wants too change foo!')
}

// Watch foo prop change
watch(
  () => props.foo,
  (newValue, oldValue) => {
    console.log('old foo:', oldValue)
    console.log('new foo:', newValue)
  },
)

// Event buttons
const emitAlert = () => emit('alert')
const sendEvent = () => emit('some-event', 'Hi parent!')
const increase = () => emit('increase-by', 1)
const saveItem = () => emit('save', { id: 10 })
const deleteItem = () => emit('delete', { id: 10 })
</script>

<template>
  <div>Foo = {{ props.foo }}</div>
  <h3>{{ props.id }} - {{ props.title }}</h3>

  <button @click="requestToChange" class="mb-2">Request to Foo update</button>

  <div>
    <p>B: {{ props.propB }}</p>
    <p>C: {{ props.propC }}</p>
    <p>D: {{ props.propD }}</p>
    <p>E: {{ props.propE }}</p>
    <p>F: {{ props.propF }}</p>
    <p>G: {{ props.propG }}</p>
    <p>H: {{ props.propH() }}</p>
  </div>

  <p>DISABLED: {{ props.disabled }}</p>
  <p>boolString: {{ props.boolString }}</p>
  <p>boolNumber: {{ props.boolNumber }}</p>
  <p>stringBool: {{ props.stringBool }}</p>

  <div>
    <button @click="emitAlert">Alert</button>
    <button @click="sendEvent">Some-Event</button>
    <button @click="increase">Increase by 1</button>
    <button @click="saveItem">Save</button>
    <button @click="deleteItem">Delete</button>
  </div>
</template>

<style scoped></style>
