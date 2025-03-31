import { createSlice } from '@reduxjs/toolkit'
import { getTodos } from './todos.thunks'

const initialState = {
    todos: [],
    loading: false,
    error: null
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getTodos.pending, (state) => {
                state.loading = true
            })
            .addCase(getTodos.fulfilled, (state, action) => {
                state.loading = false
                state.error = null
                state.todos = action.payload
            })
            .addCase(getTodos.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export default todosSlice.reducer