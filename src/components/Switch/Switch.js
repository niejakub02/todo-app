import './Switch.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";
import switchHandler from '../../handlers/switchHandler';

const Switch = (toggleThemeCB) => {
    let container, button;

    const build = () => {
        container = document.createElement('div');
        container.classList.add('switch');

        button = document.createElement('button');
        button.classList.add('switch__button');
        button.classList.add('material-symbols-outlined');
        button.innerHTML = 'light_mode';
        mount(button, container);
    }

    const render = () => {
        build();
        addEvent(button, 'click', () => switchHandler(toggleThemeCB))
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Switch;