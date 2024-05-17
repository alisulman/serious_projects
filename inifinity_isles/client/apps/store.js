import {configureStore, combineReducers} from '@reduxjs/toolkit'
import User from './slices/authSlice'
import Product from './slices/prodSlice';
import Cart from './slices/cartSlice';

const reducer = combineReducers({
    User,
    Product,
    Cart,
})

const store = configureStore({reducer})

export default store;