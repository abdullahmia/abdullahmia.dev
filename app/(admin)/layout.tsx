"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { DashboardLayout as DashLayout } from "../components/ui";
import { Loader } from "../components/ui/loader";
import constants from "../constants";
import { isLoggedIn } from "../services";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: AppLayoutProps) {
  const [token, setToken] = useState<string>("");
  // Hooks
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isLoggedIn()) {
      router.push("/auth/login");
    }
  }, [router, pathname]);

  useEffect(() => {
    setToken(localStorage.getItem(constants.auth.token) || "");
  }, []);

  return token ? (
    <DashLayout>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </DashLayout>
  ) : (
    redirect("/auth/login")
  );
}
