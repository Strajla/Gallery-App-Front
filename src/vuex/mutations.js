export const mutations = {
  setGalleries(state, payload) {
    state.galleries = payload[0];
    state.numberPerPage = payload[1]
  },

  setGallery(state, gallery) {
    state.gallery = gallery;
  },

  setYourGalleries(state, payload) {
    state.galleries = payload[1];
    state.numberPerPage = payload[2];
  },

  setImages(state, payload) {
    state.images = payload;
  },

  setAuthors(state, payload) {
    state.authors = payload;
  },

  settAuthor(state, id) {
    state.authors = state.authors.filter((authors) => authors.id === id);
  },

  addGallery(state, payload) {
    state.galleries = payload;
  },

  addComment(state, payload) {
    state.comments = payload;
  },

  setComments(state, payload) {
    state.comments = payload;
  },

  deleteComment(state, id) {
    state.comments = state.comments.filter((comments) => comments.id !== id);
  },

  deleteGallery(state, id) {
    state.galleries = state.galleries.filter(
      (galleries) => galleries.id !== id
    );
  },
};
