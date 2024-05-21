import axios from "axios";
import {
  setBasket,
  setError,
  setIsFav,
  setLoading,
  setPrice,
  setQuantity,
} from "../slices/cartSlice";

export const AddToCart = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/add-to-cart/${id}/${token}`;
    const response = await axios.post(url);
    dispatch(setQuantity(response.data.totalQuantity));
    dispatch(setPrice(response.data.totalPrice));
    console.log(response);
    localStorage.setItem(
      "totalquantity",
      JSON.stringify(response.data.totalQuantity)
    );
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};
export const GetCartProducts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/get-all-cart/${token}`;
    const response = await axios.get(url);
    const items = response.data.data;
    dispatch(setBasket(items));
    dispatch(setPrice(response.data.totalPrice));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};
export const IcrementCart = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/increment-cart/${id}/${token}`;
    const response = await axios.get(url);
    dispatch(setQuantity(response?.data?.totalQuantity));
    dispatch(setPrice(response?.data?.totalPrices));
    localStorage.setItem(
      "totalquantity",
      JSON.stringify(response?.data?.totalQuantity)
    );
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};
export const removeFromCart = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/remove-from-cart/${id}`;
    const response = await axios.delete(url);
    console.log(response)
  } catch (error) {
    setError(
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : "Internal Server Error"
    );
  }
};
export const setGetFavorite = (product) => async (dispatch) => {
  dispatch(setLoading());
  try {
    dispatch(setIsFav(product));
  } catch (error) {
    dispatch(
      setError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
          ? error.message
          : "Internal Server Error"
      )
    );
  }
};
