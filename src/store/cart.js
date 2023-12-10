import { createSlice } from "@reduxjs/toolkit";
import { CartItem } from "../public/class";

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: "cartControl",
  initialState,

  reducers: {
    addCart(state, action) {
      const productIndex = state.cartList.findIndex(
        (element) => element.productId === action.payload.productId
      );
      if (productIndex === -1) {
        state.cartList.push(
          new CartItem({
            productId: action.payload.productId,
            productName: action.payload.productName,
            productPrice: action.payload.productPrice,
            deleveryFee: action.payload.deleveryFee,
            productImg: action.payload.productImg,
            amount: 1,
          })
        );
      } else {
        state.cartList[productIndex].amount += 1;
      }
    },
  },
});

export const cartAction = cartSlice.actions;
export default cartSlice.reducer;
