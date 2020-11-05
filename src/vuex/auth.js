import axios from "axios";

export default {
  namespaced: true,
  state: {
    token: localStorage.getItem("token"),
    errors: null,
    user: localStorage.getItem("user"),
  },

  getters: {
    isUserAuthenticated(state) {
      return !!state.token;
    },
    errors(state) {
      return state.errors;
    },
    user(state) {
      return JSON.parse(state.user);
    },
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setErrors(state, errors) {
      state.errors = errors;
    },
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async login(context, credentials) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/login",
          credentials
        );
        context.commit("setToken", response.data.token);
        localStorage.setItem("token", response.data.token);
        context.commit("setUser", JSON.stringify(response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        context.commit("setErrors", null);
        return response;
      } catch (exception) {
        context.commit("setErrors", exception);
      }
    },

    logout(context) {
      context.commit("setToken", null);

      localStorage.clear();
    },
  },
};
