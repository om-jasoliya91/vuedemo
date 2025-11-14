<script setup>
import { ref } from 'vue';

const isLoggedIn = ref(false)
const score = ref(50)
const isActive = ref(true)
</script>

<template>
  <h1>Condition Statement</h1>

  <!-- v-if and v-else statement with template-->
  <template v-if="isLoggedIn">
    <h2>Welcome User</h2>
    <p>You are logged in.</p>
  </template>
  <template v-else>
    <h2>Please Login</h2>
    <p>You need an account to continue.</p>
  </template>

  <!-- v-else-if statement -->
  <p v-if="score >= 80">Excellent</p>
  <p v-else-if="score >= 50">Average</p>
  <p v-else>Poor</p>

  <!-- v-show -->
  <p v-show="isActive">Active Section</p>

  <!-- conditional class -->
  <p :class="{ active: isActive, inactive: !isActive }">
    status :{{ isActive ? "Active" : "Inactive" }}
  </p>
</template>

<style scoped>
.active {
  color: green;
  font-weight: bold;
}

.inactive {
  color: red;
  font-weight: bold;
}
</style>
