'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTheme } from '@/context/ThemeContext';

const themes = [
  { id: 'light', name: 'White', icon: Sun },
  { id: 'dark', name: 'Dark', icon: Moon },
  { id: 'glass', name: 'Glass', icon: Sparkles },
] as const;

export default function ThemeSelector({ scrolled }: { scrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentTheme = themes.find(t => t.id === theme) || themes[0];

  return (
    <div className="relative" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black transition-all",
          scrolled 
            ? "bg-[#063188]/5 border-[#063188]/10 text-[#063188]" 
            : "glassy border-white/10 text-white hover:bg-white/10"
        )}
      >
        <currentTheme.icon size={14} className="text-brand-accent" />
        <span className="uppercase">{currentTheme.name}</span>
        <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className={cn(
              "absolute top-full mt-2 right-0 w-32 rounded-2xl border p-2 overflow-hidden shadow-2xl z-[60]",
              scrolled ? "bg-white border-[#063188]/10" : "glassy border-white/20"
            )}
          >
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  setTheme(t.id);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between group",
                  theme === t.id 
                    ? scrolled ? "bg-[#063188] text-white" : "bg-white text-[#063188]" 
                    : scrolled ? "text-[#063188] hover:bg-[#063188]/5" : "text-white hover:bg-white/10"
                )}
              >
                <div className="flex items-center gap-2">
                  <t.icon size={12} className={cn(theme === t.id ? "" : "text-brand-accent")} />
                  <span className="uppercase">{t.name}</span>
                </div>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
