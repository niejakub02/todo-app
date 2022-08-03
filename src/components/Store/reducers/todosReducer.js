import todo from "./todoReducer";

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                    ...state,
                    todo({}, action)
            ]

        case 'TOGGLE_TODO':
            return state.map(t => todo(t, action));

        case 'DELETE_TODO':
            return state.filter(t => (t.id !== action.id));

        case 'SET_TODO_STATE':
            return state.map(t => todo(t, action));

        case 'COPY_TODO':
            return [
                    ...state,
                    todo(state, action)
                ]

        default:
            return state;
    }
}

export default todos; 