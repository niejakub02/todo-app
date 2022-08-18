const dragStartHandler = (e, id) => {
    e.dataTransfer.setData('text/plain', id);
};

export default dragStartHandler;