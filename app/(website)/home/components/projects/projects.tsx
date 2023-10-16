import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import Project from "./project";

const Projects = ({ isBorder = true }: { isBorder: Boolean }) => {
  return (
    <div
      className={`mt-12 pt-12  ${
        isBorder && "border-t dark:border-[#202021] duration-200"
      }`}
    >
      <h2 className="text-medium font-semibold">Featured Projects</h2>

      <div className="grid lg:grid-cols-3 gap-4 mt-8">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>

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
