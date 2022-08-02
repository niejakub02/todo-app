import todoActions from "../components/Store/actions/todoActions";
import store from '../components/Store/Store';

const todoDeleteHandler = (id) => store.dispatch(todoActions.deleteTodo(id));

export default todoDeleteHandler;