import { getServerSession, Session } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { DashboardLayout as DashLayout } from "../components/ui";
import { Loader } from "../components/ui/loader";
import { VerifiedAuth } from "./components/verified-auth";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function DashboardLayout({ children }: AppLayoutProps) {
  const session: Session | null = await getServerSession(authOptions);

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <DashLayout>
      <VerifiedAuth session={session}>
        <Suspense fallback={<Loader />}>{children}</Suspense>
      </VerifiedAuth>
    </DashLayout>
  );
}
