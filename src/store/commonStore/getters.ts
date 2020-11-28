const commonGetters = {
    countGetter: (state: any) => {
        return state.count;
    },
    doubleCountGetter: (state: any) => {
        return state.count * 2;
    }
};

export default commonGetters;