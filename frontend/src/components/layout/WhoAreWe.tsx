'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WhoAreWe() {
  const t = useTranslations('WhoAreWe');

  const features = [
    {
      icon: <Zap className="text-brand-accent" size={32} />,
      title: t('fastTitle'),
      description: t('fastDesc')
    },
    {
      icon: <Shield className="text-brand-accent" size={32} />,
      title: t('secureTitle'),
      description: t('secureDesc')
    },
    {
      icon: <Target className="text-brand-accent" size={32} />,
      title: t('qualityTitle'),
      description: t('qualityDesc')
    }
  ];

  return (
    <section id="who-are-we" className="py-24 bg-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-brand-accent font-black tracking-widest uppercase text-sm">{t('badge')}</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                {t('title')} <span className="text-brand-accent">{t('since')}</span>
              </h3>
              <p className="text-lg text-white/70 leading-relaxed font-medium">
                {t('description')}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white">500+</h4>
                  <p className="text-white/60 font-medium text-sm italic">{t('happyClients')}</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold text-white">1M+</h4>
                  <p className="text-white/60 font-medium text-sm italic">{t('servicesDelivered')}</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Cards */}
          <div className="lg:w-1/2 grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glassy p-8 rounded-3xl border border-white/10 flex items-start gap-6 hover:bg-white/20 transition-all group"
              >
                <div className="p-4 rounded-2xl bg-white/10 group-hover:bg-brand-accent/20 transition-colors shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
