import './App.css';
import Header from '../Header/Header';
import applyTheme from '../../helpers/applyTheme';
import Base from '../Base/Base';
import TodoList from '../TodoList/TodoList';

class App extends Base {
    constructor(element, classname) {
        super(element, classname)
    }

    build() {
        this.header = new Header('div', 'header');
        this.header.render();
        this.mount(this.header.container);
        
        this.todoList = new TodoList('div', 'todo-list');
        this.todoList.render();
        this.mount(this.todoList.container);
    }

    addEvents() {

    }

    addSubscriptions() {
        this.addSubscription(() => applyTheme(this.store.getState().themes));
    }
    
}

export default App;