'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={cn(
          "glassy rounded-full w-full max-w-6xl px-4 md:px-8 py-3 flex items-center justify-between transition-all duration-300",
          scrolled ? "py-2 max-w-5xl shadow-xl" : ""
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
              className="text-sm font-semibold text-white/90 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth Action */}
        <div className="flex items-center gap-4">
          <Link 
            href="/auth" 
            className="hidden sm:block px-6 py-2.5 rounded-full bg-white text-[#063188] font-bold text-sm hover:bg-white/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
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
            className="absolute top-24 left-4 right-4 glassy rounded-3xl p-8 lg:hidden flex flex-col gap-6"
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
            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center px-6 py-4 rounded-full bg-white text-[#063188] font-bold text-lg"
            >
              Login / Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
