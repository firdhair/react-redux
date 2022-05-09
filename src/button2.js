import {connect} from 'react-redux';
import {decrementAction} from "./actions"

const button2 = (props) => {
    return(
        <button onClick={()=>{props.decrementCount()}}>decrement</button>  
    )
}

const mapStateToProps = (state) => ({
  count: state.count
})

const mapDispatchToProps = (dispatch, state) => ({
  decrementCount: () => {dispatch(decrementAction)}
})

export default connect(mapStateToProps, mapDispatchToProps)(button2);