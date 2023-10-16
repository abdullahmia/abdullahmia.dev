import { useTheme } from "../hooks";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const isTheme = useTheme();
  return <>{isTheme ? children : "Loading..."}</>;
}
