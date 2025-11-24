<script setup>
import { ref, computed } from 'vue'

//Reactive state
const isActive = ref(true)
const isError = ref(false)

// String class
const btnClass = ref('btn-blue')

//Array classes
const classesArray = ref(['Box', 'shadow'])

//Toggle functions
function toggleActive() {
  isActive.value = !isActive.value
}

function toggleError() {
  isError.value = !isError.value
}

//Binding Inline Style
//Reactive Values
const color = ref('blue')
const size = ref(18)
const isHighlight = ref(false)

//Style an an object
const objectStyle = computed(() => ({
  color: color.value,
  fontSize: size.value + 'px',
  padding: '8px',
  border: '4px',
}))

// Another object for array style binding
const highlightStyle = computed(() => ({
  backgroundColor: isHighlight.value ? 'yellow' : 'purple',
  border: isHighlight.value ? '2px solid orange' : '2px solid green',
}))

// Base static style
const baseStyle = {
  display: 'inline-block',
  padding: '10px',
}

// Buttons
function toggleHighlight() {
  isHighlight.value = !isHighlight.value
}
function increaseSize() {
  size.value += 2
}

function changeColor() {
  color.value = color.value === 'blue' ? 'green' : 'blue'
}
</script>

<template>
  <h1>Bind Example and Style Bindings</h1>

  <!-- string bindings  -->
  <p :class="btnClass">this uses a string class -> {{ btnClass }}</p>

  <!-- Array Binding -->
  <p :class="classesArray">This uses an array of classes → {{ classesArray }}</p>

  <!-- object binding -->
  <p :class="{ active: isActive, error: isError }">
    Objet Binding:{{ isActive }},error = {{ isError }}
  </p>
  <!-- Combined :class with array + object + string -->
  <p :class="[btnClass, classesArray, { active: isActive, error: isError }]">
    Combined class binding
  </p>

  <button @click="toggleActive">Active</button>
  <button @click="toggleError">Error</button>

  <!-- inline style binding  -->
  <h1>Combined Inline Style Example</h1>

  <!-- object tyle binding  -->
  <p :style="objectStyle">object binding-> color: {{ color }},size:{{ size }}px</p>

  <!-- Array style Binding  -->
  <p :style="[baseStyle, highlightStyle]">Array Binding → highlight:{{ highlightStyle }}</p>
  <!-- Combined (object + array) -->
  <p :style="[objectStyle, highlightStyle, { marginTop: '15px', cursor: 'pointer' }]">
    Combined Binding (object + array + extra)
  </p>

  <!-- Controls -->
  <button @click="changeColor">Toggle Color</button>
  <button @click="increaseSize">Increase Font Size</button>
  <button @click="toggleHighlight">Toggle Highlight</button>
</template>

<style scoped>
/* String classes */
.btn-blue {
  background: #1e90ff;
  padding: 10px;
  color: white;
  border-radius: 5px;
}

/* Array classes */
.box {
  padding: 10px;
  border: 1px solid #aaa;
}

.shadow {
  box-shadow: 0 0 5px #999;
}

/* Object classes */
.active {
  background: green;
  color: white;
}

.error {
  border: 2px solid red;
  color: red;
}

button {
  margin-right: 10px;
  padding: 6px 12px;
}
</style>
