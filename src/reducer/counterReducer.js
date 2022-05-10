const initialState = {
    count: 0
}

export default function counterReducer(state = initialState, action) {
    console.log("action type", action.type);
    switch(action.type) {
        case 'increment-count' :
            console.log("ini increment", ", count:", state.count)
            return{
                ...state,
                count: state.count + 1
            }
        case 'decrement-count' :
            return{
                ...state,
                count: state.count - 1
            }
        case 'set-count' :
            console.log("ini set count")
            return{
                ...state,
                count: action.payload
            }
        default: 
            return state;
    }
}