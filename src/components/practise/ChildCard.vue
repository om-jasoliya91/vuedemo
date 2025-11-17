<script setup>
// const props = defineProps({
//   data: Object,
// })

const sayHello = () => {
  console.log('Hello from child.')
}

//Expose method so parent can call it
defineExpose({
  sayHello,
})
</script>

<template>
  <!-- <div class="card">
    <h4>{{ data.label }}</h4>
  </div> -->

  <div>Child Component loaded</div>
</template>

<style scoped>
.card {
  margin: 8px 0;
  padding: 12px;
  border: 1px solid #999;
  border-radius: 6px;
}
</style>
