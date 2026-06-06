'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'ar', name: 'العربية' },
];

export default function LanguageSelector({ scrolled }: { scrolled?: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const { theme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLangChange = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setIsOpen(false);
  };

  const currentLangName = languages.find(l => l.code === locale)?.code.toUpperCase() || 'EN';
  const isLight = theme === 'light';

  return (
    <div className="relative" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-black transition-all",
          isLight 
            ? "bg-black/5 border-black/10 text-[#063188]" 
            : theme === 'dark'
              ? "bg-white/5 border-white/10 text-white"
              : "glassy border-white/10 text-white hover:bg-white/10"
        )}
      >
        <Globe size={14} className="text-brand-accent" />
        <span className="uppercase">{currentLangName}</span>
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
              isLight ? "bg-white border-black/10 shadow-black/5" : "bg-[#1b3069] border-white/10"
            )}
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLangChange(lang.code)}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between group",
                  locale === lang.code 
                    ? isLight ? "bg-[#063188] text-white" : "bg-white text-[#063188]" 
                    : isLight ? "text-[#063188] hover:bg-black/5" : "text-white hover:bg-white/10"
                )}
              >
                <span className="uppercase">{lang.code}</span>
                <span className="opacity-40 group-hover:opacity-60 text-[8px]">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
