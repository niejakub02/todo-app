import initialState from "./../Store/initialState";

const createStore = (reducer) => {
    let state = {...initialState};
    let listeners = [];

    const dispatch = (action) => {
        state = reducer(state, action);
        listeners.forEach(listener => {
            listener(action);
        });
    }

    const subscribe = (listener) => {
        listeners.push(listener);
    }

    const unsubscribe = () => {
        
    }

    const getState = () => {
        return state;
    }

    return { dispatch, subscribe, unsubscribe, getState };
}

export default createStore;