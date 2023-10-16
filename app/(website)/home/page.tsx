import { Theme } from "@/app/components";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abdulalh Mia | Full Stack Web Application Developer",
  description:
    "I am a full stack web application developer with experience in HTML, CSS, JavaScript, Python, and Django. I have a proven track record of developing and delivering high-quality web applications that meet the needs of my clients. I am passionate about my work and I am always looking for new challenges.",
};

const HomePage = () => {
  return (
    <div className="background">
      Home
      <Theme />
    </div>
  );
};

export default HomePage;
