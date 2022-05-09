import {connect} from 'react-redux';
import {incrementAction} from "./actions"
import Button2 from "./button2"

function App(props) {
  return (
    <div className="App">
        <p>counter: {props.count}</p>
        <button onClick={()=>{props.incrementCount()}}>increment</button>
        <Button2/>
    </div>
  );
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch, state) => ({
  incrementCount: () => {dispatch(incrementAction)}
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
