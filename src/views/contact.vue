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
      Yes! I'm looking for a remote job as a Go developer. I'm currently still
      junior, with over 2 years of experience but with strong skills in
      automation and software design. I have some skills in reverse engineering
      and web scraping. I also have some experience with Kubernetes and IaC (<a
        href="https://github.com/sundowndev/website/tree/master/.deploy"
        target="_blank"
        >this website is actually backed by k8s</a
      >).
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
