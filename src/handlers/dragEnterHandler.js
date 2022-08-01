const dragEnterHandler = (event, container) => {
    container.classList.add('todo-list__elem--drag-over');
    return event.target;
}

export default dragEnterHandler;