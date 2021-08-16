import axios from "../../config/axiosConfig.js";

export default {
  namespaced: true,
  state() {
    return {
      allCoaches: [],
    };
  },
  mutations: {
    addCoach(state, payload) {
      state.allCoaches.push(payload);
    },
    setCoaches(state, payload) {
      state.allCoaches = payload;
    },
  },
  getters: {
    allCoaches(state) {
      return state.allCoaches;
    },
    hasCoaches(state) {
      return state.allCoaches && state.allCoaches.length > 0;
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
        const res = await axios.post("/coaches", newCoach);
        if (res.status === 201) {
          context.commit("addCoach", res.data);
        }
      } catch (error) {
        alert(error.response.status + " " + error.response.statusText);
      }
    },
    async fetchAllCoaches(context) {
      try {
        const res = await axios.get("/coaches");
        context.commit("setCoaches", res.data);
      } catch (error) {
        throw new Error(
          error.response.statusText + " " + error.response.status
        );
      }
    },
  },
};
