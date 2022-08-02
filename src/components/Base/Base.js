import Store from "../store/Store";
import todos from "../Store/reducers/todosReducer";
import themes from "../Store/reducers/themesReducer";

class Base {
    constructor(element = 'div', classname) {
        this.container = this.createElement(element, classname);
        this.store = new Store(todos, themes);
    }

    addEvents() {}

    addSubscriptions() {}

    addSubscription(callback) {
        this.store.subscribe(callback);
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