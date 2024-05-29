import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  isLoading: false,
  isError: false,
  cartProduct: JSON.parse(localStorage.getItem('cart')) || [],
  totalQuantity: JSON.parse(localStorage.getItem('totalQty')) || 0,
  totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0,
  isFavourite: JSON.parse(localStorage.getItem("favourites")) || [],
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
    addItemToBasket: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const check = state.cartProduct.some(
        (item) => item.id === action.payload.id
      );
      if (check) {
        const index = state.cartProduct.findIndex(
          (item) => item.id === action.payload.id
        );
        let qty = state.cartProduct[index].qty;
        if (qty === state.cartProduct[index].stock) {
          toast("Out of stock");
        } else {
          const newQty = qty + 1;
          state.cartProduct[index].qty = newQty;
          const total = state.cartProduct[index].price * newQty;
          state.cartProduct[index].total = total;
          const totaling = state.cartProduct[index].price;
          state.totalPrice = state.totalPrice + totaling;
          state.totalQuantity = state.totalQuantity + 1
          toast('One item add in cart')
          localStorage.setItem('cart', JSON.stringify(state.cartProduct))
          localStorage.setItem('totalQty', JSON.stringify(state.totalQuantity))
          localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
        }
      } else {
        const total = action.payload.price;
        state.cartProduct = [
          ...state.cartProduct,
          { ...action.payload, qty: 1, total: total },
        ];
        state.totalPrice = state.totalPrice + total;
        state.totalQuantity = state.totalQuantity + 1;
        localStorage.setItem('cart', JSON.stringify(state.cartProduct))
        localStorage.setItem('totalQty', JSON.stringify(state.totalQuantity))
        localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
      }
    },
    removeItemFromBasket: (state, action) => {
      state.isLoading = false;
      state.isError = false;
      const index = state.cartProduct.findIndex(
        (item) => item.id === action.payload
      );
      console.log(index)
      const total = state.cartProduct[index].total;
      state.totalPrice = state.totalPrice - total;
      const qty = state.cartProduct[index].qty
      const totalQty = state.totalQuantity - qty
      state.totalQuantity = totalQty;
      state.cartProduct.splice(index, 1);
      localStorage.removeItem('cart')
      localStorage.removeItem('totalQty')
      localStorage.removeItem('totalPrice')
    },
    incrementCartItem: (state, action) => {
      state.isLoading = false;
      const index = state.cartProduct.findIndex(
        (item) => item.id === action.payload
      );
      let qty = state.cartProduct[index].qty;
      const totalQty = qty + 1;
      state.cartProduct[index].qty = totalQty;
      const total = state.cartProduct[index].price * totalQty;
      state.cartProduct[index].total = total;
      localStorage.setItem('cart', JSON.stringify(state.cartProduct))
    },
    decrementCartItem: (state, action) => {
      const index = state.cartProduct.findIndex(
        (item) => item.id === action.payload
      );
      let qty = state.cartProduct[index].qty;
      const totalQty = qty - 1;
      state.cartProduct[index].qty = totalQty;
      const total =
        state.cartProduct[index].total - state.cartProduct[index].price;
      state.cartProduct[index].total = total;
      localStorage.setItem('cart', JSON.stringify(state.cartProduct))
    },
    setTotalPrice: (state) => {
      state.isLoading = false;
      state.isError = false;
      const total = state.cartProduct.reduce((acc, curr) => {
        const totalValue = parseFloat(curr.total);
        return acc + totalValue;
      }, 0);
      state.totalPrice = total;
      localStorage.setItem('totalPrice', JSON.stringify(state.totalPrice))
    },
    setQuantity: (state) => {
      state.isLoading = false;
      state.isError = false;
      const totalQty = state.cartProduct.reduce((acc, curr) => {
        const totalValue = parseFloat(curr.qty);
        return acc + totalValue;
      }, 0);
      state.totalQuantity = totalQty;
      localStorage.setItem('totalQty', JSON.stringify(state.totalQuantity))
    },
    setFavourite: (state, action) => {
      state.isLoading = false,
      state.isError = false,
      state.isFavourite = action.payload
    },
    resetStates: () => {
      localStorage.removeItem('favourites')
      return initialState
    }
  },
});

export const {
  setLoading,
  setError,
  addItemToBasket,
  removeItemFromBasket,
  incrementCartItem,
  decrementCartItem,
  setTotalPrice,
  setQuantity,
  setFavourite,
  resetStates
} = cartSlice.actions;

export default cartSlice.reducer;
