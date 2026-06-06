'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden mesh-gradient">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-brand-secondary/10 rounded-full blur-[100px]" 
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-8 px-5 py-2 rounded-full glassy border border-white/20 inline-flex items-center gap-2 text-white text-sm font-semibold shadow-2xl"
          >
            <Sparkles size={16} className="text-brand-accent" />
            <span>{t('badge')}</span>
          </motion.div>

          {/* Logo with Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-12"
          >
            <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full" />
            <div className="relative p-6 glassy rounded-3xl border border-white/30 shadow-2xl">
              <Image 
                src="/logo.jpg" 
                alt="Elevate Digital Logo" 
                width={140} 
                height={140} 
                className="rounded-2xl shadow-inner"
              />
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter"
          >
            {t('title')} <br />
            <span className="text-brand-accent drop-shadow-sm">{t('subtitle')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 font-medium leading-relaxed"
          >
            {t('description')}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full"
          >
            <button className="group relative w-full sm:w-auto px-10 py-5 rounded-full bg-white text-[#063188] font-black text-xl shadow-xl transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2 overflow-hidden">
              <span className="relative z-10">{t('explore')}</span>
              <ArrowRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              <div className="absolute inset-0 bg-brand-accent/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            
            <button className="w-full sm:w-auto px-10 py-5 rounded-full glassy text-white font-bold text-xl border border-white/30 hover:bg-white/10 transition-all hover:scale-105 active:scale-95 shadow-xl">
              {t('learnMore')}
            </button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all"
          >
            <div className="flex items-center gap-2 text-white font-bold">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
              <span>{t('fastDelivery')}</span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
              <span>{t('safeSecure')}</span>
            </div>
            <div className="flex items-center gap-2 text-white font-bold">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">✓</div>
              <span>{t('support')}</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
