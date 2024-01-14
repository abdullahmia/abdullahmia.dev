"use client";

import { PageLoader } from "@/app/components/ui/loader";
import { useAppDispatch } from "@/app/redux";
import { setToken } from "@/app/redux/features/auth/auth.slice";
import { useEffect, useState } from "react";

export interface VerifiedAuthProps {
  children: React.ReactNode;
  session: any;
}

export const VerifiedAuth = ({ children, session }: VerifiedAuthProps) => {
  // Local state
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  // hooks
  const dispatch = useAppDispatch();

  // Effects
  useEffect(() => {
    setIsLoaded(false);
    if (session?.user?.token) {
      dispatch(setToken(session?.user?.token));
      setIsLoaded(true);
    }
  }, [session, dispatch]);

  return isLoaded ? <>{children}</> : <PageLoader />;
};
