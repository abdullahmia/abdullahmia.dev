"use client";

import { Loader } from "../loader";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  varriant?:
    | "primary"
    | "secondary"
    | "danger"
    | "ghost"
    | "outline"
    | "no-styled";
  width?: "full" | "auto";
  icon?: React.ReactNode;
  fontSize?: "sm" | "md" | "lg";
  color?:
    | "danger"
    | "primary"
    | "secondary"
    | "ghost"
    | "outline"
    | "no-styled";
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type || "button"}
      className={`${
        props.varriant === "primary"
          ? "bg-[#4595D0] text-white"
          : props.varriant === "secondary"
          ? "bg-[#F2F2F2] text-[#4595D0]"
          : props.varriant === "danger"
          ? "bg-[#F87171] text-white"
          : props.varriant === "ghost"
          ? "bg-transparent text-gray-300 dark:text-gray-200"
          : props.varriant === "outline"
          ? "bg-white text-[#4e5052] border dark:border-gray-700 dark:bg-[#101011]"
          : props.varriant === "no-styled"
          ? "text-gray-800 px-0 py-0"
          : "bg-[#4595D0] text-white"
      } ${
        props.width === "full" ? "w-full" : "w-auto"
      } rounded-md py-2 px-4 flex justify-center items-center gap-2 transition-all duration-200
      ${
        props.fontSize === "sm"
          ? "text-sm"
          : props.fontSize === "md"
          ? "text-base"
          : "text-lg"
      }
      
      ${props.color === "danger" ? "text-red-400" : "text-gray-700"}
      
      `}
    >
      {props.loading ? <Loader size={18} /> : props.icon}
      {props.children}
    </button>
  );
};
