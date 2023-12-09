import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  
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