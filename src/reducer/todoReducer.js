const initialState = {
    list: [
        {
            uid: '90',
            value: 'makan',
        }
    ]
}

export default function todoReducer(state = initialState, action) {
    const {type, payload} = action
    switch(type){
       case 'new-todo':
            return {
                ...state,
                list: [...state.list, payload]
            }

        case 'delete-todo': 
            console.log("ini payload delete ", payload)
            const todos = [...state.list]
            const updatedTodos = todos.filter((todos) => todos.uid !== payload)
           return {
               ...state, 
               list: updatedTodos
           }
            
        default: 
            return state;
   }
}