import { BiLoaderAlt } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <BiLoaderAlt className="animate-spin text-[#727a80]" size={30} />
    </div>
  );
};

export default Loader;
