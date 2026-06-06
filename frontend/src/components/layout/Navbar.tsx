'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Moon, Sun } from 'lucide-react';
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
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 100, damping: 20 }}
        className={cn(
          "glassy bubbly-lg w-full max-w-6xl px-6 py-3 flex items-center justify-between transition-all duration-300",
          scrolled ? "shadow-lg scale-95" : "shadow-md"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpg" alt="Elevate Digital Logo" width={40} height={40} className="rounded-full" />
          <span className="font-bold text-xl tracking-tight hidden sm:block">
            Elevate <span className="text-secondary font-extrabold">Digital</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium hover:text-secondary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Auth & Theme Actions */}
        <div className="flex items-center gap-4">
          <Link 
            href="/auth" 
            className="hidden sm:block px-6 py-2 bubbly bg-secondary text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Login / Sign In
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 bubbly bg-white/10 hover:bg-white/20 transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 glassy bubbly-lg p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-semibold hover:text-secondary transition-colors p-2"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="/auth" 
              onClick={() => setIsOpen(false)}
              className="mt-2 text-center px-6 py-3 bubbly bg-secondary text-white font-bold"
            >
              Login / Sign In
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
