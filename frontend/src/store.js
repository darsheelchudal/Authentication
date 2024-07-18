import { asyncThunkCreator, configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/slices/authSlice";
import { authApi } from "./services/authApi";

const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
  devTools: true,
});

export default store;
