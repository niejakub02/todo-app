import './TodoListContainer.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";
import dragEnterHandler from '../../handlers/dragEnterHandler';
import dragLeaveHandler from '../../handlers/dragLeaveHandler';
import dragOverHandler from '../../handlers/dragOverHandler';
import dropHandler from '../../handlers/dropHandler';

const TodoListContainer = (classname, label_content, setCB, copyCB, done) => {
    let enterTarget = null;
    let container;

    const build = () => {
        container = document.createElement('div');
        container.classList.add(classname);

        let label = document.createElement('h1');
        label.classList.add('todo-list__label');
        label.innerHTML = label_content;
        mount(label, container);
    }
    
    const render = () => {
        build();
        addEvent(container, 'dragenter', () => enterTarget = dragEnterHandler(event, container));
        addEvent(container, 'dragleave', () => dragLeaveHandler(event, enterTarget, container));
        addEvent(container, 'dragover', () => dragOverHandler(event));
        addEvent(container, 'drop', () => dropHandler(event, done, copyCB, setCB));
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default TodoListContainer;