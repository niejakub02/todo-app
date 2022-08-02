import './TodoList.css';
import Base from '../Base/Base';
import TodoListContainer from "../TodoListContainer/TodoListContainer";

class TodoList extends Base {
    constructor(element, classname) {
        super(element, classname)
    }

    build() {
        this.pendingContainer = new TodoListContainer('div', 'todo-list__pending');
        this.pendingContainer.render({ label: 'Pending', done: false });
        this.mount(this.pendingContainer.container);

        this.doneContainer = new TodoListContainer('div', 'todo-list__done');
        this.doneContainer.render({ label: 'Done', done: true });
        this.mount(this.doneContainer.container);
    }

    addEvents() {

    }
}

export default TodoList;