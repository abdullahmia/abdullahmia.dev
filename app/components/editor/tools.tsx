import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Header from "@editorjs/header";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Paragraph from "@editorjs/paragraph";

export const EDITOR_JS_TOOLS = {
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  checkList: CheckList,
  list: List,
  header: Header,
  delimiter: Delimiter,
  link: Link,
};
