import { createRouter, createWebHistory } from "vue-router";

import AllCoaches from "../views/Coaches/AllCoaches.vue";
import SingleCoach from "../views/Coaches/SingleCoach.vue";
import RegisterCoach from "../views/Coaches/Register.vue";
import Login from "../components/Auth/Login.vue";
import Register from "../components/Auth/Register.vue";

import ContactCoach from "../views/Requests/ContactCoach.vue";
import ReceivedRequests from "../views/Requests/ReceivedRequests.vue";

import NotFound from "../views/NotFound.vue";

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
    { path: "/register", component: RegisterCoach },
    { path: "/login", component: Login },
    { path: "/register-user", component: Register },
    { path: "/requests", component: ReceivedRequests },
    { path: "/:notFount(.*)", component: NotFound },
  ],
});
