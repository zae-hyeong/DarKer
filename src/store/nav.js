import { createSlice } from "@reduxjs/toolkit";

export const nav_index = {
  MAIN_PAGE: 10000,
  LOGIN_PAGE: 10011,
  SIGNUP_PAGE: 10012,
  PRODUECT_DETAIL_PAGE: 10020,
};

const initialState = {
  pageIdx: nav_index.MAIN_PAGE,
  isAsideActive: false,
  selectedProduct: null,
};

const navSlice = createSlice({
  name: "navControl",
  initialState,

  reducers: {
    changeNav(state, action) {
      state.pageIdx = action.payload;
    },
    selectProduct(state, action) {
      state.pageIdx = action.payload.pageIdx;
      state.selectedProduct = action.payload.selectedProduct;
    },
    setAside(state) {
      state.isAsideActive = !state.isAsideActive;
    },
  },
});

export const navActions = navSlice.actions;
export default navSlice.reducer;
