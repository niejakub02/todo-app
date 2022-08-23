import { store } from 'store';

const applyTheme = () => {
  const { themes } = store.getState();

    if (themes) {
      document.body.classList.add('dark-theme')
      document.body.classList.remove('light-theme')
    }
    else {
      document.body.classList.add('light-theme')
      document.body.classList.remove('dark-theme')
    }
}

export default applyTheme;