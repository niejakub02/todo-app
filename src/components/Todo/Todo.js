import './Todo.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";

const Todo = (todo, toggleCB, deleteCB) => {
    let container, done, remover;

    const toggleHandler = () => toggleCB(todo.id);

    const deleteHandler = () => deleteCB(todo.id);

    const dragStartHandler = (event) => {
        event.dataTransfer.setData('text/plain', todo.id);
    }

    const build = () => {
        container = document.createElement('div')
        container.classList.add('todo');
        container.draggable = true;

        let title = document.createElement('h2');
        title.classList.add('todo__title');
        title.innerHTML = todo.title;
        mount(title, container);

        let description = document.createElement('p');
        description.classList.add('todo__description');
        description.innerHTML = todo.description;
        mount(description, container);

        done = document.createElement('p');
        done.classList.add('todo__done');
        done.innerHTML = todo.done;
        mount(done, container);

        remover = document.createElement('button');
        remover.classList.add('todo__delete');
        remover.innerHTML = 'delete';
        mount(remover, container);
    }
    
    const render = () => {
        build();
        addEvent(done, 'click', toggleHandler);
        addEvent(remover, 'click', deleteHandler);
        addEvent(container, 'dragstart', dragStartHandler)
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Todo;