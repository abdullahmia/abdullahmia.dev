"use client";

import { Button } from "@/app/components";
import { Avatar, Chip, DataTable } from "@/app/components/ui";
import { DropdownElement } from "@/app/components/ui/dropdown";
import { IProject } from "@/app/interfaces";
import { useGetAllProjectsQuery } from "@/app/redux/features/project/project.api";
import { parseArrayString } from "@/app/utils/string-to-array";
import { Images } from "@/assets";
import moment from "moment";
import { BiDotsVerticalRounded } from "react-icons/bi";

const AllProjects = () => {
  const columns = ["Image", "title", "Tech Stacks", "Date", "Status", "Action"]; // Define column headers
  const { isLoading, data: projects } = useGetAllProjectsQuery({});

  // get the table rows
  const getProjectTableRows = () => {
    if ((projects?.length as number) > 0) {
      return projects?.map((project: IProject) => {
        return {
          Image: (
            <Avatar
              image={Images.ThumbnailImg}
              name={project.title}
              size="large"
              rounded={false}
            />
          ),
          title: project.title,
          "Tech Stacks": (
            <div className="flex flex-wrap gap-1">
              {parseArrayString(project.technologies)?.map(
                (tech: string, key: number) => (
                  <Chip label={tech} key={key} />
                )
              )}
            </div>
          ),
          Date: moment(project.createdAt).format("MMM Do YY"),
          Status: project.status ? (
            "Published"
          ) : (
            <span className="text-red-500">Draft</span>
          ),
          Action: (
            <DropdownElement.DropdownWrapper
              actionElement={
                <Button varriant="no-styled">
                  <BiDotsVerticalRounded className="dark:text-gray-300" />
                </Button>
              }
            >
              <DropdownElement.DropdownItem>Edit</DropdownElement.DropdownItem>
              <DropdownElement.DropdownItem>
                Delete
              </DropdownElement.DropdownItem>
            </DropdownElement.DropdownWrapper>
          ),
        };
      });
    }
  };

  return (
    <div>
      <DataTable
        columns={columns}
        rows={getProjectTableRows()}
        itemsPerPage={5}
      />
    </div>
  );
};

export default AllProjects;
