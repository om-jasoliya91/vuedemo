<script setup>
import { ref, nextTick, reactive, toRefs } from 'vue';

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})
function mutateDeeply() {
  obj.value.nested.count++,
    obj.value.arr.push('ketan', 'om')
}

// Count variable for increment()

const count = ref(0)
async function increment() {
  count.value++ //it is update existing value
  await nextTick() //it is wait DOM update
  console.log('DOM updated! New count:', count.value) //It is finally display in consol check Now DOM is updated
  //Now the DOM is Updated
}
//it is object it is proxy means reactive it is use automatic update ui
const state = reactive({
  count: 0,
  user: {
    name: 'om'
  }
})
const { count: countRef, user } = toRefs(state)

function incrementReactive() {
  // state.count++
  console.log(state.count++)
}

const raw = {}
const proxy = reactive(raw)
// proxy is NOT equal to the original.
console.log(proxy === raw) // false
console.log(reactive(raw) === proxy) //true

</script>

<template>
  <button @click="mutateDeeply">Mutate</button>
  <p>{{ obj }}</p>
  Total Count: <button @click="increment">{{ count }}</button>
  <br><br>
  <p>Reactive Count From toRefs(): {{ countRef }}</p>
  <p>User Name: {{ user.name }}</p>
  <button @click="incrementReactive">Increase Reactive Count</button>
</template>

<style scoped></style>
