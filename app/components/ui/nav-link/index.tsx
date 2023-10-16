"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  children: React.ReactNode;
  href: string;
}

export const NavLink = ({ children, href }: NavLinkProps) => {
  const isLinkActive = usePathname() === href;

  return (
    <Link href={href} className={isLinkActive ? "active" : ""}>
      {children}
    </Link>
  );
};
