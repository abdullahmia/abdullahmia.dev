"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BiMoon, BiSun } from "react-icons/bi";

export const ThemeSwitcher = () => {
  // Local state
  const [mounted, setMounted] = useState<boolean>(false);

  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) return null;
  return (
    <button onClick={toggleTheme} className="text-[#1a1f24b0]">
      {theme === "dark" ? (
        <BiSun size={22} className="text-gray-300" />
      ) : (
        <BiMoon size={22} />
      )}
    </button>
  );
};
