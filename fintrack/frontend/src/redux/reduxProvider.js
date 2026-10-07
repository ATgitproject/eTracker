"use client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { reduxStore, persistor } from "./store/store.js";

const ReduxProvider = ({ children }) => {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};

export default ReduxProvider;
