'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const feedbacks = [
  {
    name: "Ahmed Bensalah",
    role: "E-commerce Owner",
    content: "Elevate Digital transformed my Instagram page. The followers were high quality and it really helped my social proof!",
    rating: 5
  },
  {
    name: "Sara Mahdi",
    role: "Content Creator",
    content: "Fast delivery and great support. I've been using their TikTok likes service for months now.",
    rating: 5
  },
  {
    name: "Yacine Kheris",
    role: "Dropshipper",
    content: "The best SMM panel in Algeria. Easy to use dashboard and very reliable services.",
    rating: 5
  }
];

export default function Feedbacks() {
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
              Feedbacks
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-white leading-tight"
            >
              What Our <span className="text-brand-accent">Customers Say.</span>
            </motion.h3>
          </div>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} className="text-brand-accent fill-brand-accent" />
            ))}
          </div>
        </div>

        {/* Carousel / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glassy p-10 rounded-[3rem] border border-white/10 relative group hover:bg-white/20 transition-all"
            >
              <Quote className="absolute top-8 right-8 text-white/10 group-hover:text-brand-accent/20 transition-colors" size={60} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(feedback.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
                ))}
              </div>

              <p className="text-lg text-white/80 leading-relaxed font-medium mb-10 italic">
                "{feedback.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-accent flex items-center justify-center font-bold text-[#063188]">
                  {feedback.name[0]}
                </div>
                <div>
                  <h4 className="text-white font-bold">{feedback.name}</h4>
                  <p className="text-white/50 text-sm font-medium">{feedback.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
