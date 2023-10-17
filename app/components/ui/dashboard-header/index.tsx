import { Theme } from "../..";

export const DashboardHeader = () => {
  return (
    <div className="bg-gray-100 dark:bg-[#101011] p-4 sticky top-0 z-10 duration-200">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold">Abir</div>
        <div>
          <Theme />
        </div>
      </div>
    </div>
  );
};
