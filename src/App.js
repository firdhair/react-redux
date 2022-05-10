import {useDispatch, useSelector} from 'react-redux';
import {useState} from "react"
import {decrementAction, setCounterAction, addNewTodo} from "./actions"
import Button2 from "./button2"
import Todo from "./todoList"

function App(props) {
  const todo = useSelector((state) => state.todo.todo)
  const dispatch = useDispatch()

  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    //props.set(input)
    setTasks([...tasks, task])
    dispatch(addNewTodo(tasks))
  }

  return (
    <div className="App">
        {/* <p>counter: {counter}</p>
        <button onClick={()=> {dispatch(incrementAction)}}>increment</button>
        <Button2/> */}
        <h3>To-do list:</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" value={task} placeholder="set number" onChange={(e) => setTask(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
          {todo.length ? (
            <ol>
              {todo.map((todo) => (
                <li>{todo}</li>
              ))}
            </ol>
          ) : (
            <h3>no todo yet</h3>
          )
        
        }
        <Todo/>
    </div>
  );
}

export default App;
