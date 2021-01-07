import { createApp } from "vue";
import App from "./App";
import router from "./router";
import store, { key } from "./store";
import "./index.scss";

const app = createApp(App);
app.use(store, key).use(router).mount("#app");
