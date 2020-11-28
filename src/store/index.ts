import { createStore } from 'vuex';
import commonStore from './commonStore';

const store = createStore({
    modules: {
        common: commonStore,
    }
});

export default store;

