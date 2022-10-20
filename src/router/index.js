import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      auth: true,
    },
    component: () => import("@/pages/Home/HomeView.vue"),
  },
  {
    path: "/home",
    name: "home",
    meta: {
      auth: true,
    },
    component: () => import("@/pages/Home/HomeView.vue"),
  },
  {
    path: "/class/:pathMatch(.*)*",
    name: "class",
    meta: {
      auth: true,
    },
    component: () => import("@/pages/Class/ClassView.vue"),
  },
  {
    path: "/course",
    name: "course",
    meta: {
      auth: true,
    },
    children: [
      {
        name: `course`,
        path: ":id",
        component: () => import("@/pages/Course/CourseView.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "about",
    meta: {
      layout: "auth",
      auth: true,
    },
    component: () => import("@/pages/About/AboutView.vue"),
  },
  {
    path: "/login",
    name: " Xác thực người dùng",
    meta: {
      layout: "auth",
      auth: false,
    },

    component: () => import("@/components/LoginView.vue"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: {
      auth: true,
    },
    component: () => import("@/pages/Chat/ClientChat.vue"),
  },
  {
    path: "/quiz",
    name: "quiz",
    meta: {
      auth: true,
    },
    component: () => import("@/components/Quiz/QuizDetailView.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    meta: {
      layout: "404",
    },
    component: () => import("@/pages/NotFound/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  document.title = `4tl-${!to.name ? "Trang chủ" : to.name}`;
});

export default router;
