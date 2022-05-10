import {useDispatch, useSelector} from 'react-redux';
import {incrementAction} from "./actions"
import Button2 from "./button2"

function App(props) {
  const counter = useSelector((state) => state.count)
  const dispatch = useDispatch()

  return (
    <div className="App">
        <p>counter: {counter}</p>
        <button onClick={()=> {dispatch(incrementAction)}}>increment</button>
        <Button2/>
    </div>
  );
}

// const mapStateToProps = (state) => ({
//   count: state.count
// })

// const mapDispatchToProps = (dispatch, state) => ({
//   incrementCount: () => {dispatch(incrementAction)}
// })

export default App;
