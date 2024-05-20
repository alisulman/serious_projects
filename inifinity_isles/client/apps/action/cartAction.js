import axios from "axios";
import { setBasket, setError, setIsFav, setLoading } from "../slices/cartSlice";

export const AddToCart = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const urlOne = `http://localhost:2000/api/add-to-cart/${id}/${token}`;
    const urlTwo = `http://localhost:2000/api/get-all-cart/${token}`;
    await axios.get(urlTwo);
    await axios.post(urlOne);
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
    dispatch(setLoading());
    const items = response.data.data;
    dispatch(setBasket(items));
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
export const setGetFavorite = (product) => async (dispatch) => {
  dispatch(setLoading());
  try {
    dispatch(setIsFav(product))
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
