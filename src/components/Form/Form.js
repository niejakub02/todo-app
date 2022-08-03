import './Form.css';
import addEvent from "../../helpers/addEvent";
import mount from "../../helpers/mount";
import submitHandler from '../../handlers/submitHandler';

const Form = (submitCB) => {
    let form, button, button_mobile, title_input, description_input;

    const build = () => {
        form = document.createElement('form');
        form.classList.add('form');

        title_input = document.createElement('input');
        title_input.classList.add('form__title');
        title_input.classList.add('shadow-outer');
        title_input.placeholder = 'title';
        mount(title_input, form);

        description_input = document.createElement('input');
        description_input.classList.add('form__description');
        description_input.classList.add('shadow-outer');
        description_input.placeholder = 'description';
        mount(description_input, form);
        
        button = document.createElement('button');
        button.classList.add('form__submit');
        button.classList.add('material-symbols-outlined');
        button.classList.add('shadow-outer');
        button.innerHTML = 'add';
        mount(button, form);

        button_mobile = document.createElement('button');
        button_mobile.classList.add('form__submit-mobile');
        button_mobile.classList.add('shadow-outer');
        button_mobile.innerHTML = 'Add node';
        mount(button_mobile, form);
    }   
    
    const render = () => {
        build();
        addEvent(button, 'click', () => submitHandler(event, title_input.value, description_input.value, submitCB));
        addEvent(form, 'submit', () => submitHandler(event, title_input.value, description_input.value, submitCB));
        return form;
    }
    
    return (parent) => mount(render(), parent);
}

export default Form;