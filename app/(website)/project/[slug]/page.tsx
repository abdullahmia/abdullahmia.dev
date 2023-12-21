"use client";

import { useGetProjectBySlugQuery } from "@/app/redux/features/project/project.api";
import { Images } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";

export default function Page({ params }: { params: { slug: string } }) {
  // Hooks
  const router = useRouter();

  const {
    isLoading,
    isError,
    data: project,
  } = useGetProjectBySlugQuery(params.slug);

  useEffect(() => {
    if (!isLoading && isError) {
      router.push("/404");
    }
  }, [isLoading, isError, router]);

  console.log(project?.description);

  return (
    <main className="container lg:px-0 px-5">
      {project && (
        <div className="mt-6">
          <Image
            src={project?.coverImage as string}
            alt={project?.title as string}
            width={1920}
            height={1080}
          />

          <div className="space-y-4 mt-8">
            {/* Title */}
            <h1 className="text-3xl font-semibold text-gray-700 dark:text-white">
              {project?.title}
            </h1>

            {/* Author Information */}
            <div className="flex items-center gap-2 space">
              <div className="w-5 h-5">
                <Image
                  src={Images.PorfileImg}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-[#727a80] text-[15px] space-x-3 dark:text-[#a7b0b7]">
                  <span>Abdullah Mia</span>
                  <span>•</span>
                  <span>1 min read</span>
                </h2>
              </div>

              <span className="text-[#727a80]">•</span>

              <div className="flex items-center gap-3">
                <Link href={project.githubLink} target="_blank">
                  <FaGithub size={18} />
                </Link>
                <Link href={project.liveLink} target="_blank">
                  <TbWorld size={20} />
                </Link>
              </div>
            </div>

            <div className="mt-4">
              <p
                style={{ whiteSpace: "pre-line" }}
                className="text-gray-700 dark:text-[#a7b0b7]"
              >
                {project?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
