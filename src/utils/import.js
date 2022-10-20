import { defineAsyncComponent } from "vue";

export function regsiterGlobalComponent(app) {
  app.component(
    "auth-layout",
    defineAsyncComponent(() => import("@/layouts/auth-layout"))
  );
  app.component(
    "default-layout",
    defineAsyncComponent(() => import("@/layouts/default-layout"))
  );
  app.component(
    "404-layout",
    defineAsyncComponent(() => import("@/layouts/404-layout"))
  );
}
