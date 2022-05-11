import {useState} from "react"
import React from "react"
import uniqid from "uniqid"
import {useDispatch, useSelector} from 'react-redux';
import {addNewTodo, deleteTodo} from "./actions"


const Todo = () => {
    const [value, setValue] = useState('')
    const todos = useSelector((state) => state.todos.list)
    const dispatch = useDispatch()
    console.log("todo: ", todos)

    const handleSubmit = (e) => {
      e.preventDefault()
      setValue("")
      let uid = uniqid()
      dispatch(addNewTodo({value, uid}))
    }

    return(
        <div>
           <h3>To-do list:</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="set number" onChange={(e) => setValue(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
          {todos.length ? (
            <ol>
              {todos.map((todo) => (
                  <li>
                    <div >{todo['value']}</div>
                    <button onClick={ () => (dispatch(deleteTodo(todo['uid'])))}>delete</button>
                   </li>
              ))}
            </ol>
          ) : (
            <h3>no todo yet</h3>
          )
        }
        </div>  
    )
}
export default Todo;