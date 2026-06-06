'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith('/dashboard');
  const isAuth = pathname?.startsWith('/auth');

  if (isDashboard || isAuth) return null;

  return <Navbar />;
}
