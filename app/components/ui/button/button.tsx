"use client";

interface ButtonProps {
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  varriant?: "primary" | "secondary" | "danger";
  width?: "full" | "auto";
}

export const Button = (props: ButtonProps) => {
  return (
    <button
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type || "button"}
      className={`${
        props.width === "full" ? "w-full" : "w-auto"
      } px-5 py-2 rounded-md text-white font-medium focus:outline-none ${
        props.varriant === "primary"
          ? "bg-[#4595D0] hover:bg-[#1B75E8]"
          : props.varriant === "secondary"
          ? "bg-[#F2F2F2] text-gray-800 hover:bg-[#E8E8E8]"
          : "bg-[#FF4D4D] hover:bg-[#E83A3A]"
      }`}
    >
      {props.children}
    </button>
  );
};
