'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Music2, CheckCircle2, Loader2 } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';

interface Service {
  _id: string;
  name: {
    en: string;
    fr: string;
    ar: string;
  };
  platform: string;
  type: string;
  price: number;
}

export default function Services() {
  const t = useTranslations('Services');
  const locale = useLocale() as 'en' | 'fr' | 'ar';
  const [services, setServices] = useState<Service[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';
    fetch(`${apiUrl}/services`)
      .then(res => res.json())
      .then(data => {
        setServices(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.error('Fetch error:', err);
        setIsLoading(false);
      });
  }, []);

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'Instagram': return <Instagram className="text-pink-500" size={32} />;
      case 'Facebook': return <Facebook className="text-blue-600" size={32} />;
      case 'TikTok': return <Music2 className="text-black dark:text-white" size={32} />;
      default: return null;
    }
  };

  const platforms = Array.from(new Set(services.map(s => s.platform)));

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

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="animate-spin text-brand-accent" size={48} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {platforms.map((platform, index) => {
              const platformServices = services.filter(s => s.platform === platform);
              return (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glassy p-10 rounded-[3rem] border border-white/10 flex flex-col items-center group transition-all hover:translate-y-[-5px]"
                >
                  <div className="mb-8 w-16 h-16 rounded-full glassy flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform">
                    {getPlatformIcon(platform)}
                  </div>

                  <h4 className="text-2xl font-black text-white mb-8">{platform}</h4>
                  
                  <ul className="space-y-4 mb-12 flex-1">
                    {platformServices.map((service) => (
                      <li key={service._id} className="flex items-center gap-3 text-white/60 font-bold justify-center text-sm">
                        <CheckCircle2 size={16} className="text-brand-accent opacity-50" />
                        <span>{service.type}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-4 rounded-3xl bg-white/10 text-white font-black text-sm hover:bg-white/20 transition-all shadow-xl">
                    {t('viewPackages')}
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
