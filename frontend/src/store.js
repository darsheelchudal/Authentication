import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slices/authSlice";
import { baseApi } from "./services/baseApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [baseApi.reducerPath]: baseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true,
});

export default store;
