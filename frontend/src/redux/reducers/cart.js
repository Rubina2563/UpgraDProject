import { createReducer } from "@reduxjs/toolkit";

const initialState = {
  cart: [], // Ensure it's an array
  loading: true,
  error: null,
};

export const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase("AddToCartRequest", (state) => {
      state.loading = true;
    })
    .addCase("AddToCartSuccess", (state, action) => {
      state.loading = false;
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i._id === item._id);
      if (isItemExist) {
        state.cart = state.cart.map((i) =>
          i._id === isItemExist._id ? item : i
        );
      } else {
        state.cart.push(item);
      }
    })
    .addCase("AddToCartFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("RemoveFromCartRequest", (state) => {
      state.loading = true;
    })
    .addCase("RemoveFromCartSuccess", (state, action) => {
      state.loading = false;
      state.cart = state.cart.filter((i) => i._id !== action.payload);
    })
    .addCase("RemoveFromCartFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("fetchCartItemsRequest", (state) => {
      state.loading = true;
    })
    .addCase("fetchCartItemsSuccess", (state, action) => {
      state.loading = false;
      state.cart = action.payload;
    })
    .addCase("fetchCartItemsFail", (state, action) => {
      state.loading = false;
      state.error = action.payload;
    })
    .addCase("clearErrors", (state) => {
      state.error = null;
    });
});
