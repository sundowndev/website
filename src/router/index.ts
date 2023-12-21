import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Articles from "@/views/ArticlesView.vue";
import Work from "@/views/WorkView.vue";
import Links from "@/views/LinksView.vue";
import NotFound from "@/views/NotFound.vue";
import Contact from "@/views/ContactView.vue";
import Sponsors from "@/views/SponsorsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/writeups", name: "articles", component: Articles },
    { path: "/work", name: "work", component: Work },
    { path: "/links", name: "links", component: Links },
    { path: "/sponsors", name: "sponsors", component: Sponsors },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/:pathMatch(.*)*", component: NotFound },

    // Handle legacy paths
    { path: "/articles", redirect: "/writeups" },
    { path: "/resources", redirect: "/links" },
  ],
});

export default router;
