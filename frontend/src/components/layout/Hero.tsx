'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative min-vh-100 flex items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Bubbles Decor */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0] 
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 -left-20 w-80 h-80 bg-secondary/20 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        animate={{ 
          scale: [1.2, 1, 1.2],
          x: [0, -40, 0],
          y: [0, 40, 0] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/10 rounded-full blur-3xl -z-10" 
      />

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: 'spring' }}
          className="mb-8 inline-block"
        >
          <div className="glassy bubbly p-4 inline-flex items-center justify-center">
            <Image 
              src="/logo.jpg" 
              alt="Elevate Digital Logo" 
              width={120} 
              height={120} 
              className="rounded-full shadow-xl"
            />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight"
        >
          Elevate Your <span className="text-secondary">Digital Presence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl opacity-90 max-w-2xl mx-auto mb-10 font-medium"
        >
          Providing high-quality social media boosts for Algerian e-commercants. 
          Real results, modern solutions, and exceptional growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto px-10 py-4 bubbly-lg bg-secondary text-white font-bold text-lg shadow-xl hover:scale-105 transition-transform">
            Explore Services
          </button>
          <button className="w-full sm:w-auto px-10 py-4 bubbly-lg glassy font-bold text-lg shadow-lg hover:scale-105 transition-transform">
            Who Are We?
          </button>
        </motion.div>
      </div>
    </section>
  );
}
