import { ref } from 'vue'
import { defineStore } from 'pinia'

// defineStore is the main function used to create a Pinia store.
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const username = ref('om')
  const isOpen = ref(false)

  function increase() {
    count.value++
  }
  return {
    count,
    username,
    isOpen,
    increase,
  }
})
