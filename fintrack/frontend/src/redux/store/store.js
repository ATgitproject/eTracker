import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSessionDataReducer from "../slices/userSessionDataSlice";

const rootReducer = combineReducers({
  userSessionDataReducer,
});

export const reduxStore = configureStore({
  reducer: rootReducer,
  devTools: true,
});
