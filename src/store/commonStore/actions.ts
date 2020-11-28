const commonActions = {
    incrementCountAsyncAction({ commit }: any, payload: any) {
        setTimeout(() => {
            commit("incrementCountMutation", payload)
        }, 1000)
    }
};

export default commonActions;