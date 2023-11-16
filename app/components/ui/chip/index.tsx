interface ChipProps {
  label: string;
  color?: "primary" | "secondary" | "danger";
}

export const Chip = ({ label, color }: ChipProps) => {
  return (
    <span className={`bg-[#27769e] text-xs px-2 py-1 text-gray-200 rounded-md`}>
      {label}
    </span>
  );
};
