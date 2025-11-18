<script setup>
import { ref, onMounted } from 'vue'
import LoginView from '../practise/LoginView.vue'
import RegiView from '../practise/RegiView.vue'

const currentComponents = ref('LoginView')
const components = {
  LoginView,
  RegiView,
}
onMounted(() => {
  setTimeout(() => {
    console.log('Example of onMounted with component lifecycle')
  }, 3000)
})
</script>

<template>
  <component :is="components[currentComponents]"> </component>
  <button @click="currentComponents = 'LoginView'">Login</button>
  <button @click="currentComponents = 'RegiView'">Register</button>
</template>

<style scoped></style>
