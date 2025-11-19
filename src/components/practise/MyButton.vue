<script setup>
const emit = defineEmits(['click'])

function handleClick(event) {
  console.log('click', event)
  emit('click', event)
}
</script>

<template>
  <button class="btn large" @click="handleClick">Click Me</button>
</template>

<style scoped>
.btn {
  background: #2196f3;
  color: white;
  padding: 10px 15px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

.large {
  font-size: 18px;
  padding: 12px 20px;
}
</style>
