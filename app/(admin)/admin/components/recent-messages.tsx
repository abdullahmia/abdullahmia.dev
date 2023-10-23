import { Button } from "@/app/components";
import { Avatar } from "@/app/components/ui";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export const RecentMessages = () => {
  return (
    <div className="bg-gray-100 py-8 px-5 mt-5 rounded dark:bg-[#101011] dark:shadow">
      <div className="flex items-center justify-between">
        <h2 className="text-xl text-gray-800 font-semibold dark:text-gray-200">
          Recent Messages
        </h2>

        <Link
          href="/admin/messages"
          className="text-[#4595D0] flex items-center gap-2"
        >
          View all <BsArrowRight />
        </Link>
      </div>

      {/* Messages */}
      <div className="space-y-2 mt-6">
        <div className="flex items-center justify-between bg-gray-50 p-5 rounded dark:bg-[#17171a]">
          <div className="flex items-center gap-4">
            <Avatar name="Jhon doe" size="large" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Jhon Doe
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                1 hour ago
              </p>
            </div>
          </div>
          <div>
            <Button>Reply</Button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-5 rounded dark:bg-[#17171a]">
          <div className="flex items-center gap-4">
            <Avatar name="Salman Mia" size="large" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Salman Mia
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                1 hour ago
              </p>
            </div>
          </div>
          <div>
            <Button>Reply</Button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-5 rounded dark:bg-[#17171a]">
          <div className="flex items-center gap-4">
            <Avatar name="Mr Alex" size="large" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Mr Alex
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                1 hour ago
              </p>
            </div>
          </div>
          <div>
            <Button>Reply</Button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-5 rounded dark:bg-[#17171a]">
          <div className="flex items-center gap-4">
            <Avatar name="Rahim Khan" size="large" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Rahim Khan
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                1 hour ago
              </p>
            </div>
          </div>
          <div>
            <Button>Reply</Button>
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-50 p-5 rounded dark:bg-[#17171a]">
          <div className="flex items-center gap-4">
            <Avatar name="Dr Mushfiq" size="large" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Dr Mushfiq
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                1 hour ago
              </p>
            </div>
          </div>
          <div>
            <Button>Reply</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
