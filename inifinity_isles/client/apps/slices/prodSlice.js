import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: JSON.parse(localStorage.getItem("products")) || [],
  userProducts: [],
  product: [],
  basket: JSON.parse(localStorage.getItem("basket")) || [],
  quantity: 0,
};

const authSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    setUserProducts: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.userProducts = action.payload;
    },
    setProduct: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.product = action.payload;
    },
    resetProduct: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.product = [];
    },
    setProducts: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.products = action.payload;
    },
    addToCart: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.basket = action.payload;
      const basketId = state.basket.
    },
  },
});

export const {
  setLoading,
  setError,
  setUserProducts,
  setProduct,
  resetProduct,
  setProducts,
  addToCart,
} = authSlice.actions;

export default authSlice.reducer;
