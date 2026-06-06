'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, AtSign, Eye, EyeOff } from 'lucide-react';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const toggleAuth = () => setIsLogin(!isLogin);

  return (
    <main className="min-h-screen mesh-gradient flex items-center justify-center p-6 overflow-hidden relative">
      
      {/* Back to Home */}
      <Link 
        href="/" 
        className="absolute top-10 left-10 glassy p-4 rounded-full text-white hover:scale-110 transition-all z-20 flex items-center gap-2 font-bold"
      >
        <ArrowLeft size={20} />
        <span className="hidden sm:block">Back to Home</span>
      </Link>

      {/* Auth Container Bubble */}
      <div className="relative w-full max-w-xl z-10">
        
        <AnimatePresence mode="wait">
          {isLogin ? (
            /* LOGIN FORM */
            <motion.div
              key="login"
              initial={{ x: -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -1000, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="glassy p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl relative overflow-hidden"
            >
              <div className="text-center mb-12">
                <div className="w-20 h-20 mx-auto mb-6 p-1 rounded-3xl glassy border border-white/30">
                  <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="rounded-2xl" />
                </div>
                <h1 className="text-4xl font-black text-white mb-2">Welcome Back</h1>
                <p className="text-white/60 font-medium">Log in to your Elevate account</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-white/70 font-bold ml-6 text-sm">Email or Username</label>
                  <div className="relative">
                    <AtSign className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 z-10" size={20} />
                    <input 
                      type="text" 
                      placeholder="john_doe" 
                      className="input-bubbly pl-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 font-bold ml-6 text-sm">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 z-10" size={20} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="input-bubbly pl-14 pr-14"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-colors z-10"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end px-2">
                  <button type="button" className="text-white/50 text-sm font-bold hover:text-brand-accent transition-colors">
                    Forgot Password?
                  </button>
                </div>

                <button className="w-full py-5 rounded-full bg-white text-[#063188] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Login
                </button>
              </form>

              <div className="mt-12 text-center pt-8 border-t border-white/10">
                <p className="text-white/50 font-bold">
                  New to Elevate? 
                  <button 
                    onClick={toggleAuth}
                    className="ml-2 text-brand-accent hover:underline decoration-2 underline-offset-4"
                  >
                    Create an account
                  </button>
                </p>
              </div>
            </motion.div>
          ) : (
            /* REGISTER FORM */
            <motion.div
              key="register"
              initial={{ x: 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 1000, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="glassy p-10 md:p-16 rounded-[4rem] border border-white/20 shadow-2xl relative overflow-hidden"
            >
              <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-white mb-2">Join Elevate</h1>
                <p className="text-white/60 font-medium">Start your growth journey today</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-white/70 font-bold ml-6 text-sm">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 z-10" size={20} />
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="input-bubbly pl-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 font-bold ml-6 text-sm">Email Address</label>
                  <div className="relative">
                    <Mail className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 z-10" size={20} />
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="input-bubbly pl-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 font-bold ml-6 text-sm">Username</label>
                  <div className="relative">
                    <AtSign className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 z-10" size={20} />
                    <input 
                      type="text" 
                      placeholder="john_doe" 
                      className="input-bubbly pl-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white/70 font-bold ml-6 text-sm">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-6 top-1/2 -translate-y-1/2 text-white/30 z-10" size={20} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      placeholder="••••••••" 
                      className="input-bubbly pl-14 pr-14"
                    />
                  </div>
                </div>

                <button className="w-full mt-4 py-5 rounded-full bg-brand-accent text-[#063188] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Sign Up
                </button>
              </form>

              <div className="mt-10 text-center pt-8 border-t border-white/10">
                <p className="text-white/50 font-bold">
                  Already have an account? 
                  <button 
                    onClick={toggleAuth}
                    className="ml-2 text-white hover:underline decoration-2 underline-offset-4"
                  >
                    Log in
                  </button>
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Background Decor Bubbles */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity }}
        className="absolute -top-40 -left-40 w-96 h-96 bg-brand-accent/20 rounded-full blur-[100px] pointer-events-none" 
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity }}
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[120px] pointer-events-none" 
      />
    </main>
  );
}
