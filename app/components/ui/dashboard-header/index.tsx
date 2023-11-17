"use client";

import constants from "@/app/constants";
import { Images } from "@/assets";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { BsDisplay, BsGear } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { CiSquareInfo } from "react-icons/ci";
import { Avatar } from "../avatar/index";
import { Button } from "../button/button";
import { DropdownElement } from "../dropdown";
import Modal from "../modal/index";

export const DashboardHeader = () => {
  // Local State
  const [isLogoutOpen, setIsLogoutOpen] = useState<boolean>(false);

  // Hooks
  const router = useRouter();

  const toggoleLogoutModal = () => {
    setIsLogoutOpen(!isLogoutOpen);
  };

  const logoutHandler = async () => {
    // cookies.delete(constants.auth.token);
    localStorage.removeItem(constants.auth.token);
    localStorage.removeItem(constants.auth.user);
    router.push("/auth/login");
  };

  return (
    <>
      <div className="shadow-md dark:shadow-xl p-4 py-2 sticky top-0 duration-200 z-[100]">
        <div className="flex justify-end items-center">
          <div className="flex items-center gap-2">
            <DropdownElement.DropdownWrapper
              actionElement={
                <Avatar
                  image={Images.PorfileImg}
                  name="Abdullah Mia"
                  size="small"
                />
              }
            >
              <DropdownElement.DropdownItem type="link" to="/admin/appearance">
                <AiOutlineUser size={16} /> Account
              </DropdownElement.DropdownItem>
              <DropdownElement.DropdownItem type="link" to="/admin/settings">
                <BsGear size={16} /> Settings
              </DropdownElement.DropdownItem>
              <DropdownElement.DropdownItem type="link" to="/admin/appearance">
                <BsDisplay size={16} /> Display & Devices
              </DropdownElement.DropdownItem>
              <DropdownElement.DropdownItem
                type="button"
                onClick={() => setIsLogoutOpen(true)}
              >
                <CgLogOut size={16} /> Logout
              </DropdownElement.DropdownItem>
            </DropdownElement.DropdownWrapper>
          </div>
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
            <Button onClick={logoutHandler} varriant="danger">
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
