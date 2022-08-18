const dragEnterHandler = (e, border) => {
    border.classList.add('todo-list__border--drag-over');
    return e.target;
}

export default dragEnterHandler;