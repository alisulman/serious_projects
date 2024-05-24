import { decrementCartItem, incrementCartItem, removeItemFromBasket, setLoading, setQuantity, setTotalPrice } from "../slices/cartSlice";
import axios from 'axios'


export const removeFromCart = () => async (dispatch) => {
    dispatch(setLoading())
    dispatch(removeItemFromBasket())
}

export const setIncrement = (id) => async (dispatch) => {
    dispatch(setLoading())
    dispatch(incrementCartItem(id))
    dispatch(setTotalPrice())
    dispatch(setQuantity())
}

export const setDecrement = (id) => async (dispatch) => {
    dispatch(setLoading())
    dispatch(decrementCartItem(id))
    dispatch(setTotalPrice())
    dispatch(setQuantity())
}

export const DoFav = (id) => async (dispatch) => {
    dispatch(setLoading())
    const auth = JSON.parse(localStorage.getitem('auth'))
    const token = auth?.token
    const url = `http://localhost:2000/api/add-to-favourite-list/${id}/${token}`
    const response = await axios.get(url)
    console.log(response.data.data)
}