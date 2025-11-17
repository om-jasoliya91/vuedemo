<script setup>
import refExample from '../practise/refExample.vue'
import ChildCard from '../practise/ChildCard.vue'

import { ref, onMounted } from 'vue'

const child = ref(null)

onMounted(() => {
  child.value.sayHello() //calling chil method
})
</script>

<template>
  <refExample></refExample>
  <ChildCard ref="child"></ChildCard>
</template>

<style scoped></style>
