import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import thunk from 'redux-thunk'

import counterReducer from './reducer/counterReducer'
import todoReducer from "./reducer/todoReducer"
import postReducer from "./reducer/postReducer"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const store = createStore(combineReducers({
    counter: counterReducer,
    todos: todoReducer,
    post: postReducer
}),
composeEnhancers(applyMiddleware(thunk))
)

export default store