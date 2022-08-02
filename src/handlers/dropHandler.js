import todoActions from "../components/Store/actions/todoActions";
import store from '../components/Store/Store';

const dropHandler = (event, done, container) => {
    const id = event.dataTransfer.getData('text');

    if (event.ctrlKey) {
        store.dispatch(todoActions.copyTodo({ id: Number(id), done }));
    } else {
        store.dispatch(todoActions.setTodoState({ id: Number(id), done }));
    }

    event.dataTransfer.clearData();
    container.classList.remove('todo-list__elem--drag-over');
}

export default dropHandler;