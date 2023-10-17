import { BiLoaderAlt } from "react-icons/bi";

interface LoaderProps {
  size?: number;
  color?: string;
}

export const Loader = ({ size, color }: LoaderProps) => {
  return (
    <BiLoaderAlt
      className={`animate-spin text-[${color || "#ddd"}]`}
      size={size || 15}
    />
  );
};
