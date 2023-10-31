import { Footer } from "@/app/components";
import { Header } from "@/app/components/ui";
import { Suspense } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout({ children }: AppLayoutProps) {
  return (
    <div>
      <Header />
      <Suspense>{children}</Suspense>
      <Footer />
    </div>
  );
}
