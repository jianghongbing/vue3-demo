<template>
  <header>
    {{ title }}
  </header>
</template>

<script>
export default {
  name: 'v3-header',
  props: {
    // title: {
    //   type: String,
    //   default: 'Vue3',
    // },
  },
  computed: {
    title() {
      return this.$route.name || 'Vue3'
    },
  },
}
</script>

<style scoped lang="scss">
@import '@/scss/variables.scss';
header {
  position: sticky;
  height: 40px;
  background: $bg1;
  color: $tc4;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: $fw600;
}
</style>
