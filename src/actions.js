import axios from "axios"

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

const fetchPostAction = (payload) => (
    console.log("data fetch: "),
    {
        type: 'fetch-data',
        payload
    }
)

const fetchPostStart = {
    type: 'fetch-start'
}

const fetchPostSuccess = (payload) => ({
    type: 'fetch-success',
    payload
})

const fetchPostFailed = (payload) => ({
    type: 'fetch-failed',
    payload
})

const fetchPostAsync = () => {
    return function(dispatch, getState){
        dispatch(fetchPostStart)
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                dispatch(fetchPostSuccess(response.data))
            })
            .catch((error) => {
                dispatch(fetchPostFailed(error))
            })
    }
}

export{
    incrementAction,
    decrementAction, 
    fetchPostStart,
    setCounterAction,
    addNewTodo,
    deleteTodo,
    fetchPostFailed,
    fetchPostSuccess,
    fetchPostAsync
}