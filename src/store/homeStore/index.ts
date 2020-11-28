import homeActions from './actions';
import homeGetters from './getters';
import homeMutations from './mutations';

const homeStore = {
    namespaced: true,
    state() {
        return {
            countHome: 1
        }
    },
    getters: homeGetters,
    mutations: homeMutations,
    actions: homeActions
}

export default homeStore;