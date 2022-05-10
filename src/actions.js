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

const addNewTodo = (todo) => (
    console.log("todo"),
    {
        type: 'new-todo',
        payload: todo
    }
)

export{
    incrementAction,
    decrementAction, 
    setCounterAction,
    addNewTodo
}