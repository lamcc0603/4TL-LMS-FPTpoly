import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/components/AboutView.vue";
import LoginView from "@/components/LoginView.vue";
import CourseView from "@/components/CourseView.vue";
import HomeView from "@/components/HomeView.vue";

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
