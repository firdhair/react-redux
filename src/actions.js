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

export{
    incrementAction,
    decrementAction, 
    setCounterAction
}