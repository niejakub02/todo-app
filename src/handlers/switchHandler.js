import themeActions from '../components/Store/actions/themeActions';

const switchHandler = (store, button) => {
    store.dispatch(themeActions.toggleTheme())
    button.innerHTML = (button.innerHTML === 'light_mode') ? 'dark_mode' : 'light_mode';
}

export default switchHandler;