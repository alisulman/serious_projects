import { configureStore, combineReducers } from '@reduxjs/toolkit'
import product from './slices/productSlice'

const reducer = combineReducers({
    product,
})

export const store = configureStore({ reducer })