import { Suspense } from "react";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Suspense>{children}</Suspense>
    </>
  );
}
