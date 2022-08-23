const createElement = ({ tag, ...component }) => {
    const element = document.createElement(tag);

    for (let prop in component) {
        element[prop] = component[prop];
    }

    return element;
}

export default createElement;