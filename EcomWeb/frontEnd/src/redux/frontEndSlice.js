import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  value: 0, // Example property
};

// Create the slice
const frontEndSlice = createSlice({
  name: 'frontEnd',
  initialState,
  reducers: {
    // Define your actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

// Export actions
export const { increment, decrement, reset } = frontEndSlice.actions;

// Export reducer
export default frontEndSlice.reducer;
