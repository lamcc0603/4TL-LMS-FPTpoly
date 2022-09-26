import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/components/HomeView.vue";
import AboutView from "@/components/AboutView.vue";
import CourseView from "@/components/CourseView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/course",
    name: "course",
    component: CourseView,
  },
  {
    path: "/about",
    name: "about",
    meta: {
      layout: "auth",
    },
    component: AboutView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
