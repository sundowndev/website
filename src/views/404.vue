<template>
  <section class="section text-center">
    <div><img src="../static/error.gif" alt /></div>
    <p>
      <router-link :to="{ name: 'home' }">Take me home, please</router-link>
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  }
});
</script>

<style></style>
