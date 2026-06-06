'use client';

import React from 'react';
import { Bell, Search, ChevronDown } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between mb-10">
      {/* Search Bar - Glassy */}
      <div className="relative hidden md:block w-96">
        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30" size={20} />
        <input 
          type="text" 
          placeholder="Search services..." 
          className="w-full pl-14 pr-8 py-4 rounded-full glassy border border-white/10 text-white focus:border-brand-accent outline-none transition-all placeholder:text-white/20 font-bold"
        />
      </div>

      <div className="flex items-center gap-6 ml-auto">
        {/* Notifications */}
        <button className="relative w-14 h-14 rounded-full glassy flex items-center justify-center text-white hover:bg-white/10 transition-all border border-white/10">
          <Bell size={24} />
          <span className="absolute top-4 right-4 w-3 h-3 bg-brand-accent rounded-full border-2 border-[#1b3069]"></span>
        </button>

        {/* User Profile Bubble */}
        <div className="glassy pl-3 pr-6 py-2 rounded-full border border-white/10 flex items-center gap-4 hover:bg-white/10 transition-all cursor-pointer group">
          <div className="w-10 h-10 rounded-full bg-brand-accent p-0.5 shadow-xl">
            <div className="w-full h-full rounded-full bg-white overflow-hidden relative">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Hanno" alt="User" className="object-cover w-full h-full" />
            </div>
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-black text-sm leading-none mb-1">Ahmed Bensalah</p>
            <p className="text-brand-accent text-xs font-bold leading-none">Customer</p>
          </div>
          <ChevronDown size={18} className="text-white/30 group-hover:text-white transition-colors" />
        </div>
      </div>
    </div>
  );
}
