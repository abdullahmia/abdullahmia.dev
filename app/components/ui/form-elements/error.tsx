export interface FromErrorProps {
  children?: string;
}

export const FormError = (props: FromErrorProps) => {
  return (
    <div>
      <p className="text-[12px] text-[#b43c3c]">{props.children}</p>
    </div>
  );
};
