'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Who Are We', href: '#who-are-we' },
  { name: 'Our Experiences', href: '#experiences' },
  { name: 'Services', href: '#services' },
  { name: 'Feedbacks', href: '#feedbacks' },
  { name: 'Contact Us', href: '#contact' },
];

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
          scrolled ? "max-w-6xl shadow-2xl bg-white/30 dark:bg-black/40" : "bg-white/10 dark:bg-white/5"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all">
            <Image src="/logo.jpg" alt="Elevate Digital" fill className="object-cover" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Elevate <span className="text-white/80">Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-xs xl:text-sm font-bold text-white/80 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions (Language, Theme, Auth) */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Language Select */}
          <div className="relative hidden sm:block">
            <div className="flex items-center gap-1 glassy px-3 py-1.5 rounded-full border border-white/10 text-[10px] font-black text-white">
              <Globe size={12} className="text-brand-accent" />
              <select 
                value={lang}
                onChange={(e) => setLang(e.target.value)}
                className="bg-transparent border-none outline-none cursor-pointer appearance-none uppercase"
              >
                <option value="EN" className="bg-[#1b3069]">EN</option>
                <option value="FR" className="bg-[#1b3069]">FR</option>
                <option value="AR" className="bg-[#1b3069]">AR</option>
              </select>
            </div>
          </div>

          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glassy flex items-center justify-center text-white hover:bg-white/20 transition-all border border-white/10"
          >
            {isDark ? <Sun size={18} className="text-brand-accent" /> : <Moon size={18} />}
          </button>

          <Link 
            href="/auth" 
            className="hidden sm:block px-6 py-2.5 rounded-full bg-white text-[#063188] font-black text-xs xl:text-sm hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
          >
            Login / Sign In
          </Link>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-full text-white hover:bg-white/10 transition-colors"
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
            className="absolute top-24 left-4 right-4 glassy rounded-[2.5rem] p-8 lg:hidden flex flex-col gap-6 pointer-events-auto"
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
              <div className="flex gap-4">
                <button className={cn("text-xs font-black px-4 py-2 rounded-full glassy", lang === 'EN' && "bg-white text-black")}>EN</button>
                <button className={cn("text-xs font-black px-4 py-2 rounded-full glassy", lang === 'FR' && "bg-white text-black")}>FR</button>
                <button className={cn("text-xs font-black px-4 py-2 rounded-full glassy", lang === 'AR' && "bg-white text-black")}>AR</button>
              </div>
            </div>

            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="text-center px-6 py-4 rounded-full bg-white text-[#063188] font-black text-lg"
            >
              Login / Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
