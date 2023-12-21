<script lang="ts">
import config from '../config'
import ReturnLink from '@/components/ReturnLink.vue'

export default {
  components: { ReturnLink },
  data() {
    return {
      config,
      email: 'raphael.at.crvx.fr'
    }
  }
}
</script>

<template>
  <section class="section">
    <ReturnLink />
    <h1 class="title-section">Contact</h1>

    <h2>Social media</h2>
    <p>
      I'm not really into social media but you can find me on
      <a :href="config.links.social.linkedin" target="_blank">LinkedIn</a>.
    </p>

    <h2>Email</h2>
    <p>
      {{ email }} --
      <a href="/raphael@crvx.fr.gpg">🔑 PGP PUBLIC KEY</a>
    </p>
  </section>
</template>
