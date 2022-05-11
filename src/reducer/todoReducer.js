const initialState = []

export default function todoReducer(state = initialState, action) {
   console.log("todo reducer", action)
   console.log("ini state", state)
   console.log("state length", state.length)
   switch(action.type){
       case 'new-todo':
           const tes1 = {
               todo: action.payload,
               id: action.id
           }
            return ([...state, tes1])

        case 'delete-todo': 
            const todos = state
            const updatedTodos = todos.filter((todos) => todos['id'] !== action.id)
            return (updatedTodos)
            
        default: 
            return state;
   }
}