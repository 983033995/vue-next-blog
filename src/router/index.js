import { createRouter, createWebHistory } from "vue-router";
import routes from "./router";
console.log("process", process.env.BASE_URL);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
