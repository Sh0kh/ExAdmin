import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isActive: false, // начальное состояние
};

const stateSlice = createSlice({
  name: 'state',
  initialState,
  reducers: {
    toggleState: (state) => {
      state.isActive = !state.isActive; // переключаем значение
    },
  },
});

export const { toggleState } = stateSlice.actions;

export default stateSlice.reducer;
