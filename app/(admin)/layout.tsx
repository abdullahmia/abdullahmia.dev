import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { DashboardLayout as DashLayout } from "../components/ui";
import { Loader } from "../components/ui/loader";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: AppLayoutProps) {
  const session: any = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <DashLayout>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </DashLayout>
  );
}
