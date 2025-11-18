<script setup>
const { type } = defineProps({
  type: {
    type: String,
    default: 'success', // success | error | warning | info
  },
})
</script>

<template>
  <div :class="`alert alert-${type}`">
    <slot />
  </div>
  <!--contetnt   will come from parent-->
</template>
