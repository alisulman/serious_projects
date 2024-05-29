import { decrementCartItem, incrementCartItem, removeItemFromBasket, setFavourite, setLoading, setQuantity, setTotalPrice } from "../slices/cartSlice";
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
    dispatch(setLoading())
    const response = await axios.get(`http://localhost:2000/api/all-favourite-list/${token}`)
    dispatch(setFavourite(response.data.data))
    localStorage.setItem('favourites', JSON.stringify(response.data.data))
}

export const fetchFav = () => async(dispatch) => {
    dispatch(setLoading())
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const response = await axios.get(`http://localhost:2000/api/all-favourite-list/${token}`)
    dispatch(setFavourite(response.data.data))
    localStorage.setItem('favourites', JSON.stringify(response.data.data))
}

export const RemoveFav = (id) => async (dispatch) => {
    dispatch(setLoading())
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/remove-from-favourite-list/${id}/${token}`
    await axios.delete(url)
    dispatch(setLoading())
    const response = await axios.get(`http://localhost:2000/api/all-favourite-list/${token}`)
    dispatch(setFavourite(response.data.data))
    localStorage.setItem('favourites', JSON.stringify(response.data.data))
}

export const savenUpdateReceipt = (product) => async (dispatch) => {
    dispatch(setLoading());
    const url = `http://localhost:2000/api/receiptSavenUPload`;
    await axios.post(url, product);
    localStorage.removeItem("cart");
    localStorage.removeItem("totalQty");
    localStorage.removeItem("totalPrice");
    dispatch(setLoading());
  };