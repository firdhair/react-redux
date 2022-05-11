const incrementAction = {
    type: 'increment-count', // COUNT/INCREMENT
}

const decrementAction = {
    type: 'decrement-count', // COUNT/DECREMENT
}

const setCounterAction = (num) => (
    console.log("num", num),
    {
        type: 'set-count',
        payload: num
})

const addNewTodo = (todo, id) => (
    console.log("addNewTodo: ", todo, ", addNewTodo id: ", id),
    {
        type: 'new-todo',
        payload: todo,
        id: id
    }
)

const deleteTodo = (id) => (
    console.log("id: ", id),
    {
        type: 'delete-todo',
        payload: id
    }
)

export{
    incrementAction,
    decrementAction, 
    setCounterAction,
    addNewTodo,
    deleteTodo
}