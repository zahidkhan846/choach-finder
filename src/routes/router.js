import { createRouter, createWebHistory } from "vue-router";

import AllCoaches from "../views/Coaches/AllCoaches.vue";
import SingleCoach from "../views/Coaches/SingleCoach.vue";
import Register from "../views/Coaches/Register.vue";
import Login from "../components/Auth/Login.vue";

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
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/requests", component: ReceivedRequests },
    { path: "/:notFount(.*)", component: NotFound },
  ],
});
