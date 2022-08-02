import todoActions from "../components/Store/actions/todoActions";
import store from '../components/Store/Store';

const submitHandler = (event, title, description) => {
    event.preventDefault();
    if (!!title.length && !!description.length) {
        store.dispatch(todoActions.addTodo({ 
            title,
            description
        }))
        console.log(store.getState());
    }
}

export default submitHandler;