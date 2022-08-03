import initialState from "./../Store/initialState";

class Store {
    constructor(...reducers) {
        if (Store.exists){ 
            return Store.instance 
        } 
        Store.exists = true; 
        Store.instance = this; 
        
        this.state = {...initialState};
        this.listeners = [];
        this.reducer = this.combineReducers(...reducers);
    }

    combineReducers(...reducers) {
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

    dispatch(action) {
        this.state = this.reducer(this.state, action);
        this.listeners.forEach(listener => {
            listener(action);
        });
    }

    subscribe(listener) {
        this.listeners.push(listener);
    }

    unsubscribe() {
        
    }

    getState = () => {
        return this.state;
    }
}

export default Store;