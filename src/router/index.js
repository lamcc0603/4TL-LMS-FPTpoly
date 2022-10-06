import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/Home/HomeView.vue"),
  },
  {
    path: "/class/:pathMatch(.*)*",
    name: "class",
    component: () => import("@/pages/Class/ClassView.vue"),
  },
  {
    path: "/course",
    name: "course",
    component: () => import("@/pages/Course/CourseView.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      layout: "auth",
    },
    component: () => import("@/pages/About/AboutView.vue"),
  },
  {
    path: "/login",
    name: "login",

    component: () => import("@/components/LoginView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    component: () => import("@/components/Chat/ClientChat.vue"),
  },
  {
    path: "/quiz",
    name: "quiz",
    component: () => import("@/components/Quiz/QuizDetailView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
