import { configureStore } from '@reduxjs/toolkit';
import LogedInReducer from "../features/loginCheck/loginSlice"
export const store = configureStore({
  reducer: {
    LogedInReducer: LogedInReducer,
  },
});
