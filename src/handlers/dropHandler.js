const dropHandler = (event, done, copyCB, setCB) => {
    const id = event.dataTransfer.getData('text');

    if (event.ctrlKey) {
        copyCB({ id: Number(id), done })
    } else {
        setCB({ id: Number(id), done });
    }

    event.dataTransfer.clearData();
}

export default dropHandler;