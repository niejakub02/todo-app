import store from '../Store/Store';

class Base {
    constructor(element = 'div', classname) {
        this.container = this.createElement(element, classname);
    }

    addEvents() {}

    addSubscriptions() {}

    addSubscription(callback) {
        store.subscribe(callback);
    }

    addEvent(element, eventType, eventHandler) {
        element.addEventListener(eventType, eventHandler);
    }

    createElement(element, classname = null, text = null) {
        let elem = document.createElement(element);
        if (classname) elem.classList = classname;
        if (text) elem.innerHTML = text;
        return elem;
    }

    mount(element, container = this.container) { 
        container.appendChild(element);
    }

    render({...args} = null) {
        this.build(args);
        this.addEvents(args);
        this.addSubscriptions(args);
    }
}

export default Base;