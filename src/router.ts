import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/search",
      name: "search",
      component: () => import("./views/SearchPage.vue"),
    },
    {
      path: "/icons/:group",
      name: "icon-group",
      component: () => import("./views/IconGroupPage.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0, behavior: "smooth" };
  },
});

export default router;
