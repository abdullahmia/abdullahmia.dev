import { Suspense } from "react";
import { DashboardLayout as DashLayout } from "../components/ui";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AppLayoutProps) {
  return (
    <>
      <DashLayout>
        <Suspense>{children}</Suspense>
      </DashLayout>
    </>
  );
}
