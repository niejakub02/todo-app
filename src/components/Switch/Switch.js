import './Switch.css';
import Base from '../Base/Base';
import switchHandler from '../../handlers/switchHandler';

class Switch extends Base {
    constructor(element, classname) {
        super(element, classname);
    }
    
    build() {
        this.button = this.createElement('button', 'switch__button material-symbols-outlined shadow-outer', 'light_mode');
        this.mount(this.button);
    }
    
    addEvents() {
        this.addEvent(this.button, 'click', () => switchHandler(this.store, this.button));
    }
}

export default Switch;