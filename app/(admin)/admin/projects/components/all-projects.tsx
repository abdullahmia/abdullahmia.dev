"use client";

import { Button } from "@/app/components";
import { Avatar, Chip, DataTable } from "@/app/components/ui";
import { DropdownElement } from "@/app/components/ui/dropdown";
import { Images } from "@/assets";
import { BiDotsVerticalRounded } from "react-icons/bi";

const AllProjects = () => {
  const columns = ["Image", "title", "Tech Stacks", "Date", "Action"]; // Define column headers
  const data = [
    {
      Image: (
        <Avatar
          image={Images.ThumbnailImg}
          name="Instagram Clone"
          size="large"
          rounded={false}
        />
      ),
      title: "Instagram Clone",
      "Tech Stacks": (
        <div className="flex flex-wrap gap-1">
          <Chip label="Next js" />
          <Chip label="Typescript" />
          <Chip label="Express" />
          <Chip label="Postgrsql" />
          <Chip label="prisma" />
        </div>
      ),
      Date: "12/12/2021",
      Action: (
        <DropdownElement.DropdownWrapper
          actionElement={
            <Button varriant="no-styled">
              <BiDotsVerticalRounded className="dark:text-gray-300" />
            </Button>
          }
        >
          <DropdownElement.DropdownItem>Edit</DropdownElement.DropdownItem>
          <DropdownElement.DropdownItem>Delete</DropdownElement.DropdownItem>
        </DropdownElement.DropdownWrapper>
      ),
    },
  ];
  return (
    <div>
      <DataTable columns={columns} rows={data} />
    </div>
  );
};

export default AllProjects;
