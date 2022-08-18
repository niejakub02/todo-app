import './TodoListContainer.css';
import { dragEnterHandler, dragLeaveHandler, dragOverHandler, dropHandler } from 'handlers';
import { mount, clear, createElement } from 'helpers';
import { Todo } from 'components';
import { store } from 'store';

const TodoListContainer = ({ className, labelContent, isDone }) => {
    let enterTarget = null;
    let container, border, todosWrapper;

    const renderTodos = () => {
        clear(todosWrapper);
        const { todos } = store.getState();
        todos.forEach(todo => {
            if (todo.done === isDone) Todo(todo)(todosWrapper);
        })
    }

    const build = () => {
        container = createElement({
            tag: 'div',
            classList: `${className} shadow-outer`
        });

        border = createElement({
            tag: 'div',
            classList: 'todo-list__border'
        });
        mount(border, container)

        let label = createElement({
            tag: 'h1',
            classList: 'todo-list__label',
            innerHTML: labelContent
        });
        mount(label, container);

        todosWrapper = createElement({
            tag: 'div',
            classList: 'todo-list__todos'
        })
        mount(todosWrapper, container);
    }

    const render = () => {
        build();

        store.subscribe(renderTodos);

        container.addEventListener('dragenter', (e) => {
            enterTarget = dragEnterHandler(e, border);
        });
        container.addEventListener('dragleave', (e) => {
            dragLeaveHandler(e, enterTarget, border);
        });
        container.addEventListener('dragover', (e) => {
            dragOverHandler(e);
        })
        container.addEventListener('drop', (e) => {
            dropHandler(e, isDone, border)
        });
        return container;
    }

    

    return (parent) => mount(render(), parent);
}

export default TodoListContainer;