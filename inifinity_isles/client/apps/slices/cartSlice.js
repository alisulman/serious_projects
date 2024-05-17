import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  cartProduct: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    setBasket: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.cartProduct = action.payload;
    },
    setQuantity: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.totalQuantity = action.payload;
    },
    setPrice: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.totalPrice = action.payload;
    },
  },
});

export const { setLoading, setError, setBasket, setQuantity, setPrice } =
  cartSlice.actions;

export default cartSlice.reducer;
