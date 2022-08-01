const switchHandler = (toggleThemeCB, button) => {
    toggleThemeCB();
    button.innerHTML = (button.innerHTML === 'light_mode') ? 'dark_mode' : 'light_mode';
}

export default switchHandler;