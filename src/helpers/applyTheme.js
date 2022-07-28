const applyTheme = (themesStore) => {
    let theme = themesStore.getState();
    let keys = Object.keys(theme);
    keys.forEach((key) => {
        document.documentElement.style.setProperty(
          key,
          theme[key]
        );
    });
}

export default applyTheme;