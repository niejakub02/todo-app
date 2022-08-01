const submitHandler = (event, title, description, submitCB) => {
    event.preventDefault();
    if (!!title.length && !!description.length) {
        submitCB({ title: title, description: description });
    }
}

export default submitHandler;