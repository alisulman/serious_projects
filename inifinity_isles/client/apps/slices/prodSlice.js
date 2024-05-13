import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: JSON.parse(localStorage.getItem("products")) || [],
  userProducts: [],
  product: [],
  basket: JSON.parse(localStorage.getItem("cart")) || [],
  quantity: 0,
  tester: "",
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
      const newItem = action.payload;
      const existItemIndex = state.basket.findIndex(
        (item) => item._id === newItem._id
      );
      if (existItemIndex === -1) {
        // Item does not exist in basket
        state.basket.push({ ...newItem, quantity: 1 }); // Add new item to cart
      } else {
        state.basket[existItemIndex].quantity += 1; // Increase quantity of existing item
      }
      state.quantity += 1;
      // localStorage.setItem("cart", JSON.stringify(state.basket));
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
