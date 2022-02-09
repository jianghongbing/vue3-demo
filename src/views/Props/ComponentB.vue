<template>
  <div class="component-b" @click="handleClick">{{ count }}</div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'
const props = defineProps({
  count: {
    type: Number,
  },
})
const emits = defineEmits(['click'])
const handleClick = () => {
  const count = props.count + 1
  emits('click', count)
}
console.log(props)
console.log(emits);
</script>

<style lang="scss" scoped>
.component-b {
  border: 1px solid salmon;
}
</style>
