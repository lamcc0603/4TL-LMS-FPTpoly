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
    name: "login",
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
    component: () => import("@/layouts/404-layout.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to) => {
  document.title = `4tl-${!to.name ? "Trang chủ" : to.name}`;
});

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.getItem("authenticated") || false;
  const requiresAuth = to.matched.some((record) => record.meta.auth);

  if (requiresAuth && !isLogin) {
    next({ name: "login" });
  } else if (!requiresAuth && isLogin) next("/");
  else next();
});

export default router;
