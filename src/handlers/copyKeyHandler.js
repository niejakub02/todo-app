import { setCopyMode } from "../helpers/copyKey";

const copyKeyHandler = (event, bool) => {
    if (event.keyCode === 17) setCopyMode(bool);
}

export default copyKeyHandler;