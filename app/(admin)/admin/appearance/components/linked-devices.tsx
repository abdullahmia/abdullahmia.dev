import { Button } from "@/app/components";
import { FaUbuntu } from "react-icons/fa";
import { SiMacos, SiWindows11 } from "react-icons/si";

export const LinkedDevices = () => {
  return (
    <div className="mt-10">
      <h2 className="text-[15px] text-[#1a1f24] font-semibold dark:text-white">
        Liked Devices
      </h2>
      <p className="text-[13px] text-[#51595f] dark:text-[#999999]">
        You’ve 3 devices to linked your website! You can remove this as well.
      </p>

      <div className="mt-5 flex items-center gap-4">
        {/* Single Device */}
        <div className="border p-5 rounded h-64 dark:border-gray-800 duration-200">
          <SiWindows11 size={150} />
          <div className="flex items-center justify-between mt-4">
            <h2>Windows</h2>
            <Button fontSize="sm" varriant="no-styled" color="danger">
              Remove
            </Button>
          </div>
        </div>

        <div className="border p-5 rounded h-64 dark:border-gray-800 duration-200">
          <FaUbuntu size={150} />
          <div className="flex items-start justify-between mt-4">
            <h2 className="flex flex-col gap-2">
              <span>Ubuntu</span>
              <span className="text-xs text-gray-500">(Current device)</span>
            </h2>
            <Button fontSize="sm" varriant="no-styled" color="danger">
              Remove
            </Button>
          </div>
        </div>

        <div className="border p-5 rounded h-64 dark:border-gray-800 duration-200">
          <SiMacos size={150} />
          <div className="flex items-center justify-between mt-4">
            <h2>Mac Os</h2>
            <Button fontSize="sm" varriant="no-styled" color="danger">
              Remove
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
