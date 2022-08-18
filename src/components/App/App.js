import './App.css';
import { store } from 'store';
import { mount, applyTheme, createElement } from 'helpers';
import { Header, TodoList } from 'components';

const App = () => {
    let container;

    const build = () => {
        container = createElement({
            tag: 'div',
            classList: 'app'
        });
        
        Header()(container);
        TodoList()(container)
    }   
    
    const render = () => {
        build();
        store.subscribe(applyTheme);
        return container;
    }
    
    return (parent) => mount(render(), parent);
}

export default App;