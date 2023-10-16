import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./features/theme/theme-slice";
// ...

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
