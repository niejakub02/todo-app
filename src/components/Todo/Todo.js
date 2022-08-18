import './Todo.css';
import { mount, createElement } from 'helpers';
import { deleteHandler, dragStartHandler } from 'handlers';

const Todo = (todo) => {
    let container, remover, innerDot;

    const build = () => {
        container = createElement({
            tag: 'div',
            classList: 'todo'
        });

        let dot = createElement({
            tag: 'div',
            classList: 'todo__dot shadow-inner'
        })
        mount(dot, container);

        innerDot = createElement({
            tag: 'div',
            classList: 'dot__inner shadow-outer',
            draggable: true
        });
        mount(innerDot, dot);

        let content = createElement({
            tag: 'div',
            classList: 'todo__content-wrapper'
        })
        mount(content, container);

        let label_wrapper = createElement({
            tag: 'div',
            classList: 'todo__label-wrapper'
        })
        mount(label_wrapper, content);

        let title = createElement({
            tag: 'h2',
            classList: 'todo__title',
            innerHTML: todo.title
        })
        mount(title, label_wrapper);

        remover = createElement({
            tag: 'div',
            classList: 'todo__delete material-symbols-outlined',
            innerHTML: 'Close'
        })
        mount(remover, container);

        let description = createElement({
            tag: 'p',
            classList: 'todo__description',
            innerHTML: todo.description
        })
        mount(description, content);
    }
    
    const render = () => {
        build();

        remover.addEventListener('click', (e) => {
            deleteHandler(e, todo.id);
        });
        innerDot.addEventListener('dragstart', (e) => {
            dragStartHandler(e, todo.id);
        });
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Todo;