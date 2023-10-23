"use client";

import { BiBookContent, BiNotepad } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";

export const DashboardWidgets = () => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-full py-10 px-8 bg-gray-100 flex justify-between items-center rounded dark:bg-[#101011] dark:shadow">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            78
          </h2>
          <p className="text-sm text-gray-600 pt-3 dark:text-gray-400">
            Total visitor of website
          </p>
        </div>
        <div>
          <FaUsers size={40} className="text-gray-700 dark:text-gray-200" />
        </div>
      </div>

      <div className="w-full py-10 px-8 bg-gray-100 flex justify-between items-center rounded dark:bg-[#101011] dark:shadow">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            78
          </h2>
          <p className="text-sm text-gray-600 pt-3 dark:text-gray-400">
            Project impression
          </p>
        </div>
        <div>
          <BiBookContent
            size={35}
            className="text-gray-700 dark:text-gray-200"
          />
        </div>
      </div>

      <div className="w-full py-10 px-8 bg-gray-100 flex justify-between items-center rounded dark:bg-[#101011] dark:shadow">
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-100">
            78
          </h2>
          <p className="text-sm text-gray-600 pt-3 dark:text-gray-400">
            Article impression
          </p>
        </div>
        <div>
          <BiNotepad size={40} className="text-gray-700 dark:text-gray-200" />
        </div>
      </div>
    </div>
  );
};
