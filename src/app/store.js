import { configureStore } from '@reduxjs/toolkit';
import LogedInReducer from "../features/loginCheck/loginSlice"
import valueSearchReducer from "../features/valueSearch"

export const store = configureStore({
  reducer: {
    LogedInReducer: LogedInReducer,
    valueSearchReducer:valueSearchReducer
  },
});
