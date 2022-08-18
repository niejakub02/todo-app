import { store, todoActions } from 'store';

const deleteHandler = (e, id) => store.dispatch(todoActions.deleteTodo(id));

export default deleteHandler;