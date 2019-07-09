<template>
  <div class="container main-content fade-in" style="opacity:1;">
    <section class="section">
      <router-link :to="{ name: 'home'}" id="back-link">Back</router-link>
      <h1 class="title-section">Contact</h1>

      <h2>Social media</h2>
      <p>
        You can find me on
        <a :href="config.links.social.twitter" target="_blank">Twitter</a> and
        <a :href="config.links.social.linkedin" target="_blank">Linkedin</a>.
      </p>

      <h2>Email</h2>
      <p>
        {{ email }} -- 0x67da650228bcbfe8 --
        <a href="./publickey.asc">PUBLIC KEY</a>
      </p>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";

export default Vue.extend({
  data() {
    return {
      config,
      email: "<raphael.at.crvx.fr>"
    };
  }
});
</script>

<style>
</style>
