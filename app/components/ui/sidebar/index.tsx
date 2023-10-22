"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineProject } from "react-icons/ai";
import { BiHomeAlt2, BiMessage } from "react-icons/bi";
import { CiSquareInfo } from "react-icons/ci";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { Button } from "../..";
import Modal from "../modal";

export const Sidebar = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const toggoleLogoutModal = () => {
    setIsLogoutOpen(!isLogoutOpen);
  };

  const logoutHandler = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLogoutOpen(false);
      router.push("/auth/login");
    }, 2000);
  };

  return (
    <>
      <div className="w-[220px] h-full bg-[#222B40] dark:bg-[#101011] fixed p-5 flex flex-col justify-between duration-200">
        <div className="space-y-5 font-semibold mt-10">
          <Link
            href="/admin"
            className="flex items-center justify-start gap-2 capitalize text-sm text-gray-300 dark:text-gray-200 px-2 py-2 hover:bg-[#1f2c4b] dark:hover:bg-[#171718] duration-200"
          >
            <BiHomeAlt2 size={17} />
            dashboard
          </Link>

          <Link
            href="/admin"
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

        <div>
          <Button
            onClick={() => setIsLogoutOpen(true)}
            icon={<IoIosLogOut />}
            varriant="ghost"
            type="button"
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Logout Modal */}
      <Modal
        width="400px"
        rounded="sm"
        isOpen={isLogoutOpen}
        toggoleModal={toggoleLogoutModal}
      >
        <div className="flex flex-col items-center justify-center gap-5 text-gray-800 dark:text-gray-200 duration-200">
          <CiSquareInfo size={100} />
          Are you sure you want to logout?
          <div className="flex items-center gap-3">
            <Button
              loading={isLoading}
              onClick={logoutHandler}
              varriant="danger"
            >
              <span>Yes</span>
            </Button>
            <Button onClick={toggoleLogoutModal} varriant="outline">
              <span>No, Cancel</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};
