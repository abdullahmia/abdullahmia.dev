import { useEffect, useState } from "react";

export interface EditorProps {
  height?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
}

const Editor = (props: EditorProps) => {
  const [rows, setRows] = useState<number>(1);

  useEffect(() => {
    const numLines = (props.value.match(/\n/g) || []).length + 1;
    setRows(numLines > 1 ? numLines : 1);
  }, [props.value]);

  return (
    <textarea
      className={`
      w-full border-none focus:outline-none p-3 rounded resize-none
      ${props.height ? "" : "h-56"}
    `}
      style={{ height: props.height }}
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => {
        const inputValue = e.target.value;
        const newLineValue = inputValue.replace(/\r?\n/g, "\r\n");
        props.onChange(newLineValue);
      }}
    />
  );
};

export default Editor;
