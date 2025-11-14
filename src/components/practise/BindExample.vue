<script setup>
import { ref } from 'vue';

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
</script>

<template>
  <h1>Bind Example and Style Bindings</h1>

  <!-- string bindings  -->
  <p :class="btnClass">
    this uses a string class -> {{ btnClass }}
  </p>

  <!-- Array Binding -->
  <p :class="classesArray">
    This uses an array of classes → {{ classesArray }}
  </p>

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
</style>
