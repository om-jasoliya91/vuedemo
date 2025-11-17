<script setup>
const props = defineProps({
  title: String,
})

// defineEmits() lets your component emit custom events to the parent component.
const emit = defineEmits(['enlarged'])

function enlarged() {
  emit('enlarged')
}
</script>
<template>
  <div class="blog-post">
    <h4>{{ props.title }}</h4>
    <button @click="enlarged">Enlarge Text</button>
  </div>
</template>
