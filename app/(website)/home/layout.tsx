import { Header } from "@/app/components/ui";
import { Suspense } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Header />
      <Suspense>{children}</Suspense>
    </>
  );
};

export default AppLayout;
