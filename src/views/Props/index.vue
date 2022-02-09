<template>
  <div class="props">
    <component-a :count="count" />
    <component-b :count="count" @click="handleBClick" />
  </div>
</template>

<script>
import ComponentA from './ComponentA.vue'
import ComponentB from './ComponentB.vue'
import { ref } from 'vue'
export default {
  name: 'v3-props',
  components: { ComponentA, ComponentB },
  methods: {
    handleBClick(count) {
      console.log(count)
      this.count = count
    },
  },
  setup() {
    const count = ref(10)
    return {
      count,
    }
  },
}
</script>

<style scoped lang="scss"></style>
