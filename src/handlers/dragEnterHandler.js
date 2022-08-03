const dragEnterHandler = (event, border) => {
    border.classList.add('todo-list__border--drag-over');
    return event.target;
}

export default dragEnterHandler;