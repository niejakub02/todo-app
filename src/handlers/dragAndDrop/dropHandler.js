import { store, todoActions } from 'store';

const dropHandler = (e, done, border) => {
    const id = e.dataTransfer.getData('text');

    if (e.ctrlKey) {
        store.dispatch(todoActions.copyTodo({
            id: Number(id), done 
        }));
    } else {
        store.dispatch(todoActions.setTodoState({ 
            id: Number(id), done
        }));
    }

    border.classList.remove('todo-list__border--drag-over');
    e.dataTransfer.clearData();
}

export default dropHandler;