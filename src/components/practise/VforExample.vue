<script setup>
import { ref, reactive, computed } from 'vue'


// simple text from parent
const headerText = ref("Header says")

// array list example
const menuItems = ref([
  { label: "Dashboard" },
  { label: "Profile" },
  { label: "Settings" }
])

// object example
const bookInfo = reactive({
  title: "Learning Vue",
  author: "John Smith",
  year: "2025"
})

// array example
const todos = ref([
  { id: 1, name: "Buy groceries", isComplete: false },
  { id: 2, name: "Wash car", isComplete: true },
  { id: 3, name: "Study Vue.js", isComplete: false }
])

// reactive list
const fruits = ref(["Apple", "Banana", "Orange"])

// push() → add item at end
function addFruit() {
  fruits.value.push("Mango")
}

// pop() → remove last item
function removeLast() {
  fruits.value.pop()
}

// shift() → remove first item
function removeFirst() {
  fruits.value.shift()
}

// unshift() → add item at start
function addAtStart() {
  fruits.value.unshift("Pineapple")
}

// splice() → remove or replace items
function spliceExample() {
  // remove 1 item at index 1 and replace with "Grapes"
  fruits.value.splice(1, 1, "Grapes")
}

// sort() → alphabetical sort
function sortFruits() {
  fruits.value.sort()
}

// reverse() → reverse array order
function reverseFruits() {
  fruits.value.reverse()
}



const numbers = ref([1, 2, 3, 4, 5])

const evenNumbers = computed(() => {
  return numbers.value.filter(n => n % 2 === 0)
})



</script>

<template>
  <h1>v-for Examples</h1>

  <!--v-for with array and index -->
  <h2>Array Loop</h2>
  <ul>
    <li v-for="(item, index) in menuItems" :key="index">
      {{ headerText }} - {{ index }} - {{ item.label }}
    </li>
  </ul>

  <!-- v-for with object values -->
  <h2>Object Loop</h2>
  <ul>
    <li v-for="(value, key) in bookInfo" :key="key">
      {{ key }} : {{ value }}
    </li>
  </ul>

  <!-- v-for with number -->
  <h2>Numbers Loop 1 to 10</h2>
  <div>
    <span v-for="number in 10" :key="number">
      {{ number }}
    </span>
  </div>

  <!--v-for on template -->
  <h2>v-for with &lt;template&gt;</h2>
  <ul>
    <template v-for="(item, index) in menuItems" :key="index">
      <li>{{ item.label }}</li>
      <p class="divider" role="presentation"></p>
    </template>
  </ul>

  <h1>Todo List (Incomplete Only)</h1>
  <!-- When they exist on the same node, v-if has a higher priority than v-for.
That means the v-if condition will not have access to variables from the scope of the v-for: -->
  <ul>
    <template v-for="todo in todos" :key="todo.id">
      <li v-if="!todo.isComplete">
        {{ todo.name }}
      </li>
    </template>
  </ul>

  <h1>Array Methods Example in Vue 3</h1>

  <h3>Current Fruits:</h3>
  <p>{{ fruits }}</p>

  <button @click="addFruit">push() → Add Mango</button>
  <button @click="removeLast">pop() → Remove Last</button>
  <button @click="removeFirst">shift() → Remove First</button>
  <button @click="addAtStart">unshift() → Add Pineapple</button>
  <button @click="spliceExample">splice() → Replace Banana</button>
  <button @click="sortFruits">sort() → Sort A-Z</button>
  <button @click="reverseFruits">reverse() → Reverse Order</button>

  <h1>Even Number</h1>
  <p>{{ evenNumbers }}</p>
</template>

<style scoped>
ul {
  padding-left: 20px;
}

li {
  margin: 6px 0;
  font-size: 16px;
}

.divider {
  height: 2px;
  background-color: #aaa;
  margin: 4px 0;
}
</style>
