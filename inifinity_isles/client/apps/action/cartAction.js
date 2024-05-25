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
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/add-to-favourite-list/${id}/${token}`
    await axios.get(url)
}

export const FetchFav = () => async (dispatch) => {
    dispatch(setLoading())
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/all-favourite-list/${token}`
    const response = await axios.get(url)
    localStorage.setItem('favourites', JSON.stringify(response.data.data))
}