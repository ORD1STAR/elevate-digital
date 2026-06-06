'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  History, 
  Settings, 
  LogOut,
  CreditCard
} from 'lucide-react';
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Overview', href: '/dashboard', icon: LayoutDashboard },
  { name: 'Buy Services', href: '/dashboard/services', icon: ShoppingCart },
  { name: 'My Orders', href: '/dashboard/orders', icon: History },
  { name: 'Add Funds', href: '/dashboard/funds', icon: CreditCard },
  { name: 'Settings', href: '/dashboard/settings', icon: Settings },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="w-72 h-[calc(100vh-2rem)] sticky top-4 left-4 hidden lg:flex flex-col glassy rounded-[3rem] p-8 border border-white/10 shadow-2xl">
      <div className="mb-12 px-2">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-brand-accent p-1">
            <div className="w-full h-full rounded-xl overflow-hidden relative">
              {/* Using a placeholder for the logo if needed, but we have logo.jpg */}
              <img src="/logo.jpg" alt="Logo" className="object-cover w-full h-full" />
            </div>
          </div>
          <span className="font-black text-white text-xl tracking-tighter">Elevate</span>
        </Link>
      </div>

      <nav className="flex-1 space-y-3">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-4 px-6 py-4 rounded-full font-bold transition-all group",
                isActive 
                  ? "bg-white text-[#063188] shadow-lg" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <item.icon size={22} className={cn(isActive ? "text-[#063188]" : "text-brand-accent group-hover:scale-110 transition-transform")} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto">
        <button className="flex items-center gap-4 px-6 py-4 rounded-full font-bold text-white/60 hover:text-red-400 hover:bg-red-400/5 transition-all w-full group">
          <LogOut size={22} className="group-hover:translate-x-1 transition-transform" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
