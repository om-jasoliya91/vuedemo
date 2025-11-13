<script setup>
import { ref, nextTick } from 'vue';

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

</script>

<template>
  <button @click="mutateDeeply">Mutate</button>
  <p>{{ obj }}</p>

  Total Count:<button @click="increment">{{ count }}</button>
</template>

<style scoped></style>
