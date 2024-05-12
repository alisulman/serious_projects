import axios from "axios";
import {
  addToCart,
  resetProduct,
  setError,
  setLoading,
  setProduct,
  setProducts,
  setUserProducts,
} from "../slices/prodSlice";

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
    const url = `http://localhost:2000/api/fetch-all-user-product/${token}`;
    const response = await axios.get(url);
    dispatch(setUserProducts(response.data.data));
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

export const fetchSingleProduct = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/fetch-single-product/${id}`;
    const response = await axios.get(url);
    dispatch(setProduct(response.data.data));
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

export const updateProduct =
  (id, title, description, stock, price, category, images) =>
  async (dispatch) => {
    try {
      const url = `http://localhost:2000/api/update-product/${id}`;
      const response = await axios.put(url, {
        title,
        description,
        stock,
        price,
        category,
        images,
      });
      dispatch(setProduct(response.data.data));
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

export const cancelProduct = () => (dispatch) => {
  dispatch(resetProduct());
};

export const fetchAllProducts = () => async (dispatch) => {
  try {
    const url = `http://localhost:2000/api/fetch-all-product`;
    const response = await axios.get(url);
    const products = response.data.data;
    dispatch(setProducts(products));
    localStorage.setItem("products", JSON.stringify(products));
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

export const BasketItems = (item) => async (dispatch) => {
  try {
    dispatch(addToCart(item))
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
