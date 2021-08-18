import { createRouter, createWebHistory } from "vue-router";

import AllCoaches from "../views/Coaches/AllCoaches.vue";
import SingleCoach from "../views/Coaches/SingleCoach.vue";
import RegisterCoach from "../views/Coaches/Register.vue";
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";

import ContactCoach from "../views/Requests/ContactCoach.vue";
import ReceivedRequests from "../views/Requests/ReceivedRequests.vue";

import NotFound from "../views/NotFound.vue";

import { store } from "../store/index.js";

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/coaches" },
    { path: "/coaches", component: AllCoaches },
    {
      path: "/coaches/:id",
      component: SingleCoach,
      props: true,
      children: [{ path: "contact", component: ContactCoach }],
    },
    {
      path: "/register-coach",
      component: RegisterCoach,
      meta: { auth: true },
    },
    { path: "/login", component: Login, meta: { unAuth: true } },
    { path: "/register-user", component: Register, meta: { unAuth: true } },
    { path: "/requests", component: ReceivedRequests, meta: { auth: true } },
    { path: "/:notFount(.*)", component: NotFound },
  ],
});

router.beforeEach((to, _, next) => {
  if (to.meta.auth && !store.getters.isAuthenticated) {
    next("/login");
  } else if (to.meta.unAuth && store.getters.isAuthenticated) {
    next("/coaches");
  } else {
    next();
  }
});
