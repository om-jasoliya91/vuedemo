<script setup>
import { ref, reactive, watch, watchEffect, nextTick } from 'vue'

// state
const user = reactive({
  name: '',
  profile: {
    age: 0,
    city: '',
  },
})

const id = ref(0)
const count = ref(0)

// deep+eager
watch(
  user,
  (newVal) => {
    console.log(' Deep + Eager Watch → user changed:', JSON.parse(JSON.stringify(newVal)))
  },
  { deep: true, immediate: true },
)

// once Watcher
let firstRun = true
watch(id, (newVal) => {
  if (!firstRun) return
  console.log(' Once Watch Triggered → id first change:', newVal)
  firstRun = false
})

// simple watch
watch(id, (newId) => {
  console.log(' API call simulated for id:', newId)
})

// watchEffect (auto dependency tracking)
watchEffect(() => {
  console.log('⚡ watchEffect → id:', id.value, '| city:', user.profile.city)
})

// FLUSH WATCHERS (pre | post | sync)
watch(
  count,
  async (newVal) => {
    console.log(' PRE → BEFORE DOM:', newVal)
    await nextTick()
    console.log(' PRE → AFTER DOM:', document.querySelector('#countDom')?.textContent)
  },
  { flush: 'pre' },
)

watch(
  count,
  async (newVal) => {
    console.log(' POST → AFTER DOM:', newVal)
  },
  { flush: 'post' },
)

watch(
  count,
  async (newVal) => {
    console.log(' SYNC → IMMEDIATE:', newVal)
    await nextTick()
    console.log(' SYNC → AFTER DOM:', document.querySelector('#countDom')?.textContent)
  },
  { flush: 'sync' },
)

// function
function increaseCount() {
  count.value++
}
function increaseId() {
  id.value++
}
</script>

<template>
  <div class="container my-5" style="width: 550px">
    <h2 class="mb-3">All Watchers Combined Example</h2>

    <!-- Deep + eager watcher -->
    <label class="form-label">User Name</label>
    <input v-model="user.name" class="form-control mb-2" />

    <label class="form-label">Age</label>
    <input type="number" v-model="user.profile.age" class="form-control mb-2" />

    <label class="form-label">City</label>
    <input v-model="user.profile.city" class="form-control mb-4" />

    <!-- Once Watcher + API Watch -->
    <h4>Current ID: {{ id }}</h4>
    <button @click="increaseId" class="btn btn-secondary mb-4">Increase ID</button>

    <!-- Flush timing -->
    <h4>Flush Timing Watchers Demo</h4>
    <p>
      <strong>Count Dom:</strong> <span id="countDom">{{ count }}</span>
    </p>
    <button @click="increaseCount" class="btn btn-primary">Increase Count</button>

    <hr />
  </div>
</template>
