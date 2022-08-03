import todoActions from "../components/Store/actions/todoActions";

const submitHandler = (event, store, title, description) => {
    event.preventDefault();
    if (!!title.length && !!description.length) {
        store.dispatch(todoActions.addTodo({ 
            title,
            description
        }))
    }
}

export default submitHandler;