<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Resources</h1>

    <p>Here, you can find a personal selection of awesome resources.</p>

    <h2>Privacy & security</h2>

    <ul class="list">
      <li v-for="(item, index) in links.privacy" :key="index">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>

    <h2>Open Source Intelligence</h2>

    <ul class="list">
      <li v-for="(item, index) in links.osint" :key="index">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>

    <h2>Others</h2>

    <ul class="list">
      <li v-for="(item, index) in links.others" :key="index">
        <a :href="item.url" target="_blank">{{ item.title }}</a>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import { Link } from "../types";

interface Resources {
  privacy: Link[];
  osint: Link[];
  others: Link[];
}

const links: Resources = {
  privacy: [
    {
      title: "Ethical Alternatives & Resources",
      url: "https://ethical.net/resources/"
    },
    {
      title: "Privacy Tools, by restoreprivacy",
      url: "https://restoreprivacy.com/privacy-tools/"
    },
    {
      title: "The Hacker News, the independent cybersecurity news source",
      url: "https://thehackernews.com/"
    },
    {
      title:
        "PrivacyTools provides services, tools and knowledge to protect your privacy",
      url: "https://www.privacytools.io/"
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
  ],
  others: [
    {
      title: "Rico's cheatsheets",
      url: "https://devhints.io/"
    },
    {
      title: "Devbreak, don't use bookmarks anymore",
      url: "http://devbreak.fr/"
    }
  ]
};

export default Vue.extend({
  data() {
    return { links };
  }
});
</script>

<style>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}
</style>
