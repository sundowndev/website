<template>
  <section class="section">
    <router-link :to="{ name: 'home' }" id="back-link">Back</router-link>
    <h1 class="title-section">Sponsors</h1>

    <p>
      I'm an independent full-time software engineer. My ultimate goal is to
      make a living out of Open Source. So if you would like to support my
      future work, consider joining me as a sponsor!
    </p>

    <h2>GitHub Sponsors</h2>
    <p>
      The most effective way to support me is to become a sponsor on GitHub.
      This way, I can spend more and more time on open source projects. Starting
      at 5$ monthly or one-time, choose the amount you like, cancel at any time.
    </p>

    <p>
      <a href="https://github.com/sponsors/sundowndev/" target="_blank"
        >Become a sponsor now!</a
      >
    </p>

    <div v-if="sponsors.length">
      <h3>Current sponsors</h3>
      <div
        v-for="{ sponsor } in sponsors"
        v-bind:key="sponsor.login"
        class="sponsor-badge"
      >
        <a :href="`https://github.com/${sponsor.login}`" target="_blank"
          ><img :src="sponsor.avatarUrlMediumRes" alt=""
        /></a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

interface Sponsor {
  sponsor: {
    login: string;
    name?: string;
    avatarUrl: string;
    type: string;
    avatarUrlHighRes: string;
    avatarUrlMediumRes: string;
    avatarUrlLowRes: string;
  };
  isOneTime: boolean;
  monthlyDollars: number;
  privacyLevel: string;
  tierName: string;
  createdAt: string;
  provider: string;
}

export default Vue.extend({
  data() {
    return {
      sponsors: [] as Sponsor[]
    };
  },
  async created() {
    this.sponsors = await this.fetchSponsors();
  },
  methods: {
    async fetchSponsors(): Promise<Sponsor[]> {
      const res = await this.$http.get(
        "https://raw.githubusercontent.com/sundowndev/static/main/sponsors.json"
      );
      return res.json();
    }
  }
});
</script>

<style>
.loading-text {
  font-style: italic;
  font-size: 14px;
}

.sponsor-badge {
  margin: 10px;
  display: inline-block;
}
.sponsor-badge img {
  width: 64px;
  height: 64px;
  border-radius: 30px;
}

.sponsor-badge a {
  border: none;
}
</style>
