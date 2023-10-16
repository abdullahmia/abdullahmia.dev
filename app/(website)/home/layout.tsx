import { Footer } from "@/app/components";
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
      <Footer />
    </>
  );
};

export default AppLayout;
