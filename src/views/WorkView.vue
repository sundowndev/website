<script lang="ts">
import config from "../config";
import ReturnLink from "@/components/ReturnLink.vue";

export default {
  components: { ReturnLink },
  data() {
    return {
      config,
    };
  },
};
</script>

<template>
  <section class="section">
    <ReturnLink />
    <h1 class="title-section">Work</h1>

    <p>
      I'm highly involved into open source software and willing to make a living
      out of it. My interests are into
      <a
        href="https://en.wikipedia.org/wiki/Open-source_intelligence"
        target="_blank"
        >OSINT</a
      >, penetration testing, DevSecOps, cloud-native concepts, Kubernetes and
      Golang. Despite my interest for technical topics, I love working on
      impactful and meaningful products. What matters to me is providing value
      to people and industries through high quality software design.
    </p>

    <h2>Code</h2>
    <p>
      Most of my code is hosted on
      <a :href="config.links.social.github" target="_blank">GitHub</a>, but I
      also have a
      <a :href="config.links.social.gitlab" target="_blank">GitLab</a> account
      mostly used for mirroring projects.
    </p>

    <p>
      Package releases are usually signed with this common
      <a href="/packages.crvx.fr.gpg" target="_blank">🔑 PGP key</a>. This is
      the only purpose of this key.
    </p>

    <h2>Are you available for hire ?</h2>
    <p>
      Yes! I'm willing to relocate or work in remote. If you have an opportunity
      you think would suit my profile, please
      <router-link :to="{ name: 'contact' }">reach out</router-link>. I'd be
      happy to share my resume privately.
    </p>
    <p>
      If you're interested into donating or sponsoring me, refer to
      <router-link :to="{ name: 'sponsors' }">the sponsoring page</router-link>.
    </p>
  </section>
</template>
