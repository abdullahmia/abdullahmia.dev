import { Images } from "@/assets";
import Community from "./community";

const Communites = () => {
  return (
    <div className="mt-12 border-t border-b py-12 dark:border-[#202021] duration-200">
      <h2 className="text-medium font-semibold">Member of</h2>

      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-6">
        <Community
          image={Images.JsImg}
          title="JavaScript"
          description="JavaScript developers move fast and push software ..."
        />
        <Community
          image={Images.ReactImg}
          title="React.JS"
          description="Let's get together and discus all things ..."
        />
        <Community
          image={Images.NextImg}
          title="Next.js"
          description="Community for Next.Js developers ..."
        />
        <Community
          image={Images.NodeImg}
          title="NodeJs"
          description="Node Js developer community. Get to ..."
        />
        <Community
          image={Images.TailwindImg}
          title="Tailwind CSS"
          description="Community for TailwindCss developers ..."
        />
        <Community
          image={Images.MongodbImg}
          title="Mongodb"
          description="Let's get together and discus all things ..."
        />
      </div>
    </div>
  );
};

export default Communites;
