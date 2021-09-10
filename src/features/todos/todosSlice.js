

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ]
  
  function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
  
  export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case 'todos/todoAdded': {
            // Can return just the new todos array - no extra object around it
            return [
              ...state,
              {
                id: nextTodoId(state),
                text: action.payload,
                completed: false
              }
            ]
          }
          case 'todos/todoToggled': {
            return state.map(todo => {
              if (todo.id !== action.payload) {
                return todo
              }
      
              return {
                ...todo,
                completed: !todo.completed
              }
            })
          }

          case 'todos/colorSelected' :{
            return state.map(todo => {
              if(todo.id !== action.id){//if this is not a todo item we looking for leave it as it is
                return todo
              }

              return {
                ...todo,
                color:action.payload  //we have found the todo and update it
              }
              
            })
          }

          case 'todos/todoDeleted': {
            return state.filter(todo => {
             return todo.id !== action.id
            })
          }

          case 'todos/allCompleted':{
            return state.map(todo => {
             return todo.completed ? true : true
            })

          }
      default:
        return state
    }
  }