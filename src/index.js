import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './store'

import './api/server'
console.log("initial state", store.getState())

const unsubscribe = store.subscribe(() => //this will return a function to unsubcribe
console.log("state after dispatch", store.getState())
)

//lets dispatch some actions now

store.dispatch({type: 'todos/todoAdded', payload: 'learn about actions'})
store.dispatch({type: 'todos/todoAdded', payload: 'learn about store'})
store.dispatch({type: 'todos/todoAdded', payload: 'learn about reducer'})

store.dispatch({type: 'todos/todosToggled', payload: 0})
store.dispatch({type: 'todos/todosToggled', payload: 1})

store.dispatch({type: 'filters/statusFilterChanged', payload: 'Active'})

store.dispatch({type: 'filters/statusFilterChanged', payload: {color: 'red',changeType: 'added'}})


unsubscribe() //stops listening to state updates here

//testing if it still listens to state updates here
store.dispatch({ type: 'todos/todoAdded', payload: 'Try creating a store' })


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
