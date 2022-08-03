const combineReducers = (...reducers) => {
    return (state, action) => {
        const actionSlice = action.type.split('/');
        let nextState;

        for (let reducer of reducers) {
            if (reducer.prototype.constructor.name === actionSlice[0]) {
                nextState = reducer(state, { ...action, type: actionSlice[1] });
            }
        }
        return nextState;
    }
}

export default combineReducers;