"use client";

import { IProject } from "@/app/interfaces";
import { useGetAllProjectsQuery } from "@/app/redux/features/project/project.api";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Project from "./project";

export interface ProjectsProps {
  isBorder?: Boolean;
  isComponent?: Boolean;
}

const Projects = ({ isBorder = true, isComponent = false }: ProjectsProps) => {
  const { isLoading, data: projects } = useGetAllProjectsQuery({});

  // render projects
  const renderProjects = () => {
    const displayedProjects: IProject[] | undefined = isComponent
      ? projects?.slice(0, 6).filter((project) => project.status)
      : projects?.filter((project) => project.status);

    return (displayedProjects?.length as number) > 0 ? (
      (displayedProjects as IProject[]).map((project, key) => (
        <Project key={key} project={project} />
      ))
    ) : (
      <div className="text-center text-gray-500 dark:text-gray-400">
        No Projects Found
      </div>
    );
  };

  return (
    <div
      className={`mt-12 pt-12  ${
        isBorder && "border-t dark:border-[#202021] duration-200"
      }`}
    >
      <h2 className="text-medium font-semibold">Featured Projects</h2>

      <div className="grid lg:grid-cols-3 gap-4 mt-8">{renderProjects()}</div>

      {isBorder && (
        <Link
          href="/projects"
          className="flex items-center gap-2 text-small text-[#4595d0] mt-5"
        >
          View All
          <BsArrowRight />
        </Link>
      )}
    </div>
  );
};

export default Projects;
