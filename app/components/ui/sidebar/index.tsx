"use client";

import { Images } from "@/assets";
import Link from "next/link";
import { AiOutlineProject } from "react-icons/ai";
import { BiHomeAlt2, BiMessage } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { Avatar } from "../avatar/index";

export const Sidebar = () => {
  return (
    <>
      <div className="w-[220px] h-full bg-[#222B40] dark:bg-[#101011] fixed p-5 flex flex-col justify-between duration-200">
        <div className="space-y-5 font-semibold">
          <div className="flex items-center justify-center flex-col gap-3">
            <Avatar
              image={Images.PorfileImg}
              name="Abdullah Mia"
              size="large"
            />
            <h2 className="text-gray-100">Abdullah Mia</h2>
          </div>

          <hr className="h-px my-8 border-0 bg-gray-700" />
          <Link
            href="/admin"
            className="flex items-center justify-start gap-2 capitalize text-sm text-gray-300 dark:text-gray-200 px-2 py-2 hover:bg-[#1f2c4b] dark:hover:bg-[#171718] duration-200"
          >
            <BiHomeAlt2 size={17} />
            dashboard
          </Link>

          <Link
            href="/admin/projects"
            className="flex items-center justify-start gap-2 capitalize text-sm text-gray-300 dark:text-gray-200 px-2 py-2 hover:bg-[#1f2c4b] dark:hover:bg-[#171718] duration-200"
          >
            <AiOutlineProject size={17} />
            Projects
          </Link>

          <Link
            href="/admin"
            className="flex items-center justify-start gap-2 capitalize text-sm text-gray-300 dark:text-gray-200 px-2 py-2 hover:bg-[#1f2c4b] dark:hover:bg-[#171718] duration-200"
          >
            <HiOutlineDocumentText size={17} />
            Blogs
          </Link>

          <Link
            href="/admin"
            className="flex items-center justify-start gap-2 capitalize text-sm text-gray-300 dark:text-gray-200 px-2 py-2 hover:bg-[#1f2c4b] dark:hover:bg-[#171718] duration-200"
          >
            <BiMessage size={17} />
            Messages
          </Link>
        </div>
      </div>
    </>
  );
};
