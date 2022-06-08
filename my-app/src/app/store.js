import { configureStore } from "@reduxjs/toolkit";
import { candidatesApi } from "../services/fec";

export const store = configureStore({
  reducer: {
    [candidatesApi.reducerPath]: candidatesApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(candidatesApi.middleware),
});
