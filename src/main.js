import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import path from "path";
let routerFlod = require.context("./store/", true, /\.js$/).keys();
routerFlod.map((file) => {
  let name = path.basename(file, ".js");
  console.log(name);
});
console.log(require.context("./store/", true, /\.js$/).keys());
createApp(App)
  .use(router)
  .use(store)
  .mount("#app");
