"use client";

import { SessionProvider } from "next-auth/react";
import ReduxProvider from "./redux-provider";
import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider>
      <SessionProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </SessionProvider>
    </ReduxProvider>
  );
};

export default Providers;
