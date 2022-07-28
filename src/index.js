import './styles/style.css';
import createStore from './components/store/Store';
import todos from './components/store/reducers/todosReducer';
import themes from './components/store/reducers/themesReducer';
import render from './helpers/render';
import applyTheme from './helpers/applyTheme';

const todosStore = createStore(todos);
const themesStore = createStore(themes);

todosStore.subscribe(() => {
    render(todosStore, themesStore);
});

themesStore.subscribe(() => {
    applyTheme(themesStore);
});

render(todosStore, themesStore);