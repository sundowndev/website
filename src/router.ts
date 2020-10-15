import Vue from "vue";
import VueRouter from "vue-router";

// Views
import Articles from "./views/articles.vue";
import Contact from "./views/contact.vue";
import Home from "./views/home.vue";
import NotFound from "./views/notFound.vue";
import Resources from "./views/resources.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/articles", name: "articles", component: Articles },
  { path: "/resources", name: "resources", component: Resources },
  { path: "/contact", name: "contact", component: Contact },
  {
    path: "/notfound",
    name: "not_found",
    component: NotFound
  },
  {
    path: "*",
    redirect: "/notfound"
  }
];

export default new VueRouter({ mode: "history", routes });
