const mount = (element, container = document.querySelector('#root')) => {
    container.appendChild(element);
    return element;
}

export default mount;