import './Switch.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";

const Switch = (toggleCB) => {
    let container, button;

    const switchHandler = () => toggleCB();

    const build = () => {
        container = document.createElement('div');
        container.classList.add('switch');

        button = document.createElement('button');
        button.classList.add('switch__button');
        button.innerHTML = 'toggle theme';
        mount(button, container);
    }

    const render = () => {
        build();
        addEvent(button, 'click', switchHandler)
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Switch;