<script setup>
import {
  ref,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount,
  onErrorCaptured,
  onRenderTracked,
  onRenderTriggered,
  onActivated,
  onDeactivated,
  onServerPrefetch,
} from 'vue'
// When a component is rendered for the first time (Mounting phase)->onBeforeMount,onMounted
// When state changes (Updating phase)->onBeforeUpdate,onUpdated
// When component is removed (Unmounting phase)->onBeforeUnmount,onUnmount
// Special case — <KeepAlive> components->onActivated,onUnactivated
// Reactive state to trigger re-renders

const count = ref(0)

// LIFECYCLE HOOKS WITH DEFINITIONS & WHEN TO USE

// Runs BEFORE the component is added to the DOM
onBeforeMount(() => {
  console.log(' onBeforeMount → component is about to mount (DOM not available yet)')
})

// Runs AFTER the component is added to the DOM
// Use: API calls, event listeners, DOM refs, focus(), 3rd-party libs
onMounted(() => {
  console.log('onMounted → component mounted (DOM is now ready)')
})

//  Runs BEFORE DOM updates triggered by state change
// Use: fetch old DOM before patching
onBeforeUpdate(() => {
  console.log(' onBeforeUpdate → state changed, DOM will update')
})

// Runs AFTER DOM updated
// Use: detect DOM changes, animation after update
onUpdated(() => {
  console.log('onUpdated → DOM updated')
})

// Runs BEFORE a component is removed from DOM
// Use: cleanup operations
onBeforeUnmount(() => {
  console.log(' onBeforeUnmount → component is about to unmount')
})

//  Runs AFTER component removal from DOM
//  Use: clear intervals, sockets, listeners
onUnmounted(() => {
  console.log(' onUnmounted → component removed from DOM')
})

// ERROR HANDLING HOOK

//  Catches errors happening inside component or child components
//  Use: logging, fallback UI, monitoring
onErrorCaptured((err, instance, info) => {
  console.log(' onErrorCaptured → error caught:', err, info)
  return false // prevents error from propagating further (optional)
})

//  RENDER DIAGNOSTICS (DEV DEBUG ONLY)

//  When a reactive dependency is tracked for rendering
onRenderTracked((event) => {
  console.log(' onRenderTracked → dependency tracked:', event)
})

//  When a reactive change causes re-render
onRenderTriggered((event) => {
  console.log(' onRenderTriggered → re-render triggered by change:', event)
})

// KEEP-ALIVE HOOKS (ONLY FIRE IF COMPONENT IS WRAPPED IN <KeepAlive>)

// Fires when component becomes active again from cache
// Use: reload data when page re-opens, resume timers
onActivated(() => {
  console.log(' onActivated → component reactivated via KeepAlive')
})

//  Fires when component gets cached and hidden (not unmounted)
// Use: pause timers, save form data, stop interval
onDeactivated(() => {
  console.log(' onDeactivated → component deactivated via KeepAlive')
})

//  SERVER-SIDE (SSR ONLY)
//  Runs before component is rendered to HTML on server
// Use: fetch server-side data
onServerPrefetch(() => {
  console.log('onServerPrefetch → server prefetching before SSR render')
})

// Methods

function increase() {
  count.value++
}

// Force an error to trigger onErrorCaptured — uncomment if testing error hook
// throw new Error("Test error")
</script>

<template>
  <div class="container my-5">
    <h2>Vue Lifecycle Hooks Combined Example</h2>

    <p><strong>Count:</strong> {{ count }}</p>
    <button @click="increase" class="btn btn-primary">Increase</button>

    <p class="mt-2">Open the console to see lifecycle logs.</p>
  </div>
</template>
