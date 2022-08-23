let id = 0;

const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                    id: id++,
                    title: action.title,
                    description: action.description,
                    done: false
                }

        case 'TOGGLE_TODO':
            if (state.id !== action.id) return state;
                
            return {
                ...state,
                done: !state.done
            }

        case 'DELETE_TODO':
            if (state.id !== action.id) return state;

        case 'SET_TODO_STATE':
            if (state.id !== action.id) return state;
                
            return {
                ...state,
                done: action.done
            }

        case 'COPY_TODO':
            return {
                ...state.find(t => t.id === action.id),
                id: id++,
                done: action.done
            }

        default:
            return state;
    }
}

export default todo; 