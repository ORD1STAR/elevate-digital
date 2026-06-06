'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Music2, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations('Services');

  const serviceCategories = [
    {
      icon: <Instagram className="text-pink-500" size={32} />,
      name: t('instagram'),
      services: [t('followers'), t('likes'), t('views'), t('comments')]
    },
    {
      icon: <Facebook className="text-blue-600" size={32} />,
      name: t('facebook'),
      services: [t('pageFollowers'), t('postLikes'), t('videoViews'), t('groupMembers')]
    },
    {
      icon: <Music2 className="text-black dark:text-white" size={32} />,
      name: t('tiktok'),
      services: [t('followers'), t('likes'), t('views'), t('shares')]
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-black tracking-widest uppercase text-xs mb-3"
          >
            {t('badge')}
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight"
          >
            {t('title')} <br /> <span className="text-brand-accent">{t('growFast')}</span>
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassy p-10 rounded-[3rem] border border-white/10 flex flex-col items-center group transition-all hover:translate-y-[-5px]"
            >
              {/* Central Icon */}
              <div className="mb-8 w-16 h-16 rounded-full glassy flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                {category.icon}
              </div>

              <h4 className="text-2xl font-black text-white mb-8">{category.name}</h4>
              
              <ul className="space-y-4 mb-12 flex-1">
                {category.services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-white/60 font-bold justify-center text-sm">
                    <CheckCircle2 size={16} className="text-brand-accent opacity-50" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <button className="w-full py-4 rounded-3xl bg-white/10 text-white font-black text-sm hover:bg-white/20 transition-all shadow-xl">
                {t('viewPackages')}
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
