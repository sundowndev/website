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
      >, pen testing, DevSecOps tools, cloud-native applications, Kubernetes and
      Golang. I love helping saving other developers' time. Most of the software
      I build are made for developers so I try to create great developer
      experiences by using my own experience as a software engineer.
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
      Yes! I'm open to receive freelance missions. I'm currently operating on
      [Malt](https://www.malt.fr/profile/raphaelcerveaux), which is a french marketplace for freelancers.
      If you're interested into donating or sponsoring me, refer to
      <router-link :to="{ name: 'sponsors' }">the sponsoring page</router-link>.
    </p>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import config from "../config";
import ReturnLink from "@/components/return-link.vue";

export default Vue.extend({
  components: { ReturnLink },
  data() {
    return {
      config
    };
  }
});
</script>
