import { light, dark } from "../themes/themes";
import store from '../components/Store/Store';

const applyTheme = () => {
    let themes = store.getState().themes;
    let theme = (themes) ? dark : light;
    
    let keys = Object.keys(theme);
    keys.forEach((key) => {
        document.documentElement.style.setProperty(
          key,
          theme[key]
        );
    });
}

export default applyTheme;