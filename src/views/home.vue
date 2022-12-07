<template>
  <section class="section text-center">
    <img
      src="../static/avatar.jpg"
      class="margin-bottom avatar"
      width="128"
      height="auto"
      alt
    />

    <h1 class="title-section">
      Raphaël Cerveaux
    </h1>

    <p>Hi, I'm a Software Engineer from Reunion Island 🇷🇪 🇫🇷</p>

    <ul>
      <li>
        <router-link :to="{ name: 'articles' }">Write-ups</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'work' }">Work</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'links' }">Links</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'sponsors' }">Sponsors</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";

export default Vue.extend({
  data() {
    return {
      config
    };
  }
});
</script>

<style>
ul li {
  display: inline-block;
}

ul li a {
  margin: 0 20px;
}

.avatar {
  border-radius: 50%;
}
</style>
