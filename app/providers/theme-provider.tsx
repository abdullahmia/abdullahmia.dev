"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useState } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return <NextThemeProvider attribute="class">{children}</NextThemeProvider>;
}
