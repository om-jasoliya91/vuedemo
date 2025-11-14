<script setup>
const props = defineProps({
  data: Object
})
</script>

<template>
  <div class="card">
    <h4>{{ data.label }}</h4>
  </div>
</template>

<style scoped>
.card {
  margin: 8px 0;
  padding: 12px;
  border: 1px solid #999;
  border-radius: 6px;
}
</style>
