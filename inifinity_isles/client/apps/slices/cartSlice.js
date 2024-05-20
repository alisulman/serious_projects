import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  isError: false,
  cartProduct: [],
  totalQuantity: 0,
  totalPrice: 0,
  isFavourite: JSON.parse(localStorage.getItem('favourites')) || []
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
    setIsFav: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const product = action.payload;
      const newProduct = { ...product, isFavorite: 'yes' };
      const existProd = state.isFavourite.find(item => item._id === product._id);
      if(!existProd){
        state.isFavourite.push(newProduct);
      }
      localStorage.setItem('favourites', JSON.stringify(state.isFavourite))
    },
    removeFav: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const product = action.payload;
      const existProd = state.isFavourite.find(item => item._id === product._id);
      if(existProd){
        state.isFavourite = state.isFavourite.filter(item => item._id!== product._id);
      }
      localStorage.setItem('favourites', JSON.stringify(state.isFavourite));
    }
  },
});

export const { setLoading, setError, setBasket, setQuantity, setPrice, setIsFav } =
  cartSlice.actions;

export default cartSlice.reducer;
