<template>
  <div class="watch">
    <button @click="count++">increase</button>
    <span>{{ count }}</span>
    <button @click="count--">decrease</button>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
export default {
  name: 'v3-watch',
  setup() {
    const count = ref(0)
    watchEffect(() => {
      console.log(count)
    })
    setTimeout(() => {
      count.value++
    }, 1000)
    return {
      count,
    }
  },
}
</script>

<style scoped lang="scss">
button {
  padding: 5px;
}
</style>
