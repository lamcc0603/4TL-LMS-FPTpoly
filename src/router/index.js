import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import LoginView from "@/views/LoginView.vue";
import CourseView from "@/views/CourseView.vue";
import HomeView from "@/components/HomeView.vue";

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
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/course",
    name: "course",
    component: CourseView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
