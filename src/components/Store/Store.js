import { createStore, combineReducers } from "redux";
import todos from "./reducers/todosReducer";
import themes from "./reducers/themesReducer";

const rootReducer = combineReducers({ todos, themes });
const store = createStore(rootReducer);

export default store;