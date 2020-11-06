import {galleries} from '../services/Galleries'

export const actions= {
    async fetchGalleries(state) {
        const data = await galleries.getAll();
        state.commit('setGalleries', data);
    },

}