import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: JSON.parse(localStorage.getItem("products")) || [],
  userProducts: [],
  product: [],
  quantity: 0,
  category: [],
  userTopProducts: [],
  topProducts: JSON.parse(localStorage.getItem('topProducts')) || [],
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
    setCategory: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.category = action.payload;
    },
    setUTP: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.userTopProducts = action.payload;
    },
    setTP: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.topProducts = action.payload;
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
  setCategory,
  setUTP,
  setTP,
} = authSlice.actions;

export default authSlice.reducer;
