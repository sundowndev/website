<template>
  <div>
    Name:
    <input v-model="name" type="text" />

    <div class="greeting">Hey {{ name }} {{ exclamationMarks }}</div>

    <button @click="decrement">-</button>
    <button @click="increment">+</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {
      name: "John",
      enthusiasm: 5
    };
  },
  methods: {
    increment() {
      this.enthusiasm++;
    },
    decrement() {
      if (this.enthusiasm > 1) {
        this.enthusiasm--;
      }
    }
  },
  computed: {
    exclamationMarks(): string {
      return Array(this.enthusiasm + 1).join("!");
    }
  }
});
</script>

<style>
.greeting {
  font-size: 20px;
}
</style>
