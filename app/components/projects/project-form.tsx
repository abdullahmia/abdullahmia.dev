"use client";

import { useState } from "react";

import dynamic from "next/dynamic";
import { Button } from "..";
import { ThumbnailUpload } from "../image-upload/thumbnail-upload";
import FormElements from "../ui/form-elements";

const Editor = dynamic(() => import("../editor/editor"), { ssr: false });

export const ProjectForm = () => {
  const [thunmbnail, setThumbnail] = useState(null);

  /**
   * HANDLERS
   */
  // Handle Thumbnail Upload
  const handleThumbnailUpload = (e: any) => {
    setThumbnail(e.target.files[0]);
  };

  // Handle Thumbnail Remove
  const handleThumbnailRemove = () => {
    setThumbnail(null);
  };

  // handle editor content change
  const handleEditorContentChange = (value: string) => {
    console.log(value);
  };

  return (
    <form>
      {/* Thumbnail Uploader */}
      <ThumbnailUpload
        handleThumbnailRemove={handleThumbnailRemove}
        handleThumbnailUpload={handleThumbnailUpload}
        thunmbnail={thunmbnail}
      />

      <div className="mt-8 space-y-4">
        <div>
          <FormElements.Input
            varriant="no-styled"
            placeholder="Start adding your project with a title"
          />
        </div>

        <div className="w-full">
          <FormElements.Input
            varriant="no-styled"
            fontSizeVariant="small"
            placeholder="Project deployed link"
            width="full"
          />
        </div>
        <div className="w-full">
          <FormElements.Input
            varriant="no-styled"
            fontSizeVariant="small"
            placeholder="Project codebase link"
          />
        </div>

        <div>
          <Editor
            onChange={handleEditorContentChange}
            initialContent={JSON.stringify(
              [
                {
                  type: "paragraph",
                  children: [{ text: "A line of text in a paragraph." }],
                },
              ],
              null,
              2
            )}
          />
        </div>
      </div>

      <div className="mt-8">
        {/* Submit */}
        <Button varriant="primary">Create Project</Button>
      </div>
    </form>
  );
};
