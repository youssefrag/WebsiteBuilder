import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./root-reducer";

import storage from "redux-persist/es/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
  key: "state",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
