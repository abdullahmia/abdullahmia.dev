import { Images } from "@/assets";
import TechStack from "./tech-stack";

const TechStacks = () => {
  return (
    <div className="mt-12 border-t pt-12 dark:border-[#202021] duration-200">
      <h2 className="text-medium font-semibold">Tech Stack</h2>

      <div className="mt-6">
        <div className="flex lg:flex-row flex-col lg:gap-64">
          <div>
            <div>
              <h2 className="font-semibold text-[#727a80]">Languages</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.JsImg} title={"JavaScript"} />
                <TechStack image={Images.HtmlImg} title={"HTML"} />
                <TechStack image={Images.CssImg} title={"CSS 3"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">Frameworks</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.ExpressImg} title={"ExprssJS"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">Databases</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.MongodbImg} title={"MongoDB"} />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">Databases</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images?.DockerImg} title={"Docker"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">Web Browser</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.FirefoxImg} title={"Firefox"} />
                <TechStack
                  image={Images.GoogleChromeImg}
                  title={"Google Chrome"}
                />
                <TechStack image={Images.EdgeImg} title={"Microsoft Edge"} />
              </div>
            </div>
            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">
                Video Conferencing
              </h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.DiscordImg} title={"Discord"} />
              </div>
            </div>
          </div>

          <div className="lg:mt-0 mt-8">
            <div>
              <h2 className="font-semibold text-[#727a80]">JavaScript UI</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.ReactImg} title={"React"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">State Management</h2>
              <div className="space-y-2 mt-3">
                <TechStack
                  image={Images.ReduxImg}
                  title={"Redux-Toolkit & RTK Query"}
                />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">
                Frameworks (Full Stack)
              </h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.NextImg} title={"Next.js"} />
                <TechStack image={Images.NodeImg} title={"Node.js"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">
                Front-Ed Frameworks
              </h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.TailwindImg} title={"Tailwind CSS"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">Version Control</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.GitImg} title={"Git"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">Tools</h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.VscodeImg} title={"Vs Code"} />
              </div>
            </div>

            <div className="mt-8">
              <h2 className="font-semibold text-[#727a80]">
                Project Management
              </h2>
              <div className="space-y-2 mt-3">
                <TechStack image={Images.NotionImg} title={"notion.so"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStacks;
