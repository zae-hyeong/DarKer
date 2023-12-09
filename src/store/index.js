import { configureStore } from '@reduxjs/toolkit';

import navReducer from './nav';

const store = configureStore({
  reducer: { navControl: navReducer }
});


export default store;