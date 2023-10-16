"use client";

import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setTheme } from "@/app/redux/features/theme/theme-slice";
import { BiMoon, BiSun } from "react-icons/bi";

export const Theme = () => {
  // redux
  const { theme } = useAppSelector((state) => state.theme);

  // hooks
  const dispatch = useAppDispatch();

  const themeHandler = (): void => {
    dispatch(setTheme());
  };

  return (
    <button onClick={themeHandler} className="text-[#1a1f24b0]">
      {theme === "dark" ? (
        <BiSun size={22} className="text-gray-300" />
      ) : (
        <BiMoon size={22} />
      )}
    </button>
  );
};
