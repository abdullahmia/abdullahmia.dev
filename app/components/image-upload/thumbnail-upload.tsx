/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { BiArrowFromBottom, BiTrashAlt } from "react-icons/bi";
import { Button } from "..";
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
    <div className="w-full h-60 bg-[#4595D0] rounded-md relative">
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
      <div className="w-14 h-14 rounded-full absolute right-3 bottom-2">
        <DropdownElement.DropdownWrapper
          actionElement={
            <Button varriant="secondary" rounded="full">
              <AiOutlinePlus />
            </Button>
          }
        >
          <DropdownElement.DropdownItem
            type="button"
            onClick={() => uploadThumbnailRef?.current?.click()}
          >
            <BiArrowFromBottom />
            Upload
          </DropdownElement.DropdownItem>
          <DropdownElement.DropdownItem
            type="button"
            onClick={handleThumbnailRemove}
          >
            <BiTrashAlt />
            <BiTrashAlt />
            Remove
          </DropdownElement.DropdownItem>
        </DropdownElement.DropdownWrapper>
      </div>
    </div>
  );
};
