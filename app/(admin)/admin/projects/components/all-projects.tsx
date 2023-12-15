"use client";

import { Button } from "@/app/components";
import { Avatar, Chip, DataTable } from "@/app/components/ui";
import { DropdownElement } from "@/app/components/ui/dropdown";
import Modal from "@/app/components/ui/modal";
import { IProject } from "@/app/interfaces";
import {
  useDeleteProjectMutation,
  useGetAllProjectsQuery,
} from "@/app/redux/features/project/project.api";
import { parseArrayString } from "@/app/utils/string-to-array";
import cogoToast from "cogo-toast";
import moment from "moment";
import { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { CiSquareInfo } from "react-icons/ci";

const AllProjects = () => {
  // Local State
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const [projectId, setProjectId] = useState<string>("");

  // Table columns
  const columns = ["Image", "title", "Tech Stacks", "Date", "Status", "Action"]; // Define column headers

  // apis hooks
  const { isLoading, data: projects } = useGetAllProjectsQuery({});
  const [
    deleteProject,
    {
      isLoading: deleteProjectLoading,
      isSuccess: deleteprojectSuccess,
      isError: isDeleteProjectError,
    },
  ] = useDeleteProjectMutation();

  // get the table rows
  const getProjectTableRows = () => {
    if ((projects?.length as number) > 0) {
      return projects?.map((project: IProject) => {
        console.log(project.coverImage);
        return {
          Image: (
            <Avatar
              image={project.coverImage}
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
              <DropdownElement.DropdownItem
                onClick={() => showDeleteModalHandler(project.id)}
              >
                Delete
              </DropdownElement.DropdownItem>
            </DropdownElement.DropdownWrapper>
          ),
        };
      });
    }
  };

  // toggle delete modal
  const showDeleteModalHandler = (id: string) => {
    setShowDeleteModal(true);
    setProjectId(id);
  };

  // Delete a project
  const handleDeleteProject = () => {
    deleteProject(projectId);
  };

  // Delete project success
  useEffect(() => {
    if (deleteprojectSuccess) {
      setShowDeleteModal(false);
      setProjectId("");
    }
    if (isDeleteProjectError) {
      setShowDeleteModal(false);
      setProjectId("");
      cogoToast.error("Something went wrong");
    }
  }, [deleteprojectSuccess, isDeleteProjectError]);

  return (
    <>
      <div>
        <DataTable
          columns={columns}
          rows={getProjectTableRows()}
          itemsPerPage={5}
        />
      </div>

      {/* Delete Modal */}
      <Modal
        width="400px"
        rounded="sm"
        isOpen={showDeleteModal}
        toggoleModal={() => {
          setProjectId("");
          setShowDeleteModal(false);
        }}
      >
        <div className="flex flex-col items-center justify-center gap-5 text-gray-800 dark:text-gray-200 duration-200">
          <CiSquareInfo size={100} />
          Are you sure you want to Delete Project?
          <div className="flex items-center gap-3">
            <Button
              loading={deleteProjectLoading}
              onClick={handleDeleteProject}
              varriant="danger"
            >
              <span>Yes</span>
            </Button>
            <Button
              onClick={() => {
                setShowDeleteModal(false);
                setProjectId("");
              }}
              varriant="outline"
            >
              <span>No, Cancel</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AllProjects;
