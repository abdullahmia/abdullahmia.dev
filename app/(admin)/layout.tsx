import { Suspense } from "react";
import { DashboardLayout } from "../components/ui";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <DashboardLayout>
        <Suspense>{children}</Suspense>
      </DashboardLayout>
    </>
  );
};

export default AppLayout;
