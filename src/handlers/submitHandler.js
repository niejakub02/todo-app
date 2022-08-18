import store from "../store/store";
import todoActions from "../store/actions/todoActions";

const submitHandler = (e, title, description) => {
    event.preventDefault();
    
    if (!!title.length && !!description.length) {
        store.dispatch(todoActions.addTodo({ 
            title: title, description: description
        }));
    }
}

export default submitHandler;