<script setup>
import { ref } from 'vue'

//  Basic Counter Example
const count = ref(0)
function countPlus() {
  count.value++
}

//  Event + passing native event object
const name = ref('Vue.js')
function greet(e) {
  alert(`hello ${name.value}!`)
  alert(e.target.tagName)
}

//  Passing custom arguments
function say(message) {
  alert(message)
}

// .prevent example
function warn(message, event) {
  if (event) event.preventDefault()
  alert(message)
}

// Combined Event Modifiers
const message = ref('No event triggered yet')

// .once
function handleOnce() {
  message.value = 'Clicked only once!'
}

// .stop
function childClick() {
  message.value = 'Child clicked (but no bubbling)'
}
function parentClick() {
  message.value = 'Parent clicked'
}

// .prevent
function handleSubmit() {
  message.value = 'Form submit prevented!'
}

// .self
function boxClick() {
  message.value = 'Box clicked (only if clicked directly on box)'
}

// .capture
function captureParent() {
  message.value = 'Capture Parent First'
}
function captureChild() {
  message.value = 'Capture Child Second'
}

// .passive
function scrollHandler() {
  message.value = 'Scrolling...'
}

// Keyboard Events
const keyMessage = ref('Press any key in the input below...')

function onEnter() {
  keyMessage.value = 'ENTER key pressed'
}
function onTab() {
  keyMessage.value = 'TAB key pressed'
}
function onDelete() {
  keyMessage.value = 'DELETE/BACKSPACE key pressed'
}
function onEsc() {
  keyMessage.value = 'ESC key pressed'
}
function onSpace() {
  keyMessage.value = 'SPACE key pressed'
}
function onUp() {
  keyMessage.value = 'UP ARROW key pressed'
}
function onDown() {
  keyMessage.value = 'DOWN ARROW key pressed'
}
function onLeft() {
  keyMessage.value = 'LEFT ARROW key pressed'
}
function onRight() {
  keyMessage.value = 'RIGHT ARROW key pressed'
}

// Mouse Buttons Example
const clickMsg = ref('Click the box using left, right, or middle mouse button')

function leftClick() {
  clickMsg.value = 'LEFT mouse button clicked'
}

function rightClick() {
  clickMsg.value = 'RIGHT mouse button clicked'
}

function middleClick() {
  clickMsg.value = 'MIDDLE mouse button clicked'
}
</script>

<template>
  <h1>This is Eventhandler example page</h1>

  <!-- Basic Counter -->
  <button @click="countPlus">{{ count }}</button>

  <!-- greet() -->
  <button @click="greet($event)">Say Hello</button>

  <!-- Custom argument -->
  <button @click="say('Hello!')">Say Message</button>

  <!-- Manual .prevent -->
  <button @click="warn('Form Cannot Submitted yet.', $event)">Submit</button>

  <h1>Vue Event Modifiers Combined Example</h1>

  <p><strong>Message:</strong> {{ message }}</p>

  <!-- .stop -->
  <div @click="parentClick" style="padding: 20px; border: 1px solid #444">
    Parent (.stop)
    <button @click.stop="childClick">Child (.stop)</button>
  </div>

  <hr />

  <!-- .prevent -->
  <form @submit.prevent="handleSubmit">
    <button type="submit">Submit Form (.prevent)</button>
  </form>

  <hr />

  <!-- .self -->
  <div
    @click.self="boxClick"
    style="
      width: 200px;
      height: 80px;
      background: #ddd;
      display: flex;
      align-items: center;
      justify-content: center;
    "
  >
    Click Inside (.self)
    <button>Button</button>
  </div>

  <hr />

  <!-- .capture -->
  <div @click.capture="captureParent" style="padding: 20px; border: 1px solid green">
    Parent (.capture)
    <button @click="captureChild">Child</button>
  </div>

  <hr />

  <!-- .once -->
  <button @click.once="handleOnce">Click Only Once (.once)</button>

  <hr />

  <!-- .passive -->
  <div
    style="height: 100px; overflow: auto; border: 1px solid #444"
    @scroll.passive="scrollHandler"
  >
    <div style="height: 300px">Scroll inside me (.passive)</div>
  </div>

  <h1>Keyboard Event Modifiers Example</h1>

  <p><strong>Message:</strong> {{ keyMessage }}</p>

  <input
    type="text"
    placeholder="Press a key..."
    style="padding: 10px; width: 300px; font-size: 16px; margin-bottom: 20px"
    @keyup.enter="onEnter"
    @keyup.tab="onTab"
    @keyup.delete="onDelete"
    @keyup.esc="onEsc"
    @keyup.space="onSpace"
    @keyup.up="onUp"
    @keyup.down="onDown"
    @keyup.left="onLeft"
    @keyup.right="onRight"
  />

  <h1>Mouse Button Modifiers Example</h1>

  <p><strong>Message:</strong> {{ clickMsg }}</p>

  <!-- IMPORTANT: Prevent browser menu for middle/right -->
  <div @contextmenu.prevent style="display: flex; gap: 10px; margin-top: 20px">
    <!-- LEFT -->
    <div
      @mouseup.left="leftClick"
      style="
        width: 80px;
        height: 50px;
        background: #d4ffd4;
        border: 1px solid #333;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      Left
    </div>

    <!-- RIGHT -->
    <div
      @mouseup.right.prevent="rightClick"
      style="
        width: 80px;
        height: 50px;
        background: #ffd4d4;
        border: 1px solid #333;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      Right
    </div>

    <!-- MIDDLE -->
    <div
      @mouseup.middle.prevent="middleClick"
      style="
        width: 80px;
        height: 50px;
        background: #d4e0ff;
        border: 1px solid #333;
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      Middle
    </div>
  </div>
</template>

<style scoped>
hr {
  margin: 20px 0;
}

div {
  cursor: pointer;
}
</style>
