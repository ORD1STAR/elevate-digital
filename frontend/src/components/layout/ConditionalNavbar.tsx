'use client';

import { usePathname } from "next/navigation";
import Navbar from "@/components/layout/Navbar";

export default function ConditionalNavbar() {
  const pathname = usePathname() || "";
  
  // Handle paths like /en/auth, /ar/auth, /auth
  const isDashboard = pathname.includes('/dashboard');
  const isAuth = pathname.includes('/auth');

  if (isDashboard || isAuth) return null;

  return <Navbar />;
}
