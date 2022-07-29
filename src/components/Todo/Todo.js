import './Todo.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";
import todoToggleHandler from '../../handlers/todoToggleHandler';
import todoDeleteHandler from '../../handlers/deleteTodoHandler';
import dragStartHandler from '../../handlers/dragStartHandler';

const Todo = (todo, toggleCB, deleteCB) => {
    let container, done, remover, inner_dot;

    const build = () => {
        container = document.createElement('div')
        container.classList.add('todo');

        let dot = document.createElement('div');
        dot.classList.add('todo__dot');
        mount(dot, container);

        inner_dot = document.createElement('div');
        inner_dot.classList.add('dot__inner');
        inner_dot.draggable = true;
        mount(inner_dot, dot);

        let content = document.createElement('div');
        content.classList.add('todo__content-wrapper');
        mount(content, container);

        let title = document.createElement('h2');
        title.classList.add('todo__title');
        title.innerHTML = todo.title;
        mount(title, content);

        let description = document.createElement('p');
        description.classList.add('todo__description');
        description.innerHTML = todo.description;
        mount(description, content);

        // done = document.createElement('p');
        // done.classList.add('todo__done');
        // done.innerHTML = todo.done;
        // mount(done, container);

        remover = document.createElement('button');
        remover.classList.add('todo__delete');
        remover.innerHTML = 'delete';
        mount(remover, container);
    }
    
    const render = () => {
        build();
        // addEvent(done, 'click', () => todoToggleHandler(toggleCB, todo.id));
        addEvent(remover, 'click', () => todoDeleteHandler(deleteCB, todo.id));
        addEvent(inner_dot, 'dragstart', () => dragStartHandler(event, todo.id));
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Todo;