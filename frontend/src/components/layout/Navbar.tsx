'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Who Are We', href: '#who-are-we' },
  { name: 'Our Experiences', href: '#experiences' },
  { name: 'Services', href: '#services' },
  { name: 'Feedbacks', href: '#feedbacks' },
  { name: 'Contact Us', href: '#contact' },
];

const languages = [
  { code: 'EN', name: 'English' },
  { code: 'FR', name: 'Français' },
  { code: 'AR', name: 'العربية' },
];

function LanguageSelector({ currentLang, setLang }: { currentLang: string, setLang: (s: string) => void }) {
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
    <div className="relative" ref={containerRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 glassy px-4 py-2 rounded-full border border-white/10 text-xs font-black text-white hover:bg-white/10 transition-all"
      >
        <Globe size={14} className="text-brand-accent" />
        <span>{currentLang}</span>
        <ChevronDown size={14} className={cn("transition-transform", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-full mt-2 right-0 w-32 glassy rounded-2xl border border-white/20 p-2 overflow-hidden shadow-2xl z-[60]"
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => {
                  setLang(lang.code);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between group",
                  currentLang === lang.code 
                    ? "bg-white text-[#063188]" 
                    : "text-white hover:bg-white/10"
                )}
              >
                <span>{lang.code}</span>
                <span className="opacity-0 group-hover:opacity-50 text-[8px]">{lang.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [lang, setLang] = useState('EN');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
          "glassy rounded-full w-full max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-500 pointer-events-auto",
          scrolled 
            ? "max-w-6xl shadow-2xl bg-white/90 text-[#063188] dark:bg-black/60 dark:text-white" 
            : "bg-white/10 text-white dark:bg-white/5"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all">
            <Image src="/logo.jpg" alt="Elevate Digital" fill className="object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Elevate <span className={cn(scrolled ? "text-[#063188]/80 dark:text-white/80" : "text-white/80")}>Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-bold transition-colors",
                scrolled 
                  ? "text-[#063188]/70 hover:text-[#063188] dark:text-white/70 dark:hover:text-white" 
                  : "text-white/80 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions (Language, Theme, Auth) */}
        <div className="flex items-center gap-2 sm:gap-4">
          <div className="hidden sm:block">
            <LanguageSelector currentLang={lang} setLang={setLang} />
          </div>

          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className={cn(
              "w-10 h-10 rounded-full glassy flex items-center justify-center transition-all border border-white/10",
              scrolled 
                ? "bg-[#063188]/5 dark:bg-white/5" 
                : "hover:bg-white/20"
            )}
          >
            {isDark ? <Sun size={18} className="text-brand-accent" /> : <Moon size={18} className={cn(scrolled && !isDark ? "text-[#063188]" : "text-white")} />}
          </button>

          <Link 
            href="/auth" 
            className={cn(
              "hidden sm:block px-6 py-2.5 rounded-full font-black text-xs xl:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg",
              scrolled && !isDark
                ? "bg-[#063188] text-white hover:bg-[#063188]/90"
                : "bg-white text-[#063188] hover:bg-white/90"
            )}
          >
            Login / Sign In
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors",
              scrolled && !isDark ? "text-[#063188] hover:bg-[#063188]/5" : "text-white hover:bg-white/10"
            )}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-24 left-4 right-4 glassy rounded-[2.5rem] p-8 lg:hidden flex flex-col gap-6 pointer-events-auto shadow-2xl border border-white/20"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-bold text-white hover:translate-x-2 transition-transform"
              >
                {link.name}
              </Link>
            ))}
            
            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <div className="flex gap-2">
                {languages.map((l) => (
                  <button 
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={cn(
                      "text-xs font-black px-4 py-2 rounded-full glassy border border-white/10", 
                      lang === l.code ? "bg-white text-[#063188]" : "text-white"
                    )}
                  >
                    {l.code}
                  </button>
                ))}
              </div>
            </div>

            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="text-center px-6 py-4 rounded-full bg-white text-[#063188] font-black text-lg shadow-xl"
            >
              Login / Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
