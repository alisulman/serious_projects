import { decrementCartItem, incrementCartItem, removeItemFromBasket, setLoading, setQuantity, setTotalPrice } from "../slices/cartSlice";


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