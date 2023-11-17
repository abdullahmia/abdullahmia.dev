"use client";

import { useRouter } from "next/navigation";
import { Suspense, useEffect } from "react";
import { Loader } from "../components/ui/loader";
import { isLoggedIn } from "../services";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AppLayoutProps) {
  // hooks
  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn()) {
      router.push("/admin");
    }
  }, [router]);

  return (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
