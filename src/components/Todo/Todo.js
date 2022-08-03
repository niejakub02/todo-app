import './Todo.css';
import Base from '../Base/Base';
import dragStartHandler from '../../handlers/dragStartHandler';
import deleteTodoHandler from '../../handlers/deleteTodoHandler';

class Todo extends Base {
    constructor(element, classname) {
        super(element, classname);
    }

    build(todo) {
        this.dot = this.createElement('div', 'todo__dot shadow-inner');

        this.mount(this.dot);

        this.inner_dot = this.createElement('div', 'dot__inner shadow-outer');
        this.inner_dot.draggable = true;
        this.mount(this.inner_dot, this.dot);

        this.contnet_wrapper = this.createElement('div', 'todo__content-wrapper');
        this.mount(this.contnet_wrapper);

        this.label_wrapper = this.createElement('div', 'todo__label-wrapper');
        this.mount(this.label_wrapper, this.contnet_wrapper);

        this.title = this.createElement('h2', 'todo__title', todo.title);
        this.mount(this.title, this.label_wrapper);

        this.remover = this.createElement('button', 'todo__delete', 'delete');
        this.mount(this.remover, this.label_wrapper);

        this.description = this.createElement('p', 'todo__description', todo.description);

        this.mount(this.description, this.contnet_wrapper);
    }

    addEvents(todo) {
        this.addEvent(this.remover, 'click', () => 
            deleteTodoHandler(this.store, todo.id)
        );
        this.addEvent(this.inner_dot, 'dragstart', (event) => 
            dragStartHandler(event, todo.id)
        );
    }
}

export default Todo;