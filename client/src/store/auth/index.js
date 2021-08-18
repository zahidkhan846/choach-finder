import axios from "../../config/axiosConfig.js";
import jwt_decode from "jwt-decode";

export default {
  state() {
    return {
      isAuthenticated: false,
      currentUser: {},
      errors: {},
    };
  },
  getters: {
    currentUser(state) {
      return state.currentUser;
    },
    userErrors(state) {
      return state.errors;
    },
    isAuthenticated(state) {
      return state.isAuthenticated;
    },
    isCoach(state) {
      return !!state.currentUser.coachId;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.currentUser = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setErrors(state, payload) {
      state.errors = payload;
    },
    logoutUser(state) {
      state.isAuthenticated = false;
      state.currentUser = {};
      state.errors = {};
    },
  },
  actions: {
    async signUpAction(context, payload) {
      try {
        await axios.post("/create-user", payload);
      } catch (error) {
        context.commit("setErrors", error.response.data);
      }
    },
    async signInAction(context, payload) {
      try {
        const res = await axios.post("/login-user", payload);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.id);
        context.commit("setUser", res.data);
      } catch (error) {
        context.commit("setErrors", error.response.data);
      }
    },
    logoutAction(context) {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      context.commit("logoutUser");
    },
    async isUserLoggedIn(context) {
      const token = localStorage.getItem("token");
      if (!token) return;
      const { exp: expiresIn } = jwt_decode(token);
      const expirationTime = new Date(expiresIn * 1000);
      const currentTime = new Date();
      if (currentTime > expirationTime) {
        context.dispatch("logoutAction");
        return;
      }
      context.commit("setIsAuthenticated", true);
      try {
        const res = await axios.post("/current-user", { token });
        console.log(res.data);
        context.commit("setUser", res.data);
      } catch (error) {
        context.commit("setErrors", error.response.data);
      }
    },
  },
};
