<script setup>
import { ref } from 'vue'


//  Basic Counter Example
// reactive count variable
const count = ref(0)

// increase count when button clicked
function countPlus() {
  count.value++
}

//  Event + passing native event object
// reactive name variable
const name = ref('Vue.js')

// receive event as parameter e
function greet(e) {
  alert(`hello ${name.value}!`)
  alert(e.target.tagName) // prints which element triggered event
}


//  Passing custom arguments to a function
function say(message) {
  alert(message)
}


//  .prevent example (block default behavior)

function warn(message, event) {
  if (event) {
    event.preventDefault() // stop default browser action
  }
  alert(message)
}


//  Combined Event Modifiers Section

// reactive message to display feedback
const message = ref('No event triggered yet')

//  .once example
function handleOnce() {
  message.value = 'Clicked only once!'
}

// .stop example
// child click does NOT bubble up
function childClick() {
  message.value = 'Child clicked (but no bubbling)'
}

// parent normally receives bubble events
function parentClick() {
  message.value = 'Parent clicked'
}

/*  .prevent example  */
function handleSubmit() {
  message.value = 'Form submit prevented!'
}

/* .self example */
// triggers ONLY when clicking on the box itself, NOT children
function boxClick() {
  message.value = 'Box clicked (only if clicked directly on box)'
}

/*  .capture example */
// capture means parent listens FIRST
function captureParent() {
  message.value = 'Capture Parent First'
}

function captureChild() {
  message.value = 'Capture Child Second'
}

/* .passive example */
// passive events cannot use preventDefault()
// improves scroll performance
function scrollHandler() {
  message.value = 'Scrolling...'
}
</script>

<template>
  <h1>This is Eventhandler example page</h1>

  <!-- Basic Counter Button -->
  <button @click="countPlus">{{ count }}</button>

  <!-- greet() receives event using $event -->
  <button @click="greet($event)">
    Say Hello
  </button>

  <!-- Passing custom argument -->
  <button @click="say('Hello!')">Say Message</button>

  <!-- Using .prevent manually in function -->
  <button @click="warn('Form Cannot Submitted yet.', $event)">
    Submit
  </button>

  <h1>Vue Event Modifiers Combined Example</h1>

  <p><strong>Message:</strong> {{ message }}</p>

  <!-- .stop Example  -->
  <div @click="parentClick" style="padding:20px; border:1px solid #444;">
    Parent (.stop Example)
    <!-- .stop prevents event from reaching parent -->
    <button @click.stop="childClick">Click Child (.stop)</button>
  </div>

  <hr />

  <!-- .prevent Example -->
  <form @submit.prevent="handleSubmit">
    <button type="submit">Submit Form (.prevent)</button>
  </form>

  <hr />

  <!--self Example-->
  <!-- Trigger event ONLY when clicking on this DIV itself -->
  <div @click.self="boxClick"
    style="width:200px; height:80px; background:#ddd; display:flex; align-items:center; justify-content:center;">
    Click Inside Box (.self)
    <!-- Clicking this button will NOT trigger boxClick() -->
    <button>Button (won't trigger box)</button>
  </div>

  <hr />

  <!-- .capture Example  -->
  <!-- Parent receives event FIRST -->
  <div @click.capture="captureParent" style="padding:20px; border:1px solid green;">
    Parent (.capture)
    <button @click="captureChild">Child (.capture)</button>
  </div>

  <hr />

  <!-- once Example  -->
  <!-- This button works only ONCE -->
  <button @click.once="handleOnce">Click Only Once (.once)</button>

  <hr />

  <!--passive Example -->
  <!-- Scroll events do not block page performance -->
  <div style="height:100px; overflow:auto; border:1px solid #444;" @scroll.passive="scrollHandler">
    <div style="height:300px;">Scroll inside me (.passive)</div>
  </div>

</template>

<style scoped>
hr {
  margin: 20px 0;
}
</style>
