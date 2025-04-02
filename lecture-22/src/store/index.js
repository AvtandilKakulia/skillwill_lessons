import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoReducer from './todo/todo.slice'
import counterReducer from'./counter/counter.slice'
import todosReducer from './todos/todos.slice'

const rootReducer = combineReducers({
    todo: todoReducer,
    counter: counterReducer,
    todos: todosReducer
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true
})
