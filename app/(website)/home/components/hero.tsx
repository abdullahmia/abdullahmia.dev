import Link from "next/link";
import { AiOutlineGithub, AiOutlineInstagram } from "react-icons/ai";
import { BiDesktop, BiUserVoice } from "react-icons/bi";
import { BsCodeSlash } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { HiDocumentText } from "react-icons/hi";

const Hero = () => {
  return (
    <div className="">
      <div className="space-y-4">
        <h2 className="text-large">Abdullah Mia</h2>
        <div className="flex items-center gap-3">
          <p className="text-extra-small text-[#727a80] dark:text-[#999999]">
            @abdullahmia
          </p>
          <p className="flex items-center gap-1 text-extra-small text-[#727a80] dark:text-[#999999]">
            <CiLocationOn size={15} /> Dhaka, Bangladesh
          </p>
        </div>

        <div className="flex items-center gap-3">
          <p className="flex items-center gap-2 text-small text-[#727a80] dark:text-[#999999]">
            <BsCodeSlash /> Frontend Developer
          </p>
          <p className="flex items-center gap-2 text-small text-[#727a80] dark:text-[#999999]">
            <HiDocumentText size={17} /> View Resume
          </p>
        </div>

        <div>
          <p className="text-small dark:text-white">
            Software Engineer & Programming Enthusiast
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <p className="flex items-center gap-2 text-extra-small font-semibold px-3 py-1 rounded-full cursor-pointer bg-[#f9f9f9] hover:bg-[#e7e1e1] text-[#727a80] dark:text-gray-300 dark:bg-[#1d1d1e] dark:hover:bg-[#151516]">
            <BiDesktop /> Web Developer
          </p>
          <p className="flex items-center gap-2 text-extra-small font-semibold px-3 py-1 rounded-full cursor-pointer bg-[#f9f9f9] hover:bg-[#e7e1e1] text-[#727a80] dark:text-gray-300 dark:bg-[#1d1d1e] dark:hover:bg-[#151516]">
            <BsCodeSlash className="text-blue-600" /> Software Engineering
          </p>
          <p className="flex items-center gap-2 text-extra-small font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-[#e7e1e1] bg-[#f9f9f9] text-[#727a80] dark:text-gray-300 dark:bg-[#1d1d1e] dark:hover:bg-[#151516]">
            <BsCodeSlash className="text-indigo-500" /> React Developer
          </p>
          <p className="flex items-center gap-2 text-extra-small font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-[#e7e1e1] bg-[#f9f9f9] text-[#727a80] dark:text-gray-300 dark:bg-[#1d1d1e] dark:hover:bg-[#151516]">
            <BiUserVoice /> Open to Collaborate
          </p>
        </div>

        <div className="flex gap-3 mt-2">
          <Link
            href="/"
            className="bg-[#353A40] text-white p-1 rounded-full dark:bg-[#CAC5BF] dark:text-black"
          >
            <FaFacebookF size={15} />
          </Link>
          <Link
            href="/"
            className="bg-[#353A40] text-white p-1 rounded-full dark:bg-[#CAC5BF] dark:text-black"
          >
            <AiOutlineGithub size={15} />
          </Link>
          <Link
            href="/"
            className="bg-[#353A40] text-white p-1 rounded-full dark:bg-[#CAC5BF] dark:text-black"
          >
            <FaLinkedinIn size={15} />
          </Link>
          <Link
            href="/"
            className="bg-[#353A40] text-white p-1 rounded-full dark:bg-[#CAC5BF] dark:text-black"
          >
            <AiOutlineInstagram size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
