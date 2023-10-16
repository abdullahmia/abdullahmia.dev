import { Suspense } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <Suspense>{children}</Suspense>
    </>
  );
};

export default AppLayout;
