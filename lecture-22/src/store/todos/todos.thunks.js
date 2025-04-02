import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodos = createAsyncThunk(
    '/todos/GET',
    async (_, ThunkAPI) => {
        try {
            const res = await fetch('/api/v1/todos', {
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${process.env.REACT_APP_API_KEY}`
                },
            })
            
            const dat = await res.json()

            if (dat) return ThunkAPI.fulfillWithValue(dat.items)
                
        } catch (error) {
            return ThunkAPI.rejectWithValue('Something went wrong!')
        }
    }
)