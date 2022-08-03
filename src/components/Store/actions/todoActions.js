const todoActions = {
    addTodo: (todo) => ({
        type: 'ADD_TODO',
        title: todo.title,
        description: todo.description
    }),

    toggleTodo: (id) => ({
        type: 'TOGGLE_TODO',
        id: id
    }),

    deleteTodo: (id) => ({
        type: 'DELETE_TODO',
        id: id
    }),

    setTodoState: (todo) => ({
        type: "SET_TODO_STATE",
        id: todo.id,
        done: todo.done
    }),

    copyTodo: (todo) => ({
        type: "COPY_TODO",
        id: todo.id,
        done: todo.done
    })
}

export default todoActions;