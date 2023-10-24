import { Images } from "@/assets";
import Image from "next/image";
import { BiFileBlank } from "react-icons/bi";

const Project = () => {
  return (
    <div className="w-full">
      <div>
        <Image src={Images.ThumbnailImg} className="w-full" alt="" />
      </div>
      <div className="p-4 bg-[#f8f8f8] space-y-3 dark:bg-[#202021] hover:bg-[#f0ebeb] dark:hover:bg-[#121213]">
        <button className="flex items-center gap-1 py-2 px-4 font-semibold rounded uppercase border bg-[#fcf8f8] hover:bg-[#FCEEEE] dark:bg-[#171718] dark:border-[#171718] dark:text-[#d8dbdd]">
          <BiFileBlank />
          <span className="text-[12px]">Visit</span>
        </button>
        <h2 className="text-[#1a1f24] font-semibold text-[16px] hover:underline dark:text-[#fff]">
          Full Stack web application
        </h2>
        <p className="text-[15px] text-[#727a80]">
          Abdullah Mia featured project no the github
        </p>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5">
            <Image
              src={Images.PorfileImg}
              className="w-full h-full rounded-full"
              alt=""
            />
          </div>
          <div>
            <h2 className="text-[#727a80] text-sm space-x-3">
              <span>Abdullah Mia</span>
              <span>•</span>
              <span>1 min read</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
