import {useState} from "react"
import {useDispatch, useSelector, connect} from 'react-redux';
import {decrementAction, setCounterAction} from "./actions"

const Todo = (props) => {
    return(
        <div>
          <ul>
            <li>ya</li>
          </ul>
        </div>  
    )
}


// const mapDispatchToProps = (dispatch, state) => ({
//   decrementCount: () => {dispatch(decrementAction)},
//   set: (num) => {dispatch(setCounterAction(num))}
// })

//export default connect(null, mapDispatchToProps)(Button2);
export default Todo;