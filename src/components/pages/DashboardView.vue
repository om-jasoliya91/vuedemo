<script setup>
import HeaderComponent from '../layouts/HeaderComponent.vue'

const data = JSON.parse(localStorage.getItem('user'))
</script>

<template>
  <HeaderComponent></HeaderComponent>
  <h1>welcome {{ data.name }}</h1>
  <h3>Dashboard</h3>
</template>

<style scoped></style>
