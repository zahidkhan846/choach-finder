import axios from "../../config/axiosConfig.js";

export default {
  namespaced: true,
  state() {
    return {
      allRequests: [],
      requestErrors: null,
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.allRequests.push(payload);
    },
    setRequests(state, payload) {
      state.allRequests = payload;
    },
    setError(state, payload) {
      state.requestErrors = payload;
    },
  },
  getters: {
    getAllRequests(state, _, __, rootGetters) {
      const loggedInUser = rootGetters.currentUser;
      return state.allRequests.filter(
        (allRequest) => allRequest.coachId === loggedInUser.id
      );
    },
    allErrors(state) {
      return state.requestErrors;
    },
  },
  actions: {
    async addRequest(context, payload) {
      try {
        const res = await axios.post(`/create-request`, payload);
        context.commit("addRequest", res.data);
      } catch (error) {
        context.commit("setError", error.response);
      }
    },
    async fetchAllRequests(context) {
      const currUserId = context.rootGetters.currentUser.id;
      try {
        const res = await axios.get(`/all-requests/${currUserId}`);
        const allRequests = res.data;
        context.commit("setRequests", allRequests);
      } catch (error) {
        context.commit("setError", error.response);
      }
    },
  },
};
