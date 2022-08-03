import './styles/style.css';
import App from './components/App/App';

const rootApp = new App('div', 'root');
rootApp.render();
rootApp.mount(rootApp.container, document.body);