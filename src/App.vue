<template>
  <v3-header></v3-header>
  <router-view />
</template>

<script>
import V3Header from "./components/v3-header";
export default {
  name: "v3-app",
  components: {
    [V3Header.name]: V3Header,
  },
};
</script>
