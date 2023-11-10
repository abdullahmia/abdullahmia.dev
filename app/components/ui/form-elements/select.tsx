"use client";

import { useTheme } from "next-themes";
import Select, { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

export interface SelectInputProps {
  options: {
    label: string;
    value: string;
  }[];
  onChange?: (value: any) => void;
  defaultValue?: {
    label: string;
    value: string;
  }[];
}

const animatedComponents = makeAnimated();

export const SelectInput = ({
  defaultValue,
  options,
  onChange,
}: SelectInputProps) => {
  const { theme } = useTheme();

  // custom styles
  const customStyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      border: `1px solid ${theme === "light" ? "#e5e7eb" : "#4b5563"}`,
      borderRadius: "5px",
      backgroundColor: theme === "light" ? "#fff" : "transparent",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "blue" : "white",
      color: state.isSelected ? "white" : "black",
    }),
  };

  return (
    <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      styles={customStyles}
      options={options}
      defaultValue={defaultValue}
      onChange={onChange}
    />
  );
};
