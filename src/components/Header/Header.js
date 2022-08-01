import './Header.css';
import mount from "../../helpers/mount";
import Form from '../Form/Form';
import Switch from '../Switch/Switch';

const Header = (addCB, toggleThemeCB) => {
    let container;

    const build = () => {
        container = document.createElement('header');
        container.classList.add('header');

        let logo = document.createElement('h1');
        logo.classList.add('header__logo');
        logo.innerHTML = 'TodoApp';
        mount(logo, container);

        Form(addCB)(container)
    
        Switch(toggleThemeCB)(container)
    }

    const render = () => {
        build();
        return container;
    }

    return (parent) => mount(render(), parent);
}

export default Header;