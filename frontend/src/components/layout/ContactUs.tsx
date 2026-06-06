'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Info Side */}
          <div className="lg:w-1/3 space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-brand-accent font-black tracking-widest uppercase text-sm mb-4">Contact Us</h2>
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">
                Let's Talk <br /> About Your <span className="text-brand-accent">Growth.</span>
              </h3>
            </motion.div>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glassy flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-[#063188] transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Email Us</p>
                  <p className="text-white text-lg font-bold">contact@elevate-digital.dz</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glassy flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-[#063188] transition-all">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Call Us</p>
                  <p className="text-white text-lg font-bold">+213 (0) 555 12 34 56</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glassy flex items-center justify-center text-brand-accent group-hover:bg-brand-accent group-hover:text-[#063188] transition-all">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-white/50 text-sm font-bold uppercase tracking-wider">Visit Us</p>
                  <p className="text-white text-lg font-bold">Algiers, Algeria</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glassy bg-white/10 dark:bg-black/40 p-8 md:p-12 rounded-[3rem] border border-white/20 shadow-2xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-white/80 font-bold ml-4">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white focus:border-brand-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/30 font-semibold"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-white/80 font-bold ml-4">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white focus:border-brand-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/30 font-semibold"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-white/80 font-bold ml-4">Subject</label>
                  <select className="w-full px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white focus:border-brand-accent focus:bg-white/10 outline-none transition-all appearance-none font-semibold">
                    <option className="bg-[#1b3069]">General Inquiry</option>
                    <option className="bg-[#1b3069]">Instagram Boost</option>
                    <option className="bg-[#1b3069]">TikTok Boost</option>
                    <option className="bg-[#1b3069]">Partnership</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-white/80 font-bold ml-4">Your Message</label>
                  <textarea 
                    rows={4} 
                    placeholder="Tell us about your project..." 
                    className="w-full px-8 py-6 rounded-[2rem] bg-white/5 border border-white/20 text-white focus:border-brand-accent focus:bg-white/10 outline-none transition-all placeholder:text-white/30 resize-none font-semibold"
                  ></textarea>
                </div>

                <button className="w-full py-5 rounded-full bg-brand-accent text-[#063188] font-black text-xl shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  <span>Send Message</span>
                  <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
