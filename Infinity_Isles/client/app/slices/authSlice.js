import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError: false,
    isUser: null,
    isMessage: null,
    auth: null
}

export const authSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        signupPending: (state) => {
            state.isLoading = true;
            state.isError = false
        },
        signupSuccess: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isUser = action.payload
            state.isMessage = action.payload.message
        },
        signupFailure: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        },
        setauth: (state) => {
            state.auth = true
        },
        loginSuccess: (state, action) => {
            state.isLoading = false
            state.isError = false
            state.isUser = action.payload
            state.isMessage = action.payload.message
        },
        loginFailure: (state, action) => {
            state.isLoading = false
            state.isError = action.payload
        }
    }
})

export const {signupPending, signupSuccess, signupFailure, loginSuccess, loginFailure,setauth} = authSlice.actions

export default  authSlice.reducer