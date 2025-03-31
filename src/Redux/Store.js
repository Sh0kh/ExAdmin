import { configureStore } from '@reduxjs/toolkit';
import NavbarState from './NavbarSlice'
import dataReducer from './MyInformation';

const store = configureStore({
  reducer: {
    state: NavbarState,
    data: dataReducer,
  },
});

export default store;
