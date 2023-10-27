"use client"; // this registers <Editor> as a Client Component
import { BlockNoteEditor } from "@blocknote/core";
import "@blocknote/core/style.css";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";

export interface EditorProps {
  onChange: (value: string) => void;
  initialContent: string;
  editable?: boolean;
}

export default function Editor({
  initialContent,
  onChange,
  editable,
}: EditorProps) {
  // theme hook
  const { resolvedTheme } = useTheme();

  const editor: BlockNoteEditor | null = useBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : null,
    editable,
    onEditorContentChange: (editor) => {
      onChange(JSON.stringify(editor.topLevelBlocks, null, 2));
    },
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={resolvedTheme === "dark" ? "dark" : "light"}
    />
  );
}
