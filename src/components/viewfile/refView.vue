<script setup>
import refExample from '../practise/refExample.vue'
import ChildCard from '../practise/ChildCard.vue'
import ClickButton from './ClickButton.vue'
import BlogPost from '../practise/BlogPost.vue'
import AlertBox from '../practise/AlertBox.vue'

import { ref, onMounted } from 'vue'

const child = ref(null)

onMounted(() => {
  child.value.sayHello() //calling child method
})

const posts = ref([
  { id: 1, title: 'My Vue Journey' },
  { id: 2, title: 'Blogging with Vue' },
])

const postFontSize = ref(1)

function enlargedText() {
  postFontSize.value += 0.1
}
</script>

<template>
  <refExample></refExample>
  <ChildCard ref="child"></ChildCard>
  <ChildCard name="om" :score="60" />
  <ChildCard v-for="post in posts" :key="post.id" :title="post.title" />

  <ClickButton></ClickButton>
  <ClickButton></ClickButton>
  <ClickButton></ClickButton>
  <br />
  <br />
  <div :style="{ fontSize: postFontSize + 'em' }">
    <!-- here i got parse error because  not write stringin single quote-->
    <BlogPost :title="'My string'" @enlarged="enlargedText"></BlogPost>
  </div>

  <br />
  <br />
  <div class="container text-dark">
    <AlertBox type="warning">it is information alert</AlertBox>
  </div>
</template>

<style scoped></style>
