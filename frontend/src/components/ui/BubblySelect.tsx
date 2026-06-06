'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BubblySelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function BubblySelect({ options, value, onChange, placeholder }: BubblySelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "input-bubbly flex items-center justify-between group",
          isOpen && "scale-[1.02] bg-white/15 border-white/30 shadow-2xl"
        )}
      >
        <span className={cn("flex-1 text-left rtl:text-right", !value && "text-white/30")}>
          {value || placeholder}
        </span>
        <ChevronDown 
          size={20} 
          className={cn("text-white/30 transition-transform duration-300", isOpen && "rotate-180 text-white")} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-3 left-0 right-0 glassy rounded-[2rem] border border-white/20 p-3 overflow-hidden shadow-2xl z-[60]"
          >
            <div className="space-y-1 max-h-60 overflow-y-auto custom-scrollbar">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={cn(
                    "w-full text-left rtl:text-right px-6 py-4 rounded-2xl text-sm font-bold transition-all",
                    value === option 
                      ? "bg-white text-[#063188]" 
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
