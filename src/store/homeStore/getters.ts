const homeGetters = {
    countHomeGetter: (state: any) => {
        return state.countHome;
    },
    tripleCountHomeGetter: (state: any) => {
        return state.countHome * 3;
    }
};

export default homeGetters;