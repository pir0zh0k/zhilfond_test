import { createStore } from "vuex";
import { $api } from "../api/index.js";

export const store = createStore({
  state: {
    value: "",
    users: [],
    currentUser: null,
  },
  mutations: {
    setCurrentUser: (state, payload) => {
      state.currentUser = payload;
    },
    setUsers: (state, payload) => {
      state.users = payload;
    },
  },
  actions: {
    async setCurrentUser(context, user) {
      context.commit("setCurrentUser", user);
    },

    async setUsers(context, users) {
      context.commit("setUsers", users);
    },
  },
});
