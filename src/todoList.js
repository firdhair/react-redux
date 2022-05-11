import {useState} from "react"
import React from "react"
import uniqid from "uniqid"
import {useDispatch, useSelector} from 'react-redux';
import {addNewTodo, deleteTodo} from "./actions"


const Todo = () => {
    const [task, setTask] = useState('')
    const todos = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    console.log("todo: ", todos)

    const handleSubmit = (e) => {
      e.preventDefault()
      setTask("")
      let id = uniqid()
      dispatch(addNewTodo(task, id))
    }

    return(
        <div>
           <h3>To-do list:</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder="set number" onChange={(e) => setTask(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
          {todos.length ? (
            <ol>
              {todos.map((todo) => (
                  <li>
                    <div >{todo['todo']}</div>
                    <button onClick={ () => (dispatch(deleteTodo(todo['id'])))}>delete</button>
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