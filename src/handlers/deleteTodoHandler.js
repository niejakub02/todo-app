import todoActions from "../components/Store/actions/todoActions";

const todoDeleteHandler = (store, id) => store.dispatch(todoActions.deleteTodo(id));

export default todoDeleteHandler;