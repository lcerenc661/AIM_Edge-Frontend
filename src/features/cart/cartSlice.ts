import { createSlice } from "@reduxjs/toolkit";

const initialState: any[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      state.push({ product, quantity });
    },

    clearCart: (state) => {
      state.splice(0, state.length);
    },
  },
});

export const { addToCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
