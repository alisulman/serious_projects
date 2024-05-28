import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  products: JSON.parse(localStorage.getItem("products")) || [],
  userProducts: [],
  product: [],
  quantity: 0,
  category: JSON.parse(localStorage.getItem('categories')) || [],
  userTopProducts: [],
  topProducts: JSON.parse(localStorage.getItem('topProducts')) || [],
  singleCateProd: [],
  singleCateProdByName: [],
  ShuffleProducts: []
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
    setSCP: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.singleCateProd = action.payload;
    
    },
    setSingleCateProdByName: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.singleCateProdByName = action.payload;
    },
    setShuffleProds:(state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.ShuffleProducts = action.payload;
    }
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
  setSCP,
  setSingleCateProdByName,
  setShuffleProds
} = authSlice.actions;

export default authSlice.reducer;
