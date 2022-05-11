const initialState = {
    list: [],
    loading: false,
    error: ''
}

export default function postReducer(state = initialState, action) {
    const {type, payload} = action
    console.log("payload", payload, ", type", type)
   switch(type){
        case 'fetch-start':
            return {
                ...state,
                loading: true
            }
        case 'fetch-success':
            return {
                ...state,
                loading: false,
                list: payload,
                error: ''
            }
        case 'fetch-failed':  
            return {
                ...state,
                loading: false,
                error: payload
            }
        default: 
            return state;
   }
}