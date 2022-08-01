import './TodoList.css';
import TodoListContainer from "../TodoListContainer/TodoListContainer";
import Todo from "../Todo/Todo";
import mount from "../../helpers/mount";

const TodoList = (todos, setCB, copyCB, deleteCB) => {
    let container, pendingContainer, doneContainer;

    const build = () => {
        container = document.createElement('div');
        container.classList.add('todo-list');

        pendingContainer = TodoListContainer('todo-list__pending', 'Pending', setCB, copyCB, false)(container);

        doneContainer = TodoListContainer('todo-list__done', 'Done', setCB, copyCB, true)(container);

        for (let todo of todos) {
            Todo(todo, deleteCB)((todo.done) ? doneContainer : pendingContainer);
        }
    }

    const render = () => {
        build();
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default TodoList;