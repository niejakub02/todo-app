import './Todo.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";
import todoDeleteHandler from '../../handlers/deleteTodoHandler';
import dragStartHandler from '../../handlers/dragStartHandler';

const Todo = (todo, deleteCB) => {
    let container, remover, inner_dot;

    const build = () => {
        container = document.createElement('div')
        container.classList.add('todo');

        let dot = document.createElement('div');
        dot.classList.add('todo__dot');
        dot.classList.add('shadow-inner');
        mount(dot, container);

        inner_dot = document.createElement('div');
        inner_dot.classList.add('dot__inner');
        inner_dot.classList.add('shadow-outer');
        inner_dot.draggable = true;
        mount(inner_dot, dot);

        let content = document.createElement('div');
        content.classList.add('todo__content-wrapper');
        mount(content, container);

        let label_wrapper = document.createElement('div');
        label_wrapper.classList.add('todo__label-wrapper');
        mount(label_wrapper, content);

        let title = document.createElement('h2');
        title.classList.add('todo__title');
        title.innerHTML = todo.title;
        mount(title, label_wrapper);

        remover = document.createElement('button');
        remover.classList.add('todo__delete');
        remover.innerHTML = 'delete';
        mount(remover, label_wrapper);

        let description = document.createElement('p');
        description.classList.add('todo__description');
        description.innerHTML = todo.description;
        mount(description, content);
    }
    
    const render = () => {
        build();
        addEvent(remover, 'click', () => todoDeleteHandler(deleteCB, todo.id));
        addEvent(inner_dot, 'dragstart', () => dragStartHandler(event, todo.id));
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Todo;