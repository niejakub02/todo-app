import store from "../store/store";
import themeActions from "../store/actions/themeActions";

const switchHandler = (e) => {
    const { themes } = store.getState();
    store.dispatch(themeActions.toggleTheme(themes))
}

export default switchHandler;