export const mutations = {
  setGalleries(state, payload) {
    state.galleries = payload;
  },

  getGallery(state, id) {
    state.galleries = state.galleries.filter(
      (galleries) => galleries.id === id
    );
  },

  setImages(state, payload) {
    state.images = payload;
  },
};
