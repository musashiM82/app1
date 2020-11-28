const homeMutations = {
    incrementCountHomeMutation(state: any, payload: any) {
        state.countHome += payload.amount
    }
};

export default homeMutations;