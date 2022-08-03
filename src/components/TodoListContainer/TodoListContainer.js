import './TodoListContainer.css';
import Base from '../Base/Base';
import Todo from '../Todo/Todo';
import dragEnterHandler from '../../handlers/dragEnterHandler';
import dragLeaveHandler from '../../handlers/dragLeaveHandler';
import dragOverHandler from '../../handlers/dragOverHandler';
import dropHandler from '../../handlers/dropHandler';
import store from '../Store/Store';

class TodoListContainer extends Base {
    constructor(element, classname) {
        super(element, classname);
        this.enterTarget = null;
    }

    build(consts) {

        this.border = this.createElement('div', 'todo-list__border');
        this.mount(this.border)

        this.label = this.createElement('h1', 'todo-list__label', consts.label);
        this.mount(this.label);
    }

    addEvents(consts) {
        this.addEvent(this.container, 'dragenter', (event) => this.enterTarget = dragEnterHandler(event, this.border));
        this.addEvent(this.container, 'dragleave', (event) => dragLeaveHandler(event, this.enterTarget, this.border));
        this.addEvent(this.container, 'dragover', (event) => dragOverHandler(event));
        this.addEvent(this.container, 'drop', (event) => dropHandler(event, consts.done, this.container));
    }

    addSubscriptions(consts) {
        this.addSubscription(() => {
            this.clearContainer(consts);

            for (let todo of store.getState().todos) {
                if (todo.done === consts.done) {
                    let todoNode = new Todo('div', 'todo');
                    todoNode.render(todo);
                    this.mount(todoNode.container)
                }
            }
        })
    }

    clearContainer(consts) {
        this.container.innerHTML = '';
        this.build(consts);
    }
}

export default TodoListContainer;
