const dragLeaveHandler = (e, eventTarget, border) => {
    if (eventTarget === e.target) border.classList.remove('todo-list__border--drag-over');
}

export default dragLeaveHandler;