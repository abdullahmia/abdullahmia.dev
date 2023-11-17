"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { DashboardLayout as DashLayout } from "../components/ui";
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

  return isLoggedIn() ? (
    <DashLayout>
      <Suspense>{children}</Suspense>
    </DashLayout>
  ) : (
    redirect("/auth/login")
  );
}
