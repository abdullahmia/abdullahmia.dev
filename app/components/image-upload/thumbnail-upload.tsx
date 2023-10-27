/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { BiArrowFromBottom, BiTrashAlt } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Button } from "../ui/button/button";
import { DropdownElement } from "../ui/dropdown";

interface ThumbnailUploadProps {
  thunmbnail?: any;
  handleThumbnailUpload?: any;
  handleThumbnailRemove: () => void;
}

export const ThumbnailUpload = ({
  handleThumbnailRemove,
  handleThumbnailUpload,
  thunmbnail,
}: ThumbnailUploadProps) => {
  const uploadThumbnailRef = useRef<HTMLInputElement | null>(null);
  return (
    <div className={`w-full ${thunmbnail ? "h-60" : null} rounded-md`}>
      <div className="flex justify-end">
        <DropdownElement.DropdownWrapper
          actionElement={
            <Button varriant="no-styled">
              <BsThreeDotsVertical />
            </Button>
          }
        >
          <DropdownElement.DropdownItem
            type="button"
            onClick={() => uploadThumbnailRef?.current?.click()}
          >
            <BiArrowFromBottom />
            Upload an image?
          </DropdownElement.DropdownItem>
          <DropdownElement.DropdownItem
            type="button"
            onClick={handleThumbnailRemove}
          >
            <BiTrashAlt />
            Remove
          </DropdownElement.DropdownItem>
        </DropdownElement.DropdownWrapper>
      </div>
      <div>
        {thunmbnail && (
          <img
            src={URL.createObjectURL(thunmbnail)}
            alt="thumbnail"
            className="w-full h-60 object-contain"
          />
        )}
        {/* input type file accpet only images */}
        <input
          type="file"
          accept="image/*"
          className="w-full h-full opacity-0 cursor-pointer"
          onChange={handleThumbnailUpload}
          ref={uploadThumbnailRef}
        />
      </div>
    </div>
  );
};
