const createStore = (counter) => {
    let state = [];
    let listeners = [];

    const dispatch = (action) => {
        state = counter(state, action);
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