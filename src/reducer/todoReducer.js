const initialState = {
    todo: []
}

export default function todoReducer(state = initialState, action) {
   console.log("todo reducer", action.type)
   switch(action.type){
       case 'new-todo':
           console.log("ini new todo")
           console.log("typeof todo", action.payload)
        return {
            ...state, 
            todo:  action.payload
        }
        default: 
            return state;
   }
}