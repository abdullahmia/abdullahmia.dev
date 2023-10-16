export interface LabelProps {
  children: React.ReactNode;
  withAsterisk?: boolean;
}

export const Label = (props: LabelProps) => {
  return (
    <label
      className={`block mb-1 font-medium text-[14px] text-gray-700 dark:text-[#D4D4D4]`}
    >
      {props.children}
      {props.withAsterisk && (
        <span className="text-gray-800" title="Required">
          {" "}
          *
        </span>
      )}
    </label>
  );
};
