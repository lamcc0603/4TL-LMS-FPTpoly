import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import global from "./assets/styles/global.scss";

import { regsiterGlobalComponent } from "./utils/import";

const app = createApp(App);
regsiterGlobalComponent(app);
app.use(global);
app.use(store);
app.use(router);
app.mount("#app");
