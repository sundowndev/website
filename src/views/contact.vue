<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      I'm not really into social media but you can find me on
      <a :href="config.links.social.twitter" target="_blank">Twitter</a> and
      <a :href="config.links.social.linkedin" target="_blank">Linkedin</a>.
    </p>

    <h2>Email</h2>
    <p>
      {{ email }} --
      <a href="./publickey.asc">PGP PUBLIC KEY</a>
    </p>

    <h2>Are you available for hire ?</h2>
    <p>
      I'm currently working full-time on open source so I'm not actively looking
      for a job. But I still work on freelance missions on my free time. Just
      send me an email with details and you should get a quick feedback from me.
    </p>
  </section>
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
