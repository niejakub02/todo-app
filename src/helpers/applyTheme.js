import { light, dark } from "../themes/themes";

const applyTheme = (store) => {
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