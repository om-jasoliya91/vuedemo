<script setup>
import { ref, onMounted, onUpdated } from 'vue'
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

const count = ref(0)
const message = ref('hello')

onUpdated(() => {
  console.log('DOM updates because count changed!')
  console.log('updated DOM text:', document.getElementById('msg').innerText)
})
</script>

<template>
  <component :is="components[currentComponents]"> </component>
  <button @click="currentComponents = 'LoginView'">Login</button>
  <button @click="currentComponents = 'RegiView'">Register</button>

  <button @click="count++">Count:{{ count }}</button>

  <p id="msg">{{ message }}</p>
  <button @click="message = 'World'">Change</button>
</template>

<style scoped></style>
