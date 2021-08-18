import { createStore } from "vuex";

import coaches from "./coaches/index.js";
import requests from "./requests/index.js";
import auth from "./auth/index.js";

export const store = createStore({
  modules: {
    coaches,
    requests,
    auth,
  },
});
