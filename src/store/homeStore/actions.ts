const homeActions = {
    incrementCountHomeAsyncAction({ commit }: any, payload: any) {
        setTimeout(() => {
            commit("incrementCountHomeMutation", payload)
        }, 1000)
    }
};

export default homeActions;