import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Articles from "./views/articles.vue";
import Work from "./views/work.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import NotFound from "./views/404.vue";
import Links from "./views/links.vue";
import Sponsors from "./views/sponsors.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/writeups", name: "articles", component: Articles },
  { path: "/work", name: "work", component: Work },
  { path: "/links", name: "links", component: Links },
  { path: "/sponsors", name: "sponsors", component: Sponsors },
  { path: "/contact", name: "contact", component: Contact },
  { path: "*", component: NotFound },

  // Handle legacy paths
  { path: "/articles", redirect: "/writeups" },
  { path: "/resources", redirect: "/links" }
];

export default new VueRouter({ mode: "history", routes });
