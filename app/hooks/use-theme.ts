"use client";

import { useEffect, useState } from "react";
import { config } from "../constants";
import { useAppDispatch } from "../redux";
import { setInitialtheme } from "../redux/features/theme/theme-slice";

export const useTheme = () => {
  const [isTheme, setIsTheme] = useState<boolean>(false);
  const theme = localStorage?.getItem(config.THEME) || "dark";

  // hooks
  const dispatch = useAppDispatch();

  // root
  const root = document.documentElement;

  useEffect(() => {
    dispatch(setInitialtheme(theme));
    setIsTheme(true);
  }, [dispatch, root.classList, theme]);

  return isTheme;
};
