<script setup>
import { ref, onMounted, useTemplateRef } from 'vue'

const input = useTemplateRef('my-input')
const items = useTemplateRef('items')

onMounted(() => {
  // The main use of focus() is to make an input element active so the user can start typing without clicking.
  input.value.focus()
  items.value
  // document.activeElement := It returns the element where the cursor is currently active,
  // or the element that the user last clicked or typed in.
  // console.log('Is Focused?', document.activeElement === input.value)
})

const list = ref(['a', 'b', 'c'])

let inputRef = null
function setInput(el) {
  inputRef = el
  console.log('Got Input element:', inputRef)
}
</script>

<template>
  <div class="container my-5">
    <h1>ref example</h1>
    <input ref="my-input" placeholder="Cursor will auto-focus here " />
  </div>

  <ul>
    <li v-for="item in list" ref="items" :key="item">{{ item }}</li>
  </ul>

  <br />
  <br />
  <input :ref="setInput" placeholder="example of ref on function" />
</template>

<style scoped>
/* .container{
  margin: 40px;
} */
</style>
