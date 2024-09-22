import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Articles from "@/views/ArticlesView.vue";
import Work from "@/views/WorkView.vue";
import Links from "@/views/LinksView.vue";
import NotFound from "@/views/NotFound.vue";
import Contact from "@/views/ContactView.vue";
import Sponsors from "@/views/SponsorsView.vue";
import Filmmaking from "@/views/FilmmakingView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/writeups", name: "articles", component: Articles },
    { path: "/work", name: "work", component: Work },
    { path: "/filmmaking", name: "fpv", component: Filmmaking },
    { path: "/links", name: "links", component: Links },
    { path: "/sponsors", name: "sponsors", component: Sponsors },
    { path: "/contact", name: "contact", component: Contact },
    { path: "/:pathMatch(.*)*", component: NotFound },

    // Handle legacy paths
    { path: "/articles", redirect: "/writeups" },
    { path: "/resources", redirect: "/links" },
    { path: "/fpv", redirect: "/filmmaking" },
  ],
});

export default router;
