import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Images } from "@/assets";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import Image from "next/image";
import About from "./components/about";
import Communites from "./components/communites/communites";
import Credentials from "./components/credentials/credentials";
import Hero from "./components/hero";
import Projects from "./components/projects/projects";
import TechStacks from "./components/tech-stacks/tech-stacks";

export const metadata: Metadata = {
  title: "Abdulalh Mia | Full Stack Web Application Developer",
  description:
    "I am a full stack web application developer with experience in HTML, CSS, JavaScript, Python, and Django. I have a proven track record of developing and delivering high-quality web applications that meet the needs of my clients. I am passionate about my work and I am always looking for new challenges.",
};

const HomePage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <>
      <div className="container flex lg:flex-row flex-col gap-8 py-12 lg:px-0 px-5">
        <div className="lg:w-[160px] w-full">
          <Image
            src={Images.PorfileImg}
            alt="Abdullah Mia"
            className="w-[140px] h-[140px] object-contain rounded-full ring-2 ring-opacity-10"
          />
          {/* <img src={img} className="w-[160px] h-[160px] rounded-full" alt="" /> */}
        </div>
        <div className="w-full flex-1">
          {/* All Section will be here..... */}
          <Hero />
          <About />
          <Credentials />
          <TechStacks />
          <Projects isBorder={true} />
          <Communites />
        </div>
      </div>
    </>
  );
};

export default HomePage;
