import './TodoListContainer.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";

const TodoListContainer = (classname, setCB, copyCB, done) => {
    let enterTarget = null;
    let copy = false;
    let container;

    const dragEnterHandler = (event) => {
        enterTarget = event.target;
        container.classList.add('todo-list__elem--drag-over');
    }

    const dragLeaveHandler = (event) => {
        if (enterTarget === event.target) container.classList.remove('todo-list__elem--drag-over');
    }

    const dragOverHandler = (event) => {
        event.preventDefault();
    }

    const dropHandler = (event) => {
        const id = event.dataTransfer.getData('text');
        console.log
        if (copy) {
            copyCB({ id: Number(id), done })
        } else {
            setCB({ id: Number(id), done });
        }
        event.dataTransfer.clearData();
    }
    
    const keyDownHandler = (event) => {
        if (event.keyCode === 17) copy = true;
    }

    const keyUpHandler = (event) => {
        if (event.keyCode === 17) copy = false;
    }

    const build = () => {
        container = document.createElement('div');
        container.classList.add(classname);
    }
    
    const render = () => {
        build();
        addEvent(container, 'dragenter', dragEnterHandler);
        addEvent(container, 'dragleave', dragLeaveHandler);
        addEvent(container, 'dragover', dragOverHandler);
        addEvent(container, 'drop', dropHandler);
        addEvent(document, 'keydown', keyDownHandler)
        addEvent(document, 'keyup', keyUpHandler)
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default TodoListContainer;