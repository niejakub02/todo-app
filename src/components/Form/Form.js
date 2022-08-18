import './Form.css';
import { submitHandler } from 'handlers';
import { mount, createElement } from 'helpers';

const Form = () => {
    let form, button, button_mobile, title_input, description_input;

    const resetInputs = () => {
        title_input.value = "";
        description_input.value = ""; 
    }

    const build = () => {
        form = createElement({
            tag: 'form',
            classList: 'form'
        });

        title_input = createElement({
            tag: 'input',
            classList: 'form__title shadow-inner',
            placeholder: 'title'
        });
        mount(title_input, form);

        description_input = createElement({
            tag: 'input',
            classList: 'form__description shadow-inner',
            placeholder: 'description'
        })
        mount(description_input, form);

        button = createElement({
            tag: 'button',
            classList: 'form__submit material-symbols-outlined shadow-outer',
            innerHTML: 'add'
        })
        mount(button, form);

        button_mobile = createElement({
            tag: 'button',
            classList: 'form__submit-mobile shadow-outer',
            innerHTML: 'Add node'
        })
        mount(button_mobile, form);
    }   
    
    const render = () => {
        build();

        button.addEventListener('click', (e) => {
            submitHandler(e, title_input.value, description_input.value);
            resetInputs();
        })
        form.addEventListener('submit', (e) => {
            submitHandler(e, title_input.value, description_input.value);
            resetInputs();
        })
        return form;
    }
    
    return (parent) => mount(render(), parent);
}

export default Form;