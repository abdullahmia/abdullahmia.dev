import { config } from "@/app/constants";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ThemeState {
  theme: string;
}

const initialState: ThemeState = {
  theme: "light",
};

// root
const root = document.documentElement;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setInitialtheme: (state, action: PayloadAction<string>) => {
      if (action.payload === "dark") {
        state.theme = "dark";
        localStorage.setItem(config.THEME, "dark");
        root.classList.remove("light");
        root.classList.add("dark");
      } else {
        state.theme = "light";
        localStorage.setItem(config.THEME, "light");
        root.classList.remove("dark");
        root.classList.add("light");
      }
    },
    setTheme: (state) => {
      if (state.theme === "dark") {
        state.theme = "light";
        localStorage.setItem(config.THEME, "light");
        root.classList.remove("dark");
        root.classList.add("light");
      } else {
        state.theme = "dark";
        localStorage.setItem(config.THEME, "dark");
        root.classList.remove("light");
        root.classList.add("dark");
      }
    },
  },
});

export const { setInitialtheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
