import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./features/api/api.slice";
import authSlice from "./features/auth/auth.slice";
import { projectApi } from "./features/project/project.api";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(projectApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
