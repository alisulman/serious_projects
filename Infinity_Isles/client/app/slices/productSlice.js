import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    pagination: {}
}

export const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setLoading: (state) => {
            state.isLoading = false;
        },
        setError: (state, action) => {
            state.isLoading = false,
            state.isError = action.payload
        },
        setProducts: (state, action) => {
            state.isLoading = false,
            state.isError = false,
            state.products = action.payload
        },
        setPagination: (state, action) => {
            state.pagination = action.payload
        }
    }
})

export const {setLoading, setError, setProducts, setPagination} = productSlice.actions

export default productSlice.reducer