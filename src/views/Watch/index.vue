<template>
  <div class="watch">
    <button @click="count++">increase</button>
    <span>count:{{ count }}</span>
    <button @click="count--">decrease</button>
    <br />
    <button @click="age++">increase</button>
    <span>age:{{ age }}</span>
    <button @click="age--">decrease</button>
  </div>
</template>

<script>
import { ref, watchEffect, watch, watchPostEffect, watchSyncEffect } from 'vue'
export default {
  name: 'v3-watch',
  setup() {
    const count = ref(0)
    // 检测count的变化, 当count发生变化时, 会触发回调函数. watch函数返回一个停止watch的函数, 调用后, 后面count的变化不会触发回调函数
    const stop = watch(count, (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    setTimeout(() => {
      stop()
    }, 10000)

    const age = ref(20)

    // watch同时监听多个源
    watch([count, age], (newValue, oldValue) => {
      console.log(newValue, oldValue)
    })
    watchEffect(() => {
      console.log(`watchEffect:${count.value}`)
    })
    watchPostEffect(() => {
      console.log(`watchPostEffect:${count.value}`)
    })
    watchSyncEffect(() => {
      console.log(`watchSyncEffect:${count.value}`)
    })
    // setTimeout(() => {
    //   count.value++
    // }, 5000)
    return {
      count,
      age,
    }
  },
}
</script>

<style scoped lang="scss">
button {
  padding: 5px;
}
</style>
