import Vue from "vue";
import App from "./App.vue";
import router from "./router";

export default new Vue({
  router,
  render: (h: any) => h(App)
}).$mount("#app");
