import initialState from "../initialState";

let id = 0;

const todos = (state = {...initialState}, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                todos: [
                ...state.todos,
                {
                    id: id++,
                    title: action.title,
                    description: action.description,
                    done: false
                }
            ],
            themes: state.themes
        };

        case 'TOGGLE_TODO':
            return {
                todos: state.todos.map(todo => {
                if (todo.id !== action.id) return todo;
                
                return {
                    ...todo,
                    done: !todo.done
                }
            }),
            themes: state.themes
        }

        case 'DELETE_TODO':
            return {
                todos: state.todos.filter(todo => {
                if (todo.id !== action.id) return todo;
            }),
            themes: state.themes
        }

        case 'SET_TODO_STATE':
            return {
                todos: state.todos.map(todo => {
                if (todo.id !== action.id) return todo;
                
                return {
                    ...todo,
                    done: action.done
                }
            }),
            themes: state.themes
        }

        case 'COPY_TODO':
            return {
                todos: [
                ...state.todos,
                {
                    ...state.todos.find(todo => 
                        (todo.id === action.id) 
                    ),
                    id: id++,
                    done: action.done
                }
            ],
            themes: state.themes
        }

        default:
            return state;
    }
}

export default todos; 