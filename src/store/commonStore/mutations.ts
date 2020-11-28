const commonMutations = {
    incrementCountMutation(state: any, payload: any) {
        state.count += payload.amount
    }
};

export default commonMutations;