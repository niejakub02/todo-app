import todoActions from "../components/Store/actions/todoActions";
import themeActions from "../components/Store/actions/themeActions";
import clear from "./clear";
import TodoList from "../components/TodoList/TodoList";
import Header from "../components/Header/Header";

const render = (todosStore, themesStore) => {
    clear();

    Header((todo) => {
        todosStore.dispatch(todoActions.addTodo(todo));
    },
    () => {
        themesStore.dispatch(themeActions.toggleTheme())
    })();

    TodoList(todosStore.getState(),
    (todo) => {
        todosStore.dispatch(todoActions.setTodoState(todo));
    },
    (todo) => {
        todosStore.dispatch(todoActions.copyTodo(todo));
    },
    (id) => {
        todosStore.dispatch(todoActions.toggleTodo(id));
    },
    (id) => {
        todosStore.dispatch(todoActions.deleteTodo(id));
    }
    )()
}

export default render;