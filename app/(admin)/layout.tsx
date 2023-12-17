"use client";

import { usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { DashboardLayout as DashLayout } from "../components/ui";
import { Loader } from "../components/ui/loader";
import { isLoggedIn } from "../services";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AppLayoutProps) {
  // Hooks
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/auth/login");
    }
  }, [router, pathname]);

  return (
    <DashLayout>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </DashLayout>
  );
}
