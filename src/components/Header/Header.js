import './Header.css';
import Form from '../Form/Form';
import Switch from '../Switch/Switch';
import Base from '../Base/Base';

class Header extends Base {
    constructor(element, classname) {
        super(element, classname);
    }

    build() {
        this.logo = this.createElement('h1', 'header__logo', 'TodoApp');
        this.mount(this.logo);

        this.form = new Form('form', 'form');
        this.form.render();
        this.mount(this.form.container);

        this.switch = new Switch('div', 'switch');
        this.switch.render();
        this.mount(this.switch.container)
    }

    addEvents() {
        
    }
}

export default Header;