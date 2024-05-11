import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  userProducts: [],
  product: [],
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
        state.products = action.payload;
    }
  },
});

export const { setLoading, setError, setUserProducts, setProduct } = authSlice.actions;

export default authSlice.reducer;
