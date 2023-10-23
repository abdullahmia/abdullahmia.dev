"use client";

import { useOutsideClick } from "@/app/hooks";
import { useRef, useState } from "react";

export interface DropdownProps {
  children?: React.ReactNode;
  actionElement?: React.ReactNode;
}

export const Dropdown = ({ children, actionElement }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleDropdown = (): void => setIsOpen(!isOpen);
  const outsideRef = useRef(null);

  useOutsideClick(outsideRef, () => {
    if (isOpen) {
      setIsOpen(false);
    }
  });

  return (
    <div ref={outsideRef} className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          type="button"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {actionElement}
        </button>
      </div>

      <div
        className={`origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="py-2 px-2 rounded-sm bg-white ring-1 ring-black ring-opacity-5 shadow-xs dark:bg-[#101011]"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          onClick={toggleDropdown}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
