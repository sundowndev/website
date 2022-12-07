import Vue, { CreateElement } from "vue";
import App from "./App.vue";
import router from "./router";
import VueResource from "vue-resource";

Vue.use(VueResource);

export default new Vue({
  router,
  render: (h: CreateElement) => h(App)
}).$mount("#app");
