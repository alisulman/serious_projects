import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  reset: [],
  users: JSON.parse(localStorage.getItem('Top Vendors')) || [],
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
    setUsers: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.users = action.payload;
    },
  },
});

export const { setLoading, setError, setAuth, setReset, setUsers } =
  authSlice.actions;

export default authSlice.reducer;
