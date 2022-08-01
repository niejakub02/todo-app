import initialState from "../initialState";

let id = 0;

const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...state,
                {
                    id: id++,
                    title: action.title,
                    description: action.description,
                    done: false
                }
            ]

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) return todo;
                
                return {
                    ...todo,
                    done: !todo.done
                }
            })

        case 'DELETE_TODO':
            return state.filter(todo => {
                if (todo.id !== action.id) return todo;
            })

        case 'SET_TODO_STATE':
            return state.map(todo => {
                if (todo.id !== action.id) return todo;
                
                return {
                    ...todo,
                    done: action.done
                }
            })

        case 'COPY_TODO':
            return [
                ...state,
                {
                    ...state.find(todo => 
                        (todo.id === action.id) 
                    ),
                    id: id++,
                    done: action.done
                }
            ]

        default:
            return state;
    }
}

export default todos; 