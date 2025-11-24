<script setup>
import { ref, computed, onMounted, onUnmounted, reactive } from 'vue'

const author = reactive({
  name: 'om',
  books: ['vue 2- Advanced Guide', 'vue 3- Baic Guide', 'vue 4- The Mystery'],
})
// console.log(author.books[2])

const publishBookMessage = computed(() => {
  return author.books.length > 0 ? 'yes' : 'No'
})

const now = computed(() => {
  // return Date.now()
  return new Date().toLocaleString()
  // return new Date().toLocaleString()
})

const nowCurrent = ref(new Date().toLocaleTimeString())
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    nowCurrent.value = new Date().toLocaleTimeString()
  }, 1000) //updates every 1 seconds
})

onUnmounted(() => {
  clearInterval(timer)
})

const firstName = ref('om')
const lastName = ref('jasoliya')

const fullName = computed({
  //getter
  get() {
    return firstName.value + ' ' + lastName.value
  },
  //setter
  set(newValue) {
    //we are usingdestruting assignment syntax here.
    ;[firstName.value, lastName.value] = newValue.split(' ')
  },
})

//getting the previous Value
const count = ref(2)
let previousValue = count.value
const alwaysSmall = computed({
  get() {
    if (count.value <= 3) {
      previousValue = count.value
    }
    return previousValue
  },
  set(newValue) {
    count.value = newValue * 2
  },
})
</script>

<template>
  <h1>Comuted Example Page</h1>
  <p>Has Published Books</p>

  <!-- this is first method to display data -->
  <!-- <span>{{ author.books.length > 0 ? 'yes' : 'No' }}</span> -->

  <p>{{ publishBookMessage }}</p>

  <p>{{ now }}</p>

  <p>Live Time (updates every sec): {{ nowCurrent }}</p>

  <p>{{ fullName }}</p>

  <p>{{ alwaysSmall }}</p>
</template>

<style scoped></style>
