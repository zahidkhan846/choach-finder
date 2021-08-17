import axios from "../../config/axiosConfig.js";

export default {
  namespaced: true,
  state() {
    return {
      allCoaches: [],
      coachErrors: null,
    };
  },
  mutations: {
    addCoach(state, payload) {
      state.allCoaches.push(payload);
    },
    setCoaches(state, payload) {
      state.allCoaches = payload;
    },
    setError(state, payload) {
      state.coachErrors = payload;
    },
  },
  getters: {
    allCoaches(state) {
      return state.allCoaches;
    },
    hasCoaches(state) {
      return state.allCoaches && state.allCoaches.length > 0;
    },
    allErrors(state) {
      return state.coachErrors;
    },
  },
  actions: {
    async addCoach(context, payload) {
      const newCoach = {
        firstName: payload.firstName,
        lastName: payload.lastName,
        description: payload.description,
        areas: payload.areas,
        hourlyRate: payload.hourlyRate,
      };

      try {
        const res = await axios.post("/create-coache", newCoach);
        if (res.status === 201) {
          context.commit("addCoach", res.data);
        }
      } catch (error) {
        context.commit("setError", error.response);
      }
    },
    async fetchAllCoaches(context) {
      try {
        const res = await axios.get("/all-coaches");
        context.commit("setCoaches", res.data);
      } catch (error) {
        context.commit("setError", error.response);
      }
    },
  },
};
