import {configureStore, combineReducers} from '@reduxjs/toolkit'
import User from './slices/authSlice'
import Product from './slices/prodSlice';

const reducer = combineReducers({
    User,
    Product,
})

const store = configureStore({reducer})

export default store;