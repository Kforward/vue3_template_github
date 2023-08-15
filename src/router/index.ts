import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Layout from "@/layout/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: '/home',
      component: Layout,
      children: [{
        path: '/home',
        name: 'Home',
        component: HomeView
      },{
        path: '/about',
        name: 'About',
        component: () => import("../views/AboutView.vue"),
      }, {
        path: "/other",
        name: "other",
        component: () => import("../views/OtherView.vue"),
      }]
    },
  ],
});

export default router;
