const dragStartHandler = (event, id) => event.dataTransfer.setData('text/plain', id);

export default dragStartHandler;