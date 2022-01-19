<template>
  <div class="compouted">
    <span>name:{{ obj.name }}</span>
    <br />
    <span>upperCaseName: {{ upperCaseName }}</span>
    <br />
    <button @click="obj.age++">increase age</button>
    <span>{{ age }}</span>
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
    const age = computed(() => obj.age + 1)
    const upperCaseName = computed(() => obj.name.toUpperCase())
    return {
      obj,
      age,
      upperCaseName,
    }
  },
}
</script>

<style scoped lang="scss"></style>
