<template>
  <div class="compouted">
    <span>name:{{ obj.name }}</span>
    <br />
    <span>upperCaseName: {{ upperCaseName }}</span>
    <br />
    <button @click="obj.age++">increase age</button>
    <span>{{ age }}</span>
    <br />
    <button @click="agePlus++">increase age</button>
    <span>{{ agePlus }}</span>
    <button @click="agePlus--">decrease age</button>
  </div>
</template>

<script>
import { reactive, computed } from 'vue'
export default {
  name: 'v3-computed',
  setup() {
    const obj = reactive({
      name: 'jiangxiaoyu',
      age: 10,
    })

    // computed函数接收一个getter函数, 并根据getter的返回值返回一个不可变的响应式ref对象
    const age = computed(() => obj.age + 1)
    const upperCaseName = computed(() => obj.name.toUpperCase())

    // 同时设置computed的setter && getter
    const agePlus = computed({
      set(value) {
        obj.age = value - 1
      },
      get() {
        return obj.age + 1
      },
    })
    return {
      obj,
      age,
      upperCaseName,
      agePlus,
    }
  },
}
</script>

<style scoped lang="scss"></style>
