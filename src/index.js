import './styles/style.css';
import { createStore, combineReducers } from 'redux'
import render from './helpers/render';
import applyTheme from './helpers/applyTheme';
import todos from './components/Store/reducers/todosReducer';
import themes from './components/Store/reducers/themesReducer';
import initialState from './components/Store/initialState';

const rootReducer = combineReducers({todos, themes})
const store = createStore(rootReducer, {...initialState});

store.subscribe(() => {
    applyTheme(store);
    render(store);
});

render(store);