import axios from "axios";
import {
  resetProduct,
  setCategory,
  setError,
  setLoading,
  setProduct,
  setProducts,
  setSCP,
  setSingleCateProdByName,
  setTP,
  setUTP,
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
    dispatch(setLoading());
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

export const removeProduct = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/delete-product/${id}`;
    const response = await axios.delete(url);
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

export const fetchAllCategories = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = "http://localhost:2000/api/all-categories";
    const response = await axios.get(url);
    dispatch(setCategory(response.data.data));
    localStorage.setItem("categories", JSON.stringify(response.data.data));
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

export const fetchTopUserProducts = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/topRated-user-products/${id}`;
    const response = await axios.get(url);
    dispatch(setUTP(response.data.data));
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

export const fetchTopProducts = () => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = "http://localhost:2000/api/topRated-products";
    const response = await axios.get(url);
    dispatch(setTP(response.data.data));
    localStorage.setItem("topProducts", JSON.stringify(response.data.data));
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

export const fetchSingleCateProd = (id) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/category/${id}`;
    const response = await axios.get(url);
    dispatch(setSCP(response.data.data));
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

export const fetchSingleCateProdByName = (Catname) => async (dispatch) => {
  dispatch(setLoading());
  try {
    const url = `http://localhost:2000/api/category-name/${Catname}`;
    const response = await axios.get(url);
    dispatch(setSingleCateProdByName(response.data.data));
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

export const getpdfImageUrl = (url) => async (dispatch) => {
  dispatch(setLoading());
  const response = await axios.post(`http://localhost:2000/api/getImage`, {
    url,
  });
  console.log(response);
};
