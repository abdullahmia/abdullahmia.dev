export interface EditorProps {
  height?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor = (props: EditorProps) => {
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    const newLineValue = inputValue.replace(/\r?\n/g, "\r\n");
    props.onChange(newLineValue);
  };

  return (
    <textarea
      className={`
      w-full border-none focus:outline-none p-3 rounded resize-none
      ${props.height ? "" : "h-56"}
    `}
      style={{ height: props.height }}
      placeholder={props.placeholder}
      value={props.value}
      onChange={onChange}
    />
  );
};

export default Editor;
