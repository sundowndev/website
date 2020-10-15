<template>
  <section class="section text-center">
    <img src="../static/error.gif" alt />
    <p>
      <router-link :to="{ name: 'home' }" id="back-link"
        >Take me home, cause I don't remember</router-link
      >
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
