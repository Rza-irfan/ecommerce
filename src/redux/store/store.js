// store.js

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../reducer/reducer'

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
