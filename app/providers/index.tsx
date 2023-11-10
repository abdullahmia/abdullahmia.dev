"use client";

import { QueryProvider } from "./query-provider";
import ReduxProvider from "./redux-provider";
import { ThemeProvider } from "./theme-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider>
      <ThemeProvider>
        <QueryProvider>{children}</QueryProvider>
      </ThemeProvider>
    </ReduxProvider>
  );
};

export default Providers;
