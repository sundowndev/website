<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Write-ups</h1>

    <p>
      You can follow my stories on
      <a :href="config.links.social.medium">Medium</a>.
    </p>

    <ul class="list">
      <li v-for="(item, index) in articles" :key="index">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";
import { Link } from "../types";

const articles: Link[] = [
  {
    title:
      "Is Tomorrow's YouTube Libre ? A dive into the video streaming industry (french whitepaper)",
    url: "https://sundowndev.github.io/livre-blanc-video"
  },
  {
    title: "Building an OSINT Reconnaissance Tool from Scratch",
    url:
      "https://medium.com/@SundownDEV/phone-number-scanning-osint-recon-tool-6ad8f0cac27b"
  },
  {
    title: "How importants are HTTP security headers ?",
    url:
      "https://medium.com/@SundownDEV/how-important-are-http-security-headers-ad511848eb95"
  }
];

export default Vue.extend({
  data() {
    return {
      config,
      articles
    };
  }
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
