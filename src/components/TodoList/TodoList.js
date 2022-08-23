import './TodoList.css';
import { TodoListContainer } from 'components';
import { mount, createElement } from 'helpers';

const TodoList = () => {
    let container;

    const build = () => {
        container = createElement({
            tag: 'div',
            classList: 'todo-list'
        });

        TodoListContainer({
            className: 'todo-list__pending',
            labelContent: 'Pending',
            isDone: false
        })(container);

        TodoListContainer({
            className: 'todo-list__done',
            labelContent: 'Done',
            isDone: true
        })(container);        
    }

    const render = () => {
        build();
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default TodoList;