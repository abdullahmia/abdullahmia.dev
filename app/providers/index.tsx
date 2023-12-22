"use client";

import { SessionProvider } from "next-auth/react";
import AuthProvider from "./auth-provider";
import ReduxProvider from "./redux-provider";
import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        <AuthProvider>
          <ThemeProvider>{children}</ThemeProvider>
        </AuthProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default Providers;
