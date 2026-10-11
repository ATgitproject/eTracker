import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSessionDataReducer from "../slices/userSessionDataSlice";
import tableDataSlice from "../slices/tableDataSlice";
import formDataSlice from "../slices/formDataSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["userSessionData"],
};

const rootReducer = combineReducers({
  userSessionDataReducer,
  formDataSlice,
  tableData: tableDataSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const reduxStore = configureStore({
  reducer: persistedReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(reduxStore);
