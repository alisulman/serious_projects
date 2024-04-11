import { configureStore, combineReducers } from '@reduxjs/toolkit'
import product from './slices/productSlice'
import user from './slices/authSlice'

const reducer = combineReducers({
    product,
    user,
})

export const store = configureStore({ reducer })