import Image from "next/image";
import { HiUsers } from "react-icons/hi";

const Community = ({
  image,
  title,
  description,
}: {
  image: any;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-5 bg-[#f9f9f9] rounded hover:bg-[#f1eded] dark:bg-[#1d1d1e]">
      <Image src={image} className="w-16 h-16 object-contain rounded" alt="" />

      <div className="space-y-1 mt-4">
        <h2 className="text-[16px] text-[#51595f] font-semibold dark:text-[#d4d4d4]">
          {title}
        </h2>
        <p className="text-[14px] text-[#727a80]">{description}</p>
      </div>

      <div className="flex items-center gap-2 text-[#727a80] text-[14px] mt-4">
        <HiUsers size={18} />
        <span>78451</span>
      </div>
    </div>
  );
};

export default Community;
