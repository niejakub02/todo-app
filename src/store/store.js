import initialState from "./initialState";
import todos from './reducers/todosReducer';
import themes from './reducers/themesReducer';
import combineReducers from './reducers/combineReducers';

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

const rootReducer = combineReducers(todos, themes)
const store = createStore(rootReducer);

export default store;