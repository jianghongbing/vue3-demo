<template>
  <ul class="home">
    <li v-for="(item, index) in routeList" :key="index">
      <router-link :to="item.path" class="link">
        <span>{{ item.title }}</span>
        <van-icon name="arrow" class="icon" />
      </router-link>
    </li>
  </ul>
</template>

<script>
import { Icon, Button } from 'vant'
export default {
  name: 'v3-home',
  components: {
    [Icon.name]: Icon,
    [Button.name]: Button,
  },
  data() {
    return {
      routeList: [
        {
          title: 'setup',
          path: '/setup',
        },
        {
          title: 'reactive',
          path: '/reactive',
        },
        {
          title: 'refs',
          path: '/refs',
        },
        {
          title: 'computed',
          path: '/computed',
        },
        {
          title: 'watch',
          path: '/watch',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
.home {
  li:not(:last-child) {
    border-bottom: 1px solid #888;
  }
  .link {
    height: 40px;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: #444;
  }
  .icon {
    font-weight: bolder;
    font-size: 16px;
  }
}
</style>
