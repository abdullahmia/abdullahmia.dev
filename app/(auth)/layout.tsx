import { Session, getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { Loader } from "../components/ui/loader";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default async function AuthLayout({ children }: AppLayoutProps) {
  const session: Session | null = await getServerSession(authOptions);

  if (session) {
    redirect("/admin");
  }

  return (
    <>
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </>
  );
}
