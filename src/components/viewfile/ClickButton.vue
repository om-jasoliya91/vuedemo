<script setup>
import { ref } from 'vue'
import MyButton from '../practise/MyButton.vue'

function onClick() {
  console.log('button clicked!')
}
const count = ref(0)
</script>

<template>
  <button @click="count++">You clicked me {{ count }} times.</button>

  <my-button class="rounded shadow" @click="onClick"></my-button>
</template>

<style scoped>
.rounded {
  border-radius: 12px;
}

.shadow {
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.2);
}
</style>
