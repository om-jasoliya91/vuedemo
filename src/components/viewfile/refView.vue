<script setup>
import { ref, onMounted } from 'vue'

import refExample from '../practise/refExample.vue'
import ChildCard from '../practise/ChildCard.vue'
import ClickButton from './ClickButton.vue'
import BlogPost from '../practise/BlogPost.vue'
import AlertBox from '../practise/AlertBox.vue'
import PropsExample from '../practise/PropsExample.vue'

// child method calling
const child = ref(null)
onMounted(() => child.value?.sayHello?.())

// posts data
const posts = ref([
  { id: 1, title: 'My Vue Journey' },
  { id: 2, title: 'Blogging with Vue' },
])

// blog font change
const postFontSize = ref(1)
const enlargedText = () => (postFontSize.value += 0.1)

// props update foo
const fooValue = ref('hello')
const changeFoo = (newValue) => (fooValue.value = newValue)

// custom events
const showAlert = () => alert('alert button clicked')
const callback = (message) => console.log('parent received:', message)
const count = ref(0)
const increaseCount = (n) => console.log((count.value += n))
const saveItem = (data) => console.log('Saved:', data)
const removeItem = (data) => console.log('Deleted:', data)
</script>

<template>
  <refExample />

  <ChildCard ref="child" name="om" :score="60" />

  <ChildCard v-for="post in posts" :key="post.id" :title="post.title" />

  <ClickButton />
  <ClickButton />
  <ClickButton />

  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost title="My string" @enlarged="enlargedText" />
  </div>

  <div class="container text-dark">
    <AlertBox type="warning"> it is information alert </AlertBox>
  </div>

  <GlobalComponent />

  <!-- PropsExample with foo update -->
  <PropsExample :foo="fooValue" @updatesFoo="changeFoo" :propC="'Required String'" :propD="null" />

  <!-- Loop -->
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

  <!-- Full props -->
  <PropsExample
    propB="Hello"
    propC="RequiredString"
    :propD="null"
    :propE="50"
    :propF="{ message: 'custom' }"
    propG="warning"
    :propH="() => 'Custom function'"
  />

  <PropsExample
    disabled
    boolString
    boolNumber
    stringBool
    :propC="'Required String'"
    :propD="null"
  />

  <!-- Events -->
  <PropsExample
    @alert="showAlert"
    @some-event="callback"
    @increase-by="increaseCount"
    @save="saveItem"
    @delete="removeItem"
    :propC="'Required String'"
    :propD="null"
  />
</template>

<style scoped></style>
