import Link from "next/link";
import { AiOutlineGithub } from "react-icons/ai";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { CgMail } from "react-icons/cg";

const About = () => {
  return (
    <div className="mt-20">
      <h2 className="text-medium font-semibold">About Me</h2>
      <p className="text-small mt-8 text-[#51595f] dark:text-[#d4d4d4]">
        A Front-End developer with knowledge of necessary tech stacks. I am
        passionate about open-source, Web Development, and Problem-Solving
        Skills. I have internship experience in Web development. Currently, I am
        practicing on DSA. Has 1 year of hands-on experience in creating,
        developing, designing, and maintaining web applications in the industry.
        I have internship experience in Web development.
      </p>

      <div className="flex flex-wrap gap-1 mt-8">
        <Link
          href=""
          className="px-4 py-2 bg-[#1877F2] text-white text-[12px] uppercase font-semibold flex items-center gap-2"
        >
          <BsFacebook size={12} /> <span>Facebook</span>
        </Link>
        <Link
          href=""
          className="px-4 py-2 bg-[#36393b] text-white text-[12px] uppercase font-semibold flex items-center gap-2"
        >
          <AiOutlineGithub size={12} /> <span>github</span>
        </Link>
        <Link
          href=""
          className="px-4 py-2 bg-[#0077B5] text-white text-[12px] uppercase font-semibold flex items-center gap-2"
        >
          <BsLinkedin size={12} /> <span>Linkedin</span>
        </Link>
        <Link
          href=""
          className="px-4 py-2 bg-[#E4405F] text-white text-[12px] uppercase font-semibold flex items-center gap-2"
        >
          <BsInstagram size={12} /> <span>Instagram</span>
        </Link>
        <Link
          href=""
          className="px-4 py-2 bg-[#1DA1F2] text-white text-[12px] uppercase font-semibold flex items-center gap-2"
        >
          <BsTwitter size={12} /> <span>twitter</span>
        </Link>
        <Link
          href=""
          className="px-4 py-2 bg-[#D14836] text-white text-[12px] uppercase font-semibold flex items-center gap-2"
        >
          <CgMail size={12} /> <span>gmail</span>
        </Link>
      </div>
    </div>
  );
};

export default About;
