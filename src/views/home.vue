<template>
  <div class="container main-content fade-in" style="opacity:1;">
    <section class="section text-center">
      <img src="../static/avatar.jpg" class="rounded" width="128" height="auto" alt />

      <h1 class="title-section">
        Raphael
        <a :href="config.links.social.twitter" target="_blank">@sundowndev</a>
      </h1>

      <p>Web development, Security and OSINT.</p>

      <ul>
        <li>
          <router-link :to="{ name: 'articles'}">Write-ups</router-link>
        </li>
        <li>
          <a :href="config.links.social.github" target="_blank">GitHub</a>
        </li>
        <li>
          <router-link :to="{ name: 'resources'}">Resources</router-link>
        </li>
        <!-- <li>
            <router-link :to="{ name: 'stats' }">Stats</router-link>
        </li>-->
        <li>
          <router-link :to="{ name: 'contact' }">Contact</router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";

export default Vue.extend({
  data() {
    return {
      config
    };
  },
  methods: {},
  computed: {}
});
</script>

<style>
ul li {
  display: inline-block;
}

ul li a {
  margin: 0 20px;
}
</style>
