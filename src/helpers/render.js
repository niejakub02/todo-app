import todoActions from "../components/Store/actions/todoActions";
import themeActions from "../components/Store/actions/themeActions";
import clear from "./clear";
import Form from '../components/Form/Form';
import Switch from '../components/Switch/Switch';
import TodoList from "../components/TodoList/TodoList";

const render = (todosStore, themesStore) => {
    clear();

    Form((todo) => {
        todosStore.dispatch(todoActions.addTodo(todo));
    })()

    Switch(() => {
        themesStore.dispatch(themeActions.toggleTheme())
    })()

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