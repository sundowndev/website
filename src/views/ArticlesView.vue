<script lang="ts">
import config from "../config";
import ReturnLink from "@/components/ReturnLink.vue";
import type { Link } from "@/types";

const articles: Link[] = [
  {
    title:
      "🇫🇷 Whitepaper: Is Tomorrow's YouTube Libre ? A dive into the video streaming industry",
    url: "https://sundowndev.github.io/livre-blanc-video",
  },
  {
    title: "🇬🇧 Building an OSINT Reconnaissance Tool from Scratch",
    url: "https://medium.com/@SundownDEV/phone-number-scanning-osint-recon-tool-6ad8f0cac27b",
  },
  {
    title: "🇬🇧 How importants are HTTP security headers ?",
    url: "https://medium.com/@SundownDEV/how-important-are-http-security-headers-ad511848eb95",
  },
];

export default {
  components: { ReturnLink },
  data() {
    return {
      config,
      articles,
    };
  },
};
</script>

<template>
  <section class="section">
    <ReturnLink />
    <h1 class="title-section">Write-ups</h1>

    <p>
      You can follow my stories on
      <a :href="config.links.social.medium">Medium</a>.
    </p>

    <h2>Highlights</h2>

    <ul class="list">
      <li v-for="(item, index) in articles" :key="index">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </section>
</template>

<style scoped>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
