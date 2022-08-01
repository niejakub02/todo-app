import './styles/style.css';
import createStore from './components/store/Store';
import render from './helpers/render';
import applyTheme from './helpers/applyTheme';
import todos from './components/Store/reducers/todosReducer';
import themes from './components/Store/reducers/themesReducer';
import combineReducers from './components/Store/reducers/combineReducers';

const rootReducer = combineReducers(todos, themes)
const store = createStore(rootReducer);

store.subscribe(() => {
    applyTheme(store);
    render(store);
});

render(store);