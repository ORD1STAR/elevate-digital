'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSelector from './LanguageSelector';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const t = useTranslations('Navbar');
  const locale = useLocale();

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('whoAreWe'), href: '#who-are-we' },
    { name: t('experiences'), href: '#experiences' },
    { name: t('services'), href: '#services' },
    { name: t('feedbacks'), href: '#feedbacks' },
    { name: t('contact'), href: '#contact' },
  ];

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
        whileHover={{ scale: 1.05 }}
        className={cn(
          "rounded-full w-full max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-500 pointer-events-auto border transition-transform",
          scrolled 
            ? "glassy shadow-2xl bg-white/90! border-white/50" 
            : "glassy bg-white/20 border-white/30 text-white!"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 mr-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all">
            <Image src="/logo.jpg" alt="Elevate Digital" fill className="object-cover" />
          </div>
          <span className={cn(
            "font-black text-lg xl:text-xl tracking-tight hidden lg:block whitespace-nowrap",
            scrolled ? "text-[#063188]" : "text-white"
          )}>
            Elevate <span className={cn(scrolled ? "text-[#063188]/60" : "text-white/60")}>Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center gap-3 xl:gap-6 flex-1 px-2">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-black transition-colors whitespace-nowrap",
                scrolled 
                  ? "text-[#063188]" 
                  : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions (Language, Theme, Auth) */}
        <div className="flex items-center gap-2 xl:gap-4 shrink-0 ml-2">
          <div className="hidden sm:block">
            <LanguageSelector scrolled={scrolled} />
          </div>

          {/* Theme Switcher */}
          <button 
            onClick={toggleTheme}
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center transition-all border shrink-0",
              scrolled 
                ? "bg-[#063188]/5 border-[#063188]/10" 
                : "bg-white/10 hover:bg-white/20 border-white/20"
            )}
          >
            {isDark ? <Sun size={18} className="text-brand-accent" /> : <Moon size={18} className={cn(scrolled ? "text-[#063188]" : "text-white")} />}
          </button>

          <Link 
            href="/auth" 
            className={cn(
              "hidden sm:flex px-6 xl:px-8 py-2.5 rounded-full font-black text-xs xl:text-sm transition-all hover:scale-105 active:scale-95 shadow-lg whitespace-nowrap items-center justify-center",
              scrolled
                ? "bg-[#063188] text-white hover:shadow-[#063188]/20"
                : "bg-white text-[#063188] hover:bg-white/90"
            )}
          >
            {locale === 'fr' ? 'Connexion' : locale === 'ar' ? 'دخول' : 'Login'}
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
                <LanguageSelector />
              </div>
            </div>

            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="text-center px-6 py-4 rounded-full bg-white text-[#063188] font-black text-lg shadow-xl"
            >
              {t('login')}
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
