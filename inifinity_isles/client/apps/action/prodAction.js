import { setError } from "../slices/authSlice";
import axios from "axios";
import { setProduct, setUserProducts } from "../slices/prodSlice";


export const createProduct =
  (title, description, stock, price, category, images) => async (dispatch) => {
    try {
      const user = JSON.parse(localStorage.getItem("auth"));
      const token = user?.token;
      const url = `http://localhost:2000/api/create-product/${token}`;
      const response = await axios.post(url, {
        title,
        description,
        stock,
        price,
        category,
        images,
      });
      console.log(response);
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

export const fetchUserProducts = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("auth"));
    const token = user?.token;
    const url = `http://localhost:2000/api/fetch-all-user-product/${token}`
    const response = await axios.get(url)
    dispatch(setUserProducts(response.data.data))
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

export const fetchSingleProduct = (id) => async(dispatch) => {
    try {
        const url = `http://localhost:2000/api/fetch-single-product/${id}`
        const response = await axios.get(url)
        dispatch(setProduct(response.data.data))
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
}