import { dark, light } from "../../../themes/themes";

const themes = (state = '', action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return (state === dark) ? light : dark;

        default:
            return state;
    }
}

export default themes;