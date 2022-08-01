const addEvent = (element, eventType, eventHandler) => {
    element.addEventListener(eventType, eventHandler);
}

export default addEvent;