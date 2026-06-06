'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, Loader2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useState, useEffect } from 'react';

interface Feedback {
  _id: string;
  user: {
    name: string;
    role: string;
  };
  content: {
    en: string;
    fr: string;
    ar: string;
  };
  rating: number;
}

export default function Feedbacks() {
  const t = useTranslations('Feedbacks');
  const locale = useLocale() as 'en' | 'fr' | 'ar';
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    fetch(`${apiUrl}/feedbacks`)
      .then(res => res.json())
      .then(data => {
        setFeedbacks(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setIsLoading(false);
      });
  }, []);

  return (
    <section id="feedbacks" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-brand-accent font-black tracking-widest uppercase text-sm mb-4"
            >
              {t('badge')}
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight"
            >
              {t('title')} <span className="text-brand-accent">{t('customersSay')}</span>
            </motion.h3>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} className="text-brand-accent fill-brand-accent" />
            ))}
          </div>
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-brand-accent" size={48} />
          </div>
        ) : (
          /* Carousel / Grid */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {feedbacks.map((feedback, index) => (
              <motion.div
                key={feedback._id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassy p-10 rounded-[3rem] border border-white/10 relative group hover:bg-white/20 transition-all"
              >
                <Quote className="absolute top-8 right-8 text-white/10 group-hover:text-brand-accent/20 transition-colors rtl:left-8 rtl:right-auto rtl:-scale-x-100" size={60} />
                
                <div className="flex gap-1 mb-6 rtl:flex-row-reverse rtl:justify-end">
                  {[...Array(feedback.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
                  ))}
                </div>

                <p className="text-lg font-bold leading-relaxed mb-10 italic">
                  &quot;{feedback.content[locale]}&quot;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-primary flex items-center justify-center font-black text-white">
                    {feedback.user.name[0]}
                  </div>
                  <div>
                    <h4 className="font-black">{feedback.user.name}</h4>
                    <p className="opacity-60 text-sm font-bold">{feedback.user.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
