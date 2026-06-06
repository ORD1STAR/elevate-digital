'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslations, useLocale } from 'next-intl';
import LanguageSelector from './LanguageSelector';
import ThemeSelector from './ThemeSelector';
import { useTheme } from '@/context/ThemeContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
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

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileHover={{ scale: 1.02 }}
        className={cn(
          "rounded-full w-auto max-w-7xl px-4 md:px-10 py-3 flex items-center justify-between transition-all duration-500 pointer-events-auto border transition-transform",
          theme === 'light'
            ? scrolled 
              ? "bg-white text-[#063188] border-black/5 shadow-2xl" 
              : "bg-[#85a3e1]/10 text-[#063188] border-black/5"
            : theme === 'dark'
              ? scrolled
                ? "bg-[#1b3069] text-white border-white/5 shadow-2xl"
                : "bg-white/5 text-white border-white/5"
              : scrolled
                ? "glassy shadow-2xl border-white/50"
                : "glassy bg-white/20 border-white/30 text-white!"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group shrink-0 mr-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/50 transition-all shadow-lg">
            <Image src="/logo.jpg" alt="Elevate Digital" fill className="object-cover" />
          </div>
          <span className={cn(
            "font-black text-lg xl:text-xl tracking-tight hidden lg:block whitespace-nowrap",
            theme === 'light' ? "text-[#063188]" : "text-white"
          )}>
            Elevate <span className="opacity-60">Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center justify-center gap-2 xl:gap-6 flex-1 min-w-0 px-4">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className={cn(
                "text-xs xl:text-sm font-bold transition-all whitespace-nowrap px-3 py-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5",
                theme === 'light' 
                  ? "text-[#063188]/70 hover:text-[#063188]" 
                  : "text-white/70 hover:text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Actions (Language, Theme, Auth) */}
        <div className="flex items-center gap-2 xl:gap-4 shrink-0 ml-4">
          <div className="hidden sm:block">
            <LanguageSelector scrolled={theme === 'light' || scrolled} />
          </div>

          <div className="hidden sm:block">
            <ThemeSelector scrolled={theme === 'light' || scrolled} />
          </div>

          <Link 
            href="/auth" 
            className={cn(
              "hidden sm:flex px-6 xl:px-10 py-2.5 rounded-full font-black text-xs xl:text-sm transition-all hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap items-center justify-center",
              theme === 'light'
                ? "bg-[#063188] text-white hover:shadow-[#063188]/30"
                : "bg-white text-[#063188] hover:bg-white/90 shadow-white/10"
            )}
          >
            {locale === 'fr' ? 'Connexion' : locale === 'ar' ? 'دخول' : 'Login'}
          </Link>

          <button 
            onClick={toggleMenu}
            className={cn(
              "lg:hidden p-2 rounded-full transition-colors",
              theme === 'light' ? "text-[#063188] hover:bg-black/5" : "text-white hover:bg-white/10"
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
                <ThemeSelector />
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
