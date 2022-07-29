import './TodoList.css';
import TodoListContainer from "../TodoListContainer/TodoListContainer";
import Todo from "../Todo/Todo";
import mount from "../../helpers/mount";
import addEvent from '../../helpers/addEvent';
import copyKeyHandler from '../../handlers/copyKeyHandler';

const TodoList = (todos, setCB, copyCB, toggleCB, deleteCB) => {
    let container, pendingContainer, doneContainer;

    const build = () => {
        container = document.createElement('div');
        container.classList.add('todo-list');

        pendingContainer = TodoListContainer('todo-list__pending', 'Pending', setCB, copyCB, false)(container);

        doneContainer = TodoListContainer('todo-list__done', 'Done', setCB, copyCB, true)(container);

        for (let todo of todos) {
            Todo(todo, toggleCB, deleteCB)((todo.done) ? doneContainer : pendingContainer);
        }
    }

    const render = () => {
        build();
        addEvent(document, 'keydown', () => copyKeyHandler(event, true));
        addEvent(document, 'keyup', () => copyKeyHandler(event, false));
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default TodoList;