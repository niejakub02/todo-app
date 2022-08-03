import themeActions from '../components/Store/actions/themeActions';
import store from '../components/Store/Store';

const switchHandler = (button) => {
    store.dispatch(themeActions.toggleTheme())
    console.log(store.getState());
    button.innerHTML = (button.innerHTML === 'light_mode') ? 'dark_mode' : 'light_mode';
}

export default switchHandler;