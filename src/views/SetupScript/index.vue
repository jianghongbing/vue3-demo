<template>
  <div class="setup-script">
    <p>{{ count }}</p>
    <button @click="handleClick">click me</button>
    <br />
    <button @click="handelButton2Click(2)">click btn 2</button>
    <br />
    <input type="text" v-model="message" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const count = ref(0)
const handleClick = () => {
  count.value++
}
const message = ref('')
watch(message, (newValue, oldValue) => {
  console.log(newValue, oldValue)
})
const handelButton2Click = (value) => {
  count.value += value
}
</script>

<style lang="scss" scoped>
.setup-script {
  button {
    padding: 10px;
    background: orangered;
    color: #fff;
  }
}
</style>
