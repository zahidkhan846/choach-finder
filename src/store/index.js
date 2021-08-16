import { createStore } from "vuex";

import coaches from "./coaches/index.js";
import requests from "./requests/index.js";

export const store = createStore({
  modules: {
    coaches,
    requests,
  },
  state() {
    return {
      isAuthenticated: true,
      currentUser: {
        id: 1,
        email: "zahid.khan846@hotmail.com",
      },
    };
  },
  mutations: {},
  getters: {
    currentUser(state) {
      return state.currentUser;
    },
  },
  actions: {},
});
