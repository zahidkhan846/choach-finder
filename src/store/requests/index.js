import axios from "../../config/axiosConfig.js";
import { v4 as uuidv4 } from "uuid";

export default {
  namespaced: true,
  state() {
    return {
      allRequests: [],
    };
  },
  mutations: {
    addRequest(state, payload) {
      state.allRequests.push(payload);
    },
    setRequests(state, payload) {
      console.log(payload);
      state.allRequests = payload;
    },
  },
  getters: {
    getAllRequests(state, _, __, rootGetters) {
      const loggedInUser = rootGetters.currentUser;
      console.log(state.allRequests);
      return state.allRequests.filter(
        (allRequest) => +allRequest.coachId === loggedInUser.id
      );
    },
  },
  actions: {
    async addRequest(context, payload) {
      const newRequest = {
        id: uuidv4(),
        ...payload,
      };
      try {
        const res = await axios.post(`/requests`, newRequest);
        context.commit("addRequest", res.data);
      } catch (error) {
        throw new Error(
          error.response.statusText + ": " + error.response.status
        );
      }
    },
    async fetchAllRequests(context) {
      const currUserId = context.rootGetters.currentUser.id;
      try {
        const res = await axios.get("/requests");
        const allRequest = res.data;
        console.log(res.data);
        const filteredRequests = allRequest.filter(
          (request) => +request.coachId === currUserId
        );
        context.commit("setRequests", filteredRequests);
      } catch (error) {
        throw new Error(
          error.response.statusText + ": " + error.response.status
        );
      }
    },
  },
};
