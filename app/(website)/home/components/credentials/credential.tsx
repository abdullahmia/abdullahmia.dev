import { Images } from "@/assets";
import Image from "next/image";

const Credential = () => {
  return (
    <div className="flex gap-3  py-2">
      <div className="h-[60px] w-[60px]">
        <Image src={Images.DpiImg} className="w-full h-full" alt="DPI" />
      </div>
      <div className="flex-1 flex justify-between flex-wrap">
        <div>
          <h2 className="text-small font-semibold text-[#51595f] dark:text-[#d4d4d4]">
            Diploma in Computer Science & Engineering (CSE)
          </h2>
          <p className="text-[#727a80] space-x-2 dark:text-[#999]">
            Daffodil Polytechnic Institute
            <span>•</span>
            <span>June 2018 - Feburary 2023</span>
          </p>
        </div>
        <div className="w-[170px] h-[110px]">
          <Image
            src={Images.DaffodilImg}
            className="w-full h-full rounded"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Credential;
