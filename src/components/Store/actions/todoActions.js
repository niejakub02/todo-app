const todoActions = {
    addTodo: (todo) => ({
        type: 'todos/ADD_TODO',
        title: todo.title,
        description: todo.description
    }),

    toggleTodo: (id) => ({
        type: 'todos/TOGGLE_TODO',
        id: id
    }),

    deleteTodo: (id) => ({
        type: 'todos/DELETE_TODO',
        id: id
    }),

    setTodoState: (todo) => ({
        type: "todos/SET_TODO_STATE",
        id: todo.id,
        done: todo.done
    }),

    copyTodo: (todo) => ({
        type: "todos/COPY_TODO",
        id: todo.id,
        done: todo.done
    })
}

export default todoActions;