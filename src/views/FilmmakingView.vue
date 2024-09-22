<script lang="ts">
import ReturnLink from "@/components/ReturnLink.vue";

export default {
  components: { ReturnLink },
  data() {
    return {};
  },
};
</script>

<template>
  <section class="section">
    <ReturnLink />
    <h1 class="title-section">Filmmaking and FPV drones</h1>

    <p>
      In 2023 I put my engineering career on stand-by to learn to fly drones and
      editing videos. This new hobby allowed me to try something new and create
      content while travelling. FPV (First Person View) drones are hand-crafted
      drones designed mainly for racing. They're also commonly used in the
      industry of filmmaking to make creative aerial shots. During this year, I
      learned a lot about video editing, color grading, and sound design.
    </p>

    <p>
      I'm willing to pursue my software engineering career while continuing to
      learn about drone engineering and flying.
    </p>

    <p>
      My content is available on
      <a href="https://www.youtube.com/@flyingmonkeyfilmsoff" target="_blank"
        >YouTube</a
      >
      and
      <a href="https://www.instagram.com/flyingmonkeyfilms" target="_blank"
        >Instagram</a
      >.
    </p>

    <p>
      <strong>Have a job opportunity in filmmaking for me ? </strong>
      <RouterLink :to="{ name: 'contact' }">Get in touch !</RouterLink>
    </p>

    <h2 class="margin-top-30">MMA gym showreel (2024)</h2>
    <p>Small presentation clip for my MMA gym.</p>
    <div class="videoWrapper">
      <iframe
        src="https://www.youtube-nocookie.com/embed/Rb79TZ4DTP4"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>

    <h2 class="margin-top-30">Showreel 2023</h2>

    <p>
      Here's my 2023 showreel showing up my best drone shots of the year in
      Reunion Island and Australia.
    </p>

    <div class="videoWrapper">
      <iframe
        src="https://www.youtube-nocookie.com/embed/QSTqfadYtgg"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
ul li a {
  margin: 0 20px 0 0;
  line-height: 30px;
}

.videoWrapper {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
}

.videoWrapper iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
