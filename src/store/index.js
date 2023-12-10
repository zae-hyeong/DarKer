import { configureStore } from "@reduxjs/toolkit";

import navReducer from "./nav";
import cartReducer from "./cart";

const store = configureStore({
  reducer: { navControl: navReducer, cartControl: cartReducer },
});

export default store;
