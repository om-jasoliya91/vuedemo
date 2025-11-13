<script setup>
import { ref } from 'vue';

const obj = ref({
  nested: { count: 0 },
  arr: ['foo', 'bar'],
})
function mutateDeeply() {
  obj.value.nested.count++,
    obj.value.arr.push('ketan', 'om')
}
</script>

<template>
  <button @click="mutateDeeply">Mutate</button>
  <p>{{ obj }}</p>
</template>

<style scoped></style>
