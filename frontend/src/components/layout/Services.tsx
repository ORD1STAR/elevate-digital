'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Music2, CheckCircle2 } from 'lucide-react';

const serviceCategories = [
  {
    icon: <Instagram className="text-pink-500" size={40} />,
    name: "Instagram",
    services: ["Followers", "Likes", "Views", "Comments"]
  },
  {
    icon: <Facebook className="text-blue-600" size={40} />,
    name: "Facebook",
    services: ["Page Followers", "Post Likes", "Video Views", "Group Members"]
  },
  {
    icon: <Music2 className="text-black dark:text-white" size={40} />,
    name: "TikTok",
    services: ["Followers", "Likes", "Views", "Shares"]
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand-accent font-black tracking-widest uppercase text-sm mb-4"
          >
            Our Services
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-tight"
          >
            Everything You Need <br /> To <span className="text-brand-accent">Grow Fast.</span>
          </motion.h3>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassy p-10 rounded-[3rem] border border-white/10 flex flex-col items-center text-center group hover:bg-white/20 transition-all"
            >
              <div className="mb-8 p-6 rounded-full bg-white/10 group-hover:scale-110 transition-transform shadow-2xl">
                {category.icon}
              </div>
              <h4 className="text-3xl font-black text-white mb-6">{category.name}</h4>
              <ul className="space-y-4 w-full">
                {category.services.map((service) => (
                  <li key={service} className="flex items-center gap-3 text-white/70 font-semibold justify-center">
                    <CheckCircle2 size={18} className="text-brand-accent" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-10 w-full py-4 rounded-full bg-white/10 text-white font-bold hover:bg-brand-accent hover:text-[#063188] transition-all">
                View Packages
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
