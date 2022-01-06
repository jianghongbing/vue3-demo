<template>
  <div class="setup"></div>
</template>

<script>
export default {
  name: 'v3-setup',
  setup(props) {
    console.log('setup')
    console.log(`this:${this}`)
    console.log(props)
  },
}
</script>

<style scoped lang="scss"></style>
