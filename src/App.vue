<script setup lang="ts">
import { RouterView } from 'vue-router'
import config from '@/config'
</script>

<template>
  <div id="app" class="container main-content">
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