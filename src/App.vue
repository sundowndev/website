<template>
  <div id="app">
    <router-link to="/" exact>Home</router-link>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  components: {}
});
</script>


<style>
@font-face {
  font-family: "hack-regular";
  src: url("./static/fonts/Hack-Regular.ttf");
}

body {
  font-family: "hack-regular";
}
</style>
