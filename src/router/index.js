import { createRouter, createWebHistory } from "vue-router";
import auth from "./auth";

import admin from "./admin";

import notfound from "./notfound";
import nProgress from "nprogress";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [auth, admin, notfound],
});
router.beforeResolve((to, from, next) => {
  nProgress.start();
  next();
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const name = to.name === "auth";

  if (!token && !name) {
    return next({ name: "auth" });
  } else {
    if (token && name) {
      if (role === "Admin") {
        return next({ name: "product" });
      }
    } else {
      next();
    }
  }
});

router.afterEach(() => {
  nProgress.done();
});

export default router;
