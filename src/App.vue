<script setup lang="ts">
import { RouterView } from "vue-router";
import config from "@/config";
</script>

<script lang="ts">
export default {
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    toggleDarkMode() {
      this.darkMode = document.querySelector("body").classList.toggle("dark");
    },
  },
  created() {
    if (
      this.darkMode !==
      document.querySelector("body").classList.contains("dark")
    ) {
      this.toggleDarkMode();
    }
  },
};
</script>

<template>
  <div id="top-mode-btn">
    <span v-if="darkMode" @click="toggleDarkMode">light mode</span>
    <span v-else @click="toggleDarkMode">dark mode</span>
  </div>
  <div class="container main-content">
    <RouterView v-slot="{ Component }">
      <Transition mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>

    <span id="bottom-note">
      <a :href="config.repository" target="_blank">
        <img src="./assets/fork-banner.png" alt="" />
      </a>
    </span>
  </div>
</template>

<style scoped>
#bottom-note {
  right: 0;
  position: fixed;
  top: 0;
  width: 149px;
}

#bottom-note img {
  width: 100%;
  height: auto;
}

#bottom-note a {
  width: 100%;
  height: auto;
  border-bottom: none;
}
</style>
