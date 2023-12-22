"use client";

import { useSession } from "next-auth/react";
import { useAppDispatch } from "../redux";
import { setToken } from "../redux/features/auth/auth.slice";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const session: any = useSession();

  // hooks
  const dispatch = useAppDispatch();

  if (session.data?.user) {
    dispatch(setToken(session?.data?.user?.token));
  }

  return children;
};

export default AuthProvider;
