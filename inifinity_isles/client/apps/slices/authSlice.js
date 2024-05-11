import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  reset: [],
  products: [],
  userProducts: [],
  product: [],
  isAuth: JSON.parse(localStorage.getItem("auth")) ?? [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },
    setError: (state, action) => {
      state.isLoading = false;
      state.isError = action.payload;
    },
    setAuth: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.isAuth = action.payload;
    },
    setReset: (state) => {
      state.reset = initialState;
    },
    setUserProducts: (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.userProducts = action.payload;
    }
  },
});

export const { setLoading, setError, setAuth, setReset } = authSlice.actions;

export default authSlice.reducer;
