<script setup>
import { ref, reactive } from 'vue'


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
