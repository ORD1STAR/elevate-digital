'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Package, 
  Clock, 
  TrendingUp,
  ShoppingCart
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

export default function DashboardOverview() {
  const { user } = useAuth();

  const stats = [
    { 
      label: "Total Balance", 
      value: user ? `$${user.balance.toFixed(2)}` : "$0.00", 
      icon: DollarSign, 
      color: "bg-emerald-500",
      trend: "+0% from last month"
    },
    { 
      label: "Bought Services", 
      value: "0", 
      icon: ShoppingCart, 
      color: "bg-blue-500",
      trend: "0 active right now"
    },
    { 
      label: "Total Orders", 
      value: "0", 
      icon: Package, 
      color: "bg-brand-accent",
      trend: "No orders yet"
    },
    { 
      label: "Active Boosts", 
      value: "0", 
      icon: Clock, 
      color: "bg-purple-500",
      trend: "All systems go"
    }
  ];

  return (
    <div className="space-y-10">
      {/* Welcome Header */}
      <div>
        <h1 className="text-4xl font-black text-white mb-2">
          Hello, {user?.displayName.split(' ')[0] || 'User'}! 👋
        </h1>
        <p className="text-white/60 font-bold">Here&apos;s what&apos;s happening with your boosts today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glassy p-8 rounded-[3rem] border border-white/10 group hover:bg-white/20 transition-all shadow-2xl"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform", stat.color)}>
                <stat.icon size={28} />
              </div>
              <div className="text-right">
                <p className="text-white/40 text-sm font-bold uppercase tracking-wider">{stat.label}</p>
                <h3 className="text-3xl font-black text-white">{stat.value}</h3>
              </div>
            </div>
            <p className="text-xs font-bold text-white/30 group-hover:text-white/60 transition-colors">
              {stat.trend}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity Section (Placeholder) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 glassy p-10 rounded-[4rem] border border-white/10 min-h-[400px]">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-black text-white">Recent Orders</h2>
            <button className="text-brand-accent font-bold hover:underline">View All</button>
          </div>
          <div className="flex flex-col items-center justify-center h-64 text-center opacity-30">
            <TrendingUp size={64} className="mb-4" />
            <p className="font-bold text-xl text-white">No recent orders to show yet.</p>
          </div>
        </div>

        <div className="glassy p-10 rounded-[4rem] border border-white/10 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 rounded-full bg-brand-accent/20 flex items-center justify-center text-brand-accent mb-6">
            <TrendingUp size={48} />
          </div>
          <h3 className="text-2xl font-black text-white mb-4">Quick Boost</h3>
          <p className="text-white/50 font-medium mb-8">Ready to grow your presence? Start a new service now.</p>
          <button className="w-full py-5 rounded-full bg-brand-accent text-[#063188] font-black text-xl shadow-xl hover:scale-105 transition-all">
            Browse Services
          </button>
        </div>
      </div>
    </div>
  );
}
