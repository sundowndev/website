<template>
  <section class="section">
    <router-link :to="{ name: 'home'}" id="back-link">Back</router-link>
    <h1 class="title-section">Resources</h1>

    <p>Here, you can find awesome resources related to web, security or OSINT in general.</p>

    <h1>General web resources</h1>

    <ul>
      <li v-for="(item, index) in links.web" :key="index">
        <h2>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </h2>
      </li>
    </ul>

    <h1>OSINT resources</h1>

    <ul>
      <li v-for="(item, index) in links.osint" :key="index">
        <h2>
          <a :href="item.url" target="_blank">{{ item.title }}</a>
        </h2>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      links: {
        web: [
          {
            title: "Rico's cheatsheets",
            url: "https://devhints.io/"
          },
          {
            title: "Devbreak, don't use bookmarks anymore",
            url: "http://devbreak.fr/"
          },
          {
            title: "Ethical Alternatives & Resources",
            url: "https://ethical.net/resources/"
          },
          {
            title: "Privacy Tools, by restoreprivacy",
            url: "https://restoreprivacy.com/privacy-tools/"
          },
          {
            title: "Developpez, the best of tech news in french",
            url: "https://www.developpez.com/"
          },
          {
            title: "The Hacker News, the independent cybersecurity news source",
            url: "https://thehackernews.com/"
          }
        ],
        osint: [
          {
            title: "OSINT resources board",
            url: "https://github.com/users/sundowndev/projects/3"
          },
          {
            title: "OSINT Collection",
            url: "https://github.com/Ph055a/OSINT-Collection"
          },
          {
            title: "IntelTechniques Resources",
            url: "https://inteltechniques.com/"
          },
          { title: "OSINTCurio.us", url: "https://osintcurio.us/" },
          {
            title: "Bellingcat, the home of online investigations",
            url: "https://www.bellingcat.com/"
          },
          {
            title: "OSINT STASH, a curated collection of free OSINT tools",
            url: "http://workinukraine.space/"
          }
        ]
      }
    };
  }
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
