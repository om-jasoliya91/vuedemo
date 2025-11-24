<script setup>
import { ref } from 'vue'
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

// defineProps() is used to receive data (props) from the parent component inside a child component.
const props = defineProps({
  data: Object,
  name: String,
  score: Number,
  title: String,
})

const posts = ref([
  { id: 1, title: 'my journy with vue' },
  { id: 2, title: 'blogging with vue' },
  { id: 3, title: 'my journy with vue' },
])

// const fontSize = ref(1)
</script>

<template>
  <!-- <div class="card">
    <h4>{{ data.label }}</h4>
  </div> -->

  <div>Child Component loaded</div>
  <h1>This is example of defineProps</h1>
  <p><strong>Name:</strong>{{ props.name }}</p>
  <p><strong>Score:</strong>{{ props.score }}</p>

  <p>{{ posts }}</p>
</template>

<style scoped>
.card {
  margin: 8px 0;
  padding: 12px;
  border: 1px solid #999;
  border-radius: 6px;
}
</style>
