import { configureStore } from '@reduxjs/toolkit';
import frontEndReducer from './redux/frontEndSlice';

export default configureStore({
  reducer: {
    frontEnd: frontEndReducer,
  },
});
