<script setup>
import { ref, onMounted } from 'vue'

import refExample from '../practise/refExample.vue'
import ChildCard from '../practise/ChildCard.vue'
import ClickButton from './ClickButton.vue'
import BlogPost from '../practise/BlogPost.vue'
import AlertBox from '../practise/AlertBox.vue'
import PropsExample from '../practise/PropsExample.vue'

// child method calling (ref example)
const child = ref(null)

onMounted(() => {
  if (child.value?.sayHello) {
    child.value.sayHello()
  }
})

// posts data
const posts = ref([
  { id: 1, title: 'My Vue Journey' },
  { id: 2, title: 'Blogging with Vue' },
])

// blog font change
const postFontSize = ref(1)

function enlargedText() {
  postFontSize.value += 0.1
}

// props example foo update
const fooValue = ref('hello')

function changeFoo(newValue) {
  fooValue.value = newValue
}
//it is for click event
function showAlert() {
  alert('alert button clicked')
}

//it is for click some-event
function callback(message) {
  console.log('parent recieved', message)
}
const count = ref(0)
function increaseCount(n) {
  console.log((count.value += n))
}
function saveItem(data) {
  console.log('Saved:', data)
}

function removeItem(data) {
  console.log('Deleted:', data)
}
</script>

<template>
  <refExample />

  <!-- Child with required props -->
  <ChildCard ref="child" name="om" :score="60" />

  <!-- Loop Child Cards -->
  <ChildCard v-for="post in posts" :key="post.id" :title="post.title" />

  <!-- ClickButton examples -->
  <ClickButton />
  <ClickButton />
  <ClickButton />

  <br /><br />

  <!-- BlogPost enlarge example -->
  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost title="My string" @enlarged="enlargedText" />
  </div>

  <br /><br />

  <!-- Alert Box -->
  <div class="container text-dark">
    <AlertBox type="warning"> it is information alert </AlertBox>
  </div>

  <!-- Global component -->
  <GlobalComponent />

  <!-- PropsExample with simple foo -->
  <PropsExample :foo="fooValue" :propC="'Required String'" :propD="null" />

  <!--here propC and propD always need apply because we can set validation required:true-->
  <!-- Loop (avoid v-bind="post" unless props match) -->
  <PropsExample
    v-for="post in posts"
    :key="post.id"
    :id="post.id"
    :title="post.title"
    :propC="'Required String'"
    :propD="null"
  />

  <!-- PropsExample changing foo -->
  <PropsExample
    :foo="fooValue"
    :id="1"
    title="how are you"
    @updatesFoo="changeFoo"
    :propC="'Required String'"
    :propD="null"
  />

  <!-- Full prop demo -->
  <PropsExample
    propB="Hello"
    propC="RequiredString"
    :propD="null"
    :propE="50"
    :propF="{ message: 'custom' }"
    propG="warning"
    :propH="() => 'Custom function'"
  />

  <!-- <PropsExample disabled :propC="'Required String'" :propD="null" />
  <PropsExample boolString :propC="'Required String'" :propD="null" />
  <PropsExample boolNumber :propC="'Required String'" :propD="null" />
  <PropsExample stringBool :propC="'Required String'" :propD="null" /> -->

  <PropsExample
    disabled
    boolString
    boolNumber
    stringBool
    :propC="'Required String'"
    :propD="null"
  />

  <PropsExample
    @alert="showAlert"
    @some-event="callback"
    @increase-by="increaseCount"
    @save="saveItem"
    @delete="removeItem"
    :propC="'Required String'"
    :propD="null"
  ></PropsExample>
</template>

<style scoped></style>
