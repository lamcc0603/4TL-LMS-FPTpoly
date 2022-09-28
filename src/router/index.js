import { createRouter, createWebHistory } from "vue-router";

// About
import AboutView from "@/pages/About/AboutView.vue";

// Login
import LoginView from "@/components/LoginView.vue";

// Course
import CourseView from "@/pages/Course/CourseView.vue";

// Home
import HomeView from "@/pages/Home/HomeView.vue";

// Chat
import ClientChat from "@/components/Chat/ClientChat.vue";

// Quiz
import QuizDetail from "@/components/QuizDetail.vue";

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
    path: "/chat",
    name: "chat",
    component: ClientChat,
  },
  {
    path: "/quiz",
    name: "quiz",
    component: QuizDetail,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
