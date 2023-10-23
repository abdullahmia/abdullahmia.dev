"use client";

export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: "full" | "half" | "third" | "quarter" | "auto";
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  width = "full",
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className={`
          border px-3 py-2 rounded focus:outline-none dark:border-[#202021] dark:text-[#999999] dark:bg-transparent
          ${
            width === "full"
              ? "w-full"
              : width === "half"
              ? "w-1/2"
              : width === "third"
              ? "w-1/3"
              : width === "quarter"
              ? "w-1/4"
              : width === "auto"
              ? "w-auto"
              : ""
          }
        
        `}
      />
    </div>
  );
};
