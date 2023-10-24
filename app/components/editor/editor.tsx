import EditorJS from "@editorjs/editorjs";
import { memo, useEffect, useRef } from "react";
import { EDITOR_JS_TOOLS } from "./tools";

const Editor = ({
  data,
  onChange,
  editorblock,
}: {
  data: any;
  onChange: any;
  editorblock: any;
}) => {
  const ref = useRef();
  //Initialize editorjs
  useEffect(() => {
    //Initialize editorjs if we don't have a reference
    if (!ref.current) {
      const editor = new EditorJS({
        holder: editorblock,

        tools: EDITOR_JS_TOOLS,
        data: data,
        async onChange(api, event) {
          const data = await api.saver.save();
          onChange(data);
        },
      });
      ref.current = editor;
    }

    //Add a return function to handle cleanup
    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, []);
  return <div id={editorblock} />;
};

export default memo(Editor);
