import {combineReducers} from 'redux'

import todosSlice from './features/todos/todosSlice'
import filtersSlice from './features/filters/filtersSlice'


const rootReducer = combineReducers({
 //this function accept an object where key names will become keys in the root state
    todos: todosSlice,
    filters: filtersSlice
})


export default rootReducer