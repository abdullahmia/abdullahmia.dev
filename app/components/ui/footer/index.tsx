"use client";

import { BsArrowUp } from "react-icons/bs";

export const Footer = () => {
  const scrollToTop = (): void => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="container flex items-center justify-between py-10 lg:px-0 px-5">
      <div>
        <p className="text-[#727a80] text-[14px]">
          Copyright © 2023 Abdullah Mia
        </p>
      </div>
      <div>
        <button
          onClick={scrollToTop}
          className="border p-4 rounded-full hover:bg-[#f1eded] dark:text-gray-200 dark:border-[#202021]  dark:hover:bg-[#1d1d1e]"
        >
          <BsArrowUp />
        </button>
      </div>
    </div>
  );
};
