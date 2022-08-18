import './Header.css';
import { mount, createElement } from 'helpers';
import { Form, Switch } from 'components';

const Header = () => {
    let container;

    const build = () => {
        container = createElement({
            tag: 'header',
            classList: 'header'
        });

        let logo = createElement({
            tag: 'h1',
            classList: 'header__logo',
            innerHTML: 'TodoApp'
        });
        mount(logo, container);

        Form()(container)
        Switch()(container)
    }

    const render = () => {
        build();
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Header;