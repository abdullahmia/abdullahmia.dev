import { Images } from "@/assets";
import { AiOutlineUser } from "react-icons/ai";
import { BsDisplay, BsGear } from "react-icons/bs";
import { Avatar } from "..";
import { DropdownElement } from "../dropdown";

export const DashboardHeader = () => {
  return (
    <>
      <div className="shadow-sm dark:shadow-lg p-4 sticky top-0 z-10 duration-200">
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
              <DropdownElement.DropdownItem type="link" to="/admin/appearance">
                <BsGear size={16} /> Settings
              </DropdownElement.DropdownItem>
              <DropdownElement.DropdownItem type="link" to="/admin/appearance">
                <BsDisplay size={16} /> Display & More
              </DropdownElement.DropdownItem>
            </DropdownElement.DropdownWrapper>
          </div>
        </div>
      </div>
    </>
  );
};
