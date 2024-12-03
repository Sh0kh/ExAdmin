import { configureStore } from '@reduxjs/toolkit';
import NavbarState from './NavbarSlice'
const store = configureStore({
  reducer: {
    state:NavbarState
    },
});

export default store;
