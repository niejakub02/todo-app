import './Form.css';
import Base from '../Base/Base';
import submitHandler from '../../handlers/submitHandler';

class Form extends Base {
    constructor(element, classname) {
        super(element, classname);
    }

    build() {
        this.title_input = this.createElement('input', 'form__title');
        this.title_input.placeholder = 'title';
        this.mount(this.title_input, this.form);

        this.description_input = this.createElement('input', 'form__description');
        this.description_input.placeholder = 'description';
        this.mount(this.description_input, this.form);
        
        this.button = this.createElement('button', 'form__submit material-symbols-outlined', 'add');
        this.mount(this.button, this.form);

        this.button_mobile = this.createElement('button', 'form__submit-mobile', 'Add node');
        this.mount(this.button_mobile, this.form);
    }

    addEvents() {
        this.addEvent(this.button, 'click', (event) => 
            submitHandler(event, this.title_input.value, this.description_input.value));
        this.addEvent(this.container, 'submit', (event) => 
            submitHandler(event, this.title_input.value, this.description_input.value));
    }
}

export default Form;