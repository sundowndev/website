<template>
  <div class="container main-content fade-in" style="opacity:1;">
    <section class="section text-center">
      <img src="../static/avatar.jpg" width="128" height="auto" alt />

      <h1 class="title-section">
        Raphael
        <a :href="links.twitter" target="_blank">@sundowndev</a>
      </h1>

      <p>Web development, Security and OSINT.</p>

      <ul>
        <li>
          <router-link :to="{ name: 'articles'}">Write-ups</router-link>
        </li>
        <li>
          <a :href="links.github" target="_blank">GitHub</a>
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

export default Vue.extend({
  data() {
    return {
      links: {
        twitter: "https://twitter.com/sundowndev",
        github: "https://github.com/sundowndev"
      }
    };
  },
  methods: {},
  computed: {}
});
</script>

<style>
.section.text-center {
  text-align: center;
}

.section img {
  border-radius: 130px;
  margin-bottom: 30px;
}

ul li {
  display: inline-block;
}

ul li a {
  margin: 0 20px;
}
</style>
