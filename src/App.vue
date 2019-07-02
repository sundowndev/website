<template>
  <div>
    Name:
    <input v-model="name" type="text">
    <hello-component :name="name" :initialEnthusiasm="5"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

import HelloComponent from "./components/Hello.vue";

export default Vue.extend({
  data() {
    return {
      name: "John"
    };
  },
  components: {
    HelloComponent
  }
});
</script>
