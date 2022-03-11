import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { candidatesApi } from "../services/fec";

export const store = configureStore({
  reducer: {
    [candidatesApi.reducerPath]: candidatesApi.reducer
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(candidatesApi.middleware)
})