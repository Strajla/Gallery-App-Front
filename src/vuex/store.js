import Vuex from "vuex";
import Vue from "vue";
import { mutations } from "./mutations";
import { actions } from "./actions";
import auth from "./auth";
import comment from "./comment";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    galleries: [],
    gallery: null,
    images: [],
    authors: [],
    comments: [],
    yourGalleries: [],
    numberPerPage: Number
  },

  getters: {
    galleries: ({ galleries }) => galleries,
    gallery: ({ gallery }) => {
      console.log("gett", { gallery });
      return gallery;
    },
    images: ({ images }) => images,
    authors: ({ authors }) => authors,
    comments: ({ comments }) => comments,
    yourGalleries: ({yourGalleries}) =>yourGalleries,
    numberPerPage: ({numberPerPage}) => numberPerPage,

  },

  mutations,
  actions,

  modules: {
    auth,
    comment,
  },
});
