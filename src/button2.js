import {useState} from "react"
import {useDispatch, useSelector, connect} from 'react-redux';
import {decrementAction, setCounterAction} from "./actions"

const Button2 = (props) => {
  const [input, setInput] = useState('')
  const counter = useSelector((state)=>state.count)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    //props.set(input)
    dispatch(setCounterAction(input))
  }

    return(
        <div>
          <button onClick={()=> {dispatch(decrementAction)}}>decrement</button>
          <form onSubmit={handleSubmit}>
            <input type="text" value={input} placeholder="set number" onChange={(e) => setInput(e.target.value)}></input>
            <button type="submit">Submit</button>
          </form>
          <p>{input}</p>
        </div>  
    )
}


// const mapDispatchToProps = (dispatch, state) => ({
//   decrementCount: () => {dispatch(decrementAction)},
//   set: (num) => {dispatch(setCounterAction(num))}
// })

//export default connect(null, mapDispatchToProps)(Button2);
export default Button2;