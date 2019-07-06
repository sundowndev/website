<template>
  <div>
    <div class="container main-content fade-in" style="opacity:1;">
      <section class="section text-center">
        <img :src="links.avatar" width="128" height="auto" alt />

        <h1 class="title-section">
          Raphael
          <a href="#" target="_blank">@sundowndev</a>
        </h1>

        <p>Web developer</p>

        <ul>
          <li>
            <router-link to="/articles">Write-ups</router-link>
          </li>
          <li>
            <a :href="links.github" target="_blank">GitHub</a>
          </li>
          <li>
            <router-link to="/resources">Resources</router-link>
          </li>
          <li>
            <router-link to="/stats">Stats</router-link>
          </li>
          <li>
            <router-link to="/contact">Contact</router-link>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      links: {
        avatar:
          "https://pbs.twimg.com/profile_images/1079098642395484160/w60smTHG_400x400.jpg",
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
  border-radius: 100px;
}

ul li {
  display: inline-block;
}

ul li a {
  margin: 0 20px;
}
</style>
