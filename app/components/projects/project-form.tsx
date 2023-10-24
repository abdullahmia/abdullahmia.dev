"use client";

import { useState } from "react";
import Editor from "../editor/editor";
import { ThumbnailUpload } from "../image-upload/thumbnail-upload";
import FormElements from "../ui/form-elements";

// Initial Data
const INITIAL_DATA = {
  time: new Date().getTime(),
  blocks: [
    {
      type: "header",
      data: {
        text: "This is my awesome editor!",
        level: 1,
      },
    },
  ],
};

export const ProjectForm = () => {
  const [thunmbnail, setThumbnail] = useState(null);
  const [data, setData] = useState(INITIAL_DATA);

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

  console.log(data);

  return (
    <div>
      {/* Thumbnail Uploader */}
      <ThumbnailUpload
        handleThumbnailRemove={handleThumbnailRemove}
        handleThumbnailUpload={handleThumbnailUpload}
        thunmbnail={thunmbnail}
      />

      <div className="mt-8 space-y-4">
        <div>
          <FormElements.Label>Project Title</FormElements.Label>
          <FormElements.Input placeholder="Project title" />
        </div>

        <div className="w-full flex gap-4">
          <div className="w-full">
            <FormElements.Label>Live link</FormElements.Label>
            <FormElements.Input placeholder="Live link" width="full" />
          </div>
          <div className="w-full">
            <FormElements.Label>Code link</FormElements.Label>
            <FormElements.Input placeholder="Link link" />
          </div>
        </div>

        {/* Description */}
        <div>
          <Editor
            data={data}
            onChange={setData}
            editorblock="editorjs-container"
          />
        </div>
      </div>
    </div>
  );
};
