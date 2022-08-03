const dragLeaveHandler = (event, eventTarget, border) => {
    if (eventTarget === event.target) border.classList.remove('todo-list__border--drag-over');
}

export default dragLeaveHandler;