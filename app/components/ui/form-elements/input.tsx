"use client";

export interface InputProps {
  type?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  type,
  name,
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || ""}
        className="border w-full px-3 py-2 rounded focus:outline-none dark:border-[#202021] dark:text-[#999999] dark:bg-transparent"
      />
    </div>
  );
};
