import { createSlice } from "@reduxjs/toolkit";

export const nav_index = {
  MAIN_PAGE: 10000,
  LOGIN_PAGE: 10011,
  SIGNUP_PAGE: 10012,
  PRODUECT_DETAIL_PAGE: 10020
}

const initialState = { 
  pageIdx: nav_index.MAIN_PAGE,
  isAsideActive: false
};

const navSlice = createSlice({
  name: 'navControl',
  initialState,

	/* action.type은 reducer의 이름으로 자동으로 연결된다. */
  reducers: {
    changeNav(state, action) { state.pageIdx = action.payload },

    setAside(state) { state.isAsideActive = !state.isAsideActive; }
  }
});

export const navActions = navSlice.actions;
export default navSlice.reducer;