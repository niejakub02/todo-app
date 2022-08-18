import './Switch.css';
import { mount, createElement } from 'helpers';
import { switchHandler } from 'handlers';
import { store } from 'store';

const Switch = () => {
    let container, button, currentTheme = false;

    const themeIconSwap = () => {
        const { themes } = store.getState();
        if (currentTheme !== themes) {
            button.innerHTML = (themes) ? 'dark_mode' : 'light_mode';
            currentTheme = themes;
        }
    }

    const build = () => {
        container = createElement({
            tag: 'div',
            classList: 'switch'
        })

        button = createElement({
            tag: 'button',
            classList: 'switch__button material-symbols-outlined shadow-outer',
            innerHTML: 'light_mode'
        })
        mount(button, container);
    }

    const render = () => {
        build();

        store.subscribe(themeIconSwap);

        button.addEventListener('click', (e) => {
            switchHandler(e);
        })
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Switch;