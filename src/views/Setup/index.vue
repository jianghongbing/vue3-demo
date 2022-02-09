<template>
  <div class="setup"></div>
</template>

<script>
import { onBeforeMount, onMounted, onBeforeUnmount, onUnmounted, ref } from 'vue'
export default {
  name: 'v3-setup',
  setup(props) {
    const index = ref(0)
    // setup中 不能访问this
    console.log(`this:${this}`)
    console.log(props)
    console.log(`setup:${++index.value}`)
    onBeforeMount(() => {
      console.log(`onBeforeMount:${++index.value}, this:${this}`)
    })
    onMounted(() => {
      console.log(`onMounted:${++index.value}, this:${this}`)
    })
    onBeforeUnmount(() => {
      console.log(`onBeforeUnmount:${++index.value}, this:${this}`)
    })
    onUnmounted(() => {
      console.log(`onUnmounted:${++index.value}, this:${this}`)
    })
  },
}
</script>

<style scoped lang="scss"></style>
