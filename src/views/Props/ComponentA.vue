<template>
  <div class="component-a">
    {{ count }}
  </div>
</template>

<script>
export default {
  name: 'Component-A',
  props: {
    count: {
      type: [String, Number],
    },
  },
  setup(props, setup) {
    console.log(props)
    console.log(setup)
  },
}
</script>

<style scoped lang="scss"></style>
