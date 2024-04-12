import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError: false,
    isUser: '',
    auth: JSON.parse(localStorage.getItem('auth')) ?? [],
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        registorySuccess: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isUser = action.payload
        },
        registoryFailure: (state, action) => {
            state.isLoading= false
            state.isError = action.payload
        },
        setAuth: (state, action) => {
            state.auth = action.payload
        }
    }
})

export const { registorySuccess, registoryFailure, setAuth } = authSlice.actions

export default authSlice.reducer