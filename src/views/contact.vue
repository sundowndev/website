<template>
  <div class="container main-content fade-in" style="opacity:1;">
    <section class="section">
      <router-link :to="{ name: 'home'}" id="back-link">Back</router-link>
      <h1 class="title-section">Contact</h1>

      <h2>Social media</h2>
      <p>
        You can find me on
        <a :href="links.twitter" target="_blank">Twitter</a> and
        <a :href="links.linkedin" target="_blank">Linkedin</a>.
      </p>

      <h2>Email</h2>
      <p>
        {{email}} -- 0x67da650228bcbfe8 --
        <a href="./public/publickey.asc">PUBLIC KEY</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      email: "<raphael.at.crvx.fr>",
      links: {
        twitter: "https://pbs.twimg.com/",
        linkedin: "https://pbs.twimg.com/"
      }
    };
  }
});
</script>

<style>
</style>
