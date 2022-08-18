import todoActions from "../components/Store/actions/todoActions";
import themeActions from "../components/Store/actions/themeActions";
import clear from "./clear";
import TodoList from "../components/TodoList/TodoList";
import Header from "../components/Header/Header";

const render = (store) => {
    clear();

    Header((todo) => {
        store.dispatch(todoActions.addTodo(todo));
    },
    () => {
        store.dispatch(themeActions.toggleTheme())
    })();

    TodoList(store.getState().todos,
    (todo) => {
        store.dispatch(todoActions.setTodoState(todo));
    },
    (todo) => {
        store.dispatch(todoActions.copyTodo(todo));
    },
    (id) => {
        store.dispatch(todoActions.deleteTodo(id));
    }
    )()
}

export default render;