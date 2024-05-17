import axios from "axios";
import { setBasket, setError, setLoading } from "../slices/cartSlice";

export const AddToCart = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/add-to-cart/${id}/${token}`;
    await axios.post(url);
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
    const items = response.data.data
    dispatch(setBasket(items));
    console.log(items)
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
