import { IProject } from "@/app/interfaces";
import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BiFileBlank } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

export interface ProjectProps {
  project: IProject;
}

const Project = (props: ProjectProps) => {
  const { project } = props || {};

  // hooks
  const router = useRouter();

  // redirect to project page
  const redirectToProjectPage = () => {
    router.push(`/project/${project.slug}`);
  };

  return (
    <div className="w-full">
      <div>
        <Image
          src={project.coverImage}
          className="w-full"
          width={500}
          height={500}
          alt=""
        />
      </div>
      <div className="p-4 bg-[#f8f8f8] space-y-3 dark:bg-[#202021] hover:bg-[#f0ebeb] dark:hover:bg-[#121213]">
        <button
          onClick={redirectToProjectPage}
          className="flex items-center gap-1 py-2 px-4 font-semibold rounded uppercase border bg-[#fcf8f8] hover:bg-[#FCEEEE] dark:bg-[#171718] dark:border-[#171718] dark:text-[#d8dbdd]"
        >
          <BiFileBlank />
          <span className="text-[12px]">Visit</span>
        </button>
        <h2
          onClick={redirectToProjectPage}
          className="text-[#1a1f24] font-semibold text-[16px] hover:underline dark:text-[#fff] hover:text-[#2a323a] transition cursor-pointer"
        >
          {project.title}
        </h2>
        <p className="text-[15px] text-[#727a80]">
          {project.description.slice(0, 60)}
        </p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5">
            <Image
              src={Images.PorfileImg}
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
          <div className="w-full flex items-center justify-between">
            <h2 className="text-[#727a80] text-sm space-x-3 dark:text-[#a7b0b7]">
              <span>Abdullah Mia</span>
              <span>•</span>
            </h2>
            <div className="flex items-center justify-end gap-3">
              <Link href={project.githubLink}>
                <FaGithub size={18} />
              </Link>
              <Link href={project.liveLink}>
                <TbWorld size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
