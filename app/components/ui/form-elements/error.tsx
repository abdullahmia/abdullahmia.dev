export interface FromErrorProps {
  children?: string;
}

export const FormError = (props: FromErrorProps) => {
  return (
    <div>
      <p className="text-[12px] text-[#ff0000]">{props.children}</p>
    </div>
  );
};
