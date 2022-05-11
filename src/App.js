import {useDispatch, useSelector} from 'react-redux';
import React from "react"
//import {decrementAction, setCounterAction, addNewTodo} from "./actions"
import {incrementAction, decrementAction} from "./actions"
import Button2 from "./button2"
import Todo from "./todoList"
import Post from "./Post"

function App(props) {
  const counter = useSelector((state) => state.counter.count)
  //console.log("counter: ", counter)
  const dispatch = useDispatch()

  return (
    <div className="App">
        {/* <p>counter: {counter}</p>
        <button onClick={()=> {dispatch(incrementAction)}}>increment</button>
        <Button2/> */}
          <p>counter: {counter}</p>
          <button onClick={()=> {dispatch(incrementAction)}}>increment</button>
        <Button2/>
       <p>ini app</p>
        {/* <Todo/> */}
        <Post/>
    </div>
  );
}

export default App;
