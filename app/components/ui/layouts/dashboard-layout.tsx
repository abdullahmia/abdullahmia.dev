import { DashboardHeader, Sidebar } from "..";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export const DashboardLayout = (props: DashboardLayoutProps) => {
  return (
    <div className="w-full h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-[220px]">
        <DashboardHeader />
        <main className="mt-6 w-[1000px] m-auto">{props.children}</main>
      </main>
    </div>
  );
};
