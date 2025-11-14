<script setup>
import { ref } from 'vue'
import VforExample from '../practise/VforExample.vue'
import ChildCard from '../practise/ChildCard.vue'

// Define items array for ChildCard
const items = ref([
  { id: 1, label: "Home" },
  { id: 2, label: "About" },
  { id: 3, label: "Contact" }
])
</script>

<template>
  <h1>Parent View</h1>

  <!-- Using VforExample component -->
  <VforExample />

  <h2>Using Child Component with v-for</h2>

  <ChildCard v-for="itemView in items" :key="itemView.id" :data="itemView" />
</template>

<style scoped></style>
