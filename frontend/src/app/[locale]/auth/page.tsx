'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Mail, Lock, User, AtSign, Eye, EyeOff, ArrowRight, Loader2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AuthPage() {
  const t = useTranslations('Auth');
  const locale = useLocale();
  const isRtl = locale === 'ar';
  const router = useRouter();
  const { login } = useAuth();

  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Form states
  const [formData, setFormData] = useState({
    identifier: '', // email or username for login
    email: '',      // for register
    username: '',   // for register
    displayName: '', // for register
    password: ''
  });

  const toggleAuth = () => {
    setIsLogin(!isLogin);
    setError('');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    const endpoint = isLogin ? '/auth/login' : '/auth/register';
    
    try {
      const body = isLogin 
        ? { identifier: formData.identifier, password: formData.password }
        : { 
            displayName: formData.displayName, 
            username: formData.username, 
            email: formData.email, 
            password: formData.password 
          };

      const response = await fetch(`${apiUrl}${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      login(data.token, data.user);
      router.push(`/${locale}/dashboard`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen mesh-gradient flex items-center justify-center p-6 overflow-hidden relative">
      
      {/* Back to Home */}
      <Link 
        href="/" 
        className="absolute top-10 left-10 rtl:left-auto rtl:right-10 glassy p-4 rounded-full text-white hover:scale-110 transition-all z-20 flex items-center gap-2 font-bold"
      >
        {isRtl ? <ArrowRight size={20} /> : <ArrowLeft size={20} />}
        <span className="hidden sm:block">{t('backHome')}</span>
      </Link>

      {/* Auth Container Bubble */}
      <div className="relative w-full max-w-xl z-10">
        
        <AnimatePresence mode="wait">
          {isLogin ? (
            /* LOGIN FORM */
            <motion.div
              key="login"
              initial={{ x: isRtl ? 1000 : -1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRtl ? 1000 : -1000, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="glassy bg-white/50! p-10 md:p-16 rounded-[4rem] border border-white/40 shadow-2xl relative overflow-hidden"
            >
              <div className="text-center mb-12">
                <div className="w-20 h-20 mx-auto mb-6 p-1 rounded-3xl glassy border border-white/50 bg-white/20">
                  <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="rounded-2xl" />
                </div>
                <h1 className="text-4xl font-black text-[#063188] mb-2">{t('welcomeBack')}</h1>
                <p className="text-[#063188]/70 font-black">{t('loginSubtitle')}</p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/20 border border-red-500/50 text-[#063188] text-sm font-black text-center">
                  {error}
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[#063188]/80 font-black ml-6 rtl:ml-0 rtl:mr-6 text-sm uppercase tracking-wider">{t('emailOrUsername')}</label>
                  <div className="relative">
                    <AtSign className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 text-[#063188]/40 z-10" size={20} />
                    <input 
                      type="text" 
                      name="identifier"
                      value={formData.identifier}
                      onChange={handleInputChange}
                      placeholder="john_doe" 
                      required
                      className="input-bubbly !bg-white/40 !border-white/60 !text-[#063188] !placeholder-[#063188]/30 shadow-inner pl-14 pr-14 rtl:pl-6 rtl:pr-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#063188]/80 font-black ml-6 rtl:ml-0 rtl:mr-6 text-sm uppercase tracking-wider">{t('password')}</label>
                  <div className="relative">
                    <Lock className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 text-[#063188]/40 z-10" size={20} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••" 
                      required
                      className="input-bubbly !bg-white/40 !border-white/60 !text-[#063188] !placeholder-[#063188]/30 shadow-inner pl-14 pr-14 rtl:pl-6 rtl:pr-14"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-6 rtl:right-auto rtl:left-6 top-1/2 -translate-y-1/2 text-[#063188]/40 hover:text-[#063188] transition-colors z-10"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                <div className="flex justify-end px-2">
                  <button type="button" className="text-[#063188]/60 text-sm font-black hover:text-brand-accent transition-colors">
                    {t('forgotPassword')}
                  </button>
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full py-5 rounded-full bg-[#063188] text-white font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {isLoading && <Loader2 className="animate-spin" size={24} />}
                  {t('login')}
                </button>
              </form>

              <div className="mt-12 text-center pt-8 border-t border-[#063188]/10">
                <p className="text-[#063188]/60 font-black">
                  {t('newToElevate')} 
                  <button 
                    onClick={toggleAuth}
                    className="mx-2 text-brand-accent hover:underline decoration-2 underline-offset-4"
                  >
                    {t('createAccount')}
                  </button>
                </p>
              </div>
            </motion.div>
          ) : (
            /* REGISTER FORM */
            <motion.div
              key="register"
              initial={{ x: isRtl ? -1000 : 1000, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: isRtl ? -1000 : 1000, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 100 }}
              className="glassy bg-white/50! p-10 md:p-16 rounded-[4rem] border border-white/40 shadow-2xl relative overflow-hidden"
            >
              <div className="text-center mb-10">
                <h1 className="text-4xl font-black text-[#063188] mb-2">{t('joinElevate')}</h1>
                <p className="text-[#063188]/70 font-black">{t('registerSubtitle')}</p>
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-red-500/20 border border-red-500/50 text-[#063188] text-sm font-black text-center">
                  {error}
                </div>
              )}

              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="space-y-2">
                  <label className="text-[#063188]/80 font-black ml-6 rtl:ml-0 rtl:mr-6 text-sm uppercase tracking-wider">{t('fullName')}</label>
                  <div className="relative">
                    <User className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 text-[#063188]/40 z-10" size={20} />
                    <input 
                      type="text" 
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      required
                      className="input-bubbly !bg-white/40 !border-white/60 !text-[#063188] !placeholder-[#063188]/30 shadow-inner pl-14 pr-14 rtl:pl-6 rtl:pr-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#063188]/80 font-black ml-6 rtl:ml-0 rtl:mr-6 text-sm uppercase tracking-wider">{t('emailAddress')}</label>
                  <div className="relative">
                    <Mail className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 text-[#063188]/40 z-10" size={20} />
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@example.com" 
                      required
                      className="input-bubbly !bg-white/40 !border-white/60 !text-[#063188] !placeholder-[#063188]/30 shadow-inner pl-14 pr-14 rtl:pl-6 rtl:pr-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#063188]/80 font-black ml-6 rtl:ml-0 rtl:mr-6 text-sm uppercase tracking-wider">{t('username')}</label>
                  <div className="relative">
                    <AtSign className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 text-[#063188]/40 z-10" size={20} />
                    <input 
                      type="text" 
                      name="username"
                      value={formData.username}
                      onChange={handleInputChange}
                      placeholder="john_doe" 
                      required
                      className="input-bubbly !bg-white/40 !border-white/60 !text-[#063188] !placeholder-[#063188]/30 shadow-inner pl-14 pr-14 rtl:pl-6 rtl:pr-14"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[#063188]/80 font-black ml-6 rtl:ml-0 rtl:mr-6 text-sm uppercase tracking-wider">{t('password')}</label>
                  <div className="relative">
                    <Lock className="absolute left-6 rtl:left-auto rtl:right-6 top-1/2 -translate-y-1/2 text-[#063188]/40 z-10" size={20} />
                    <input 
                      type={showPassword ? "text" : "password"} 
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••" 
                      required
                      className="input-bubbly !bg-white/40 !border-white/60 !text-[#063188] !placeholder-[#063188]/30 shadow-inner pl-14 pr-14 rtl:pl-6 rtl:pr-14"
                    />
                  </div>
                </div>

                <button 
                  disabled={isLoading}
                  className="w-full mt-4 py-5 rounded-full bg-[#063188] text-white font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  {isLoading && <Loader2 className="animate-spin" size={24} />}
                  {t('signUp')}
                </button>
              </form>

              <div className="mt-10 text-center pt-8 border-t border-[#063188]/10">
                <p className="text-[#063188]/60 font-black">
                  {t('alreadyHaveAccount')} 
                  <button 
                    onClick={toggleAuth}
                    className="mx-2 text-brand-accent hover:underline decoration-2 underline-offset-4"
                  >
                    {t('logIn')}
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
