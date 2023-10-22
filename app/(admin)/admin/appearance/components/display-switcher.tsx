"use client";

import { Images } from "@/assets";
import { useTheme } from "next-themes";
import Image from "next/image";

export const DisplaySwitcher = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="mt-3">
      <h2 className="text-[15px] text-[#1a1f24] font-semibold dark:text-white">
        Appearance
      </h2>
      <p className="text-[13px] text-[#51595f] dark:text-[#999999]">
        You’ve two modes to choose from.
      </p>

      <div className="flex items-center gap-6">
        <div onClick={toggleTheme} className="w-72 space-y-3 cursor-pointer">
          <Image
            src={Images.DarkWebstieThumbnailImg}
            alt="dark theme"
            className="w-72 h-40 rounded-md mt-3 border"
          />
          <div className="flex items-center justify-center gap-3">
            <div
              className={`w-6 h-6 border-2 rounded-full  ${
                theme === "dark" ? "border-[#4595D0]" : ""
              } flex items-center justify-center`}
            >
              <div
                className={`w-4 h-4 ${
                  theme === "dark" ? "bg-[#4595D0]" : "bg-transparent"
                } rounded-full`}
              ></div>
            </div>
            <p className="text-[14px]  text-[#1a1f24]">Dark</p>
          </div>
        </div>

        <div onClick={toggleTheme} className="w-72 space-y-3 cursor-pointer">
          <Image
            src={Images.LightWebstieThumbnailImg}
            alt="dark theme"
            className="w-72 h-40 rounded-md mt-3"
          />
          <div className="flex items-center justify-center gap-3">
            <div
              className={`w-6 h-6 border-2 rounded-full  ${
                theme === "light" ? "border-[#4595D0]" : ""
              } flex items-center justify-center`}
            >
              <div
                className={`w-4 h-4 ${
                  theme === "light" ? "bg-[#4595D0]" : "bg-transparent"
                } rounded-full`}
              ></div>
            </div>
            <p className="text-[14px]  text-[#1a1f24]">Light</p>
          </div>
        </div>
      </div>
    </div>
  );
};
