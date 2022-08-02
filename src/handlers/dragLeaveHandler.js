const dragLeaveHandler = (event, eventTarget, container) => {
    if (eventTarget === event.target) container.classList.remove('todo-list__elem--drag-over');
}

export default dragLeaveHandler;