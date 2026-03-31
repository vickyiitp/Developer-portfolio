"use client";

import { motion } from "framer-motion";
import { Globe, Play, MessageCircle, Aperture, ArrowUpRight } from "lucide-react";

export default function SocialBento() {
  return (
    <section className="w-full py-12 md:py-24 relative z-20 bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-4 auto-rows-[250px]">
          
          {/* Tile 1: LinkedIn (Tall) */}
          <motion.a 
            href="https://linkedin.com/in/vickyiitp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-1 md:row-span-2 relative p-8 border border-white/5 bg-white/[0.02] hover:bg-[#CFB53B]/5 rounded-sm flex flex-col justify-between group overflow-hidden"
          >
            <div className="z-10 flex justify-between items-start">
              <Globe className="w-6 h-6 text-[#CFB53B]" strokeWidth={1.5} />
              <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-[#CFB53B] transition-colors" />
            </div>
            <div className="z-10 mt-12">
              <span className="text-[#CFB53B] text-[10px] tracking-widest font-sans uppercase mb-2 block">Latest Insight</span>
              <p className="font-heading text-xl text-white font-medium leading-snug">
                &quot;Why 90% of agencies fail to scale their fulfillment, and the exact Automation pipeline you need instead.&quot;
              </p>
              <div className="mt-6 font-sans text-xs text-white/50 group-hover:text-white transition-colors">Read full post →</div>
            </div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#CFB53B]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.a>

          {/* Tile 2: YouTube (Wide) */}
          <motion.a 
            href="https://youtube.com/@VickyIITP"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 md:row-span-1 relative p-8 border border-white/5 bg-white/[0.02] hover:bg-[#CFB53B]/5 rounded-sm flex flex-col justify-between group overflow-hidden"
          >
            <div className="z-10 flex justify-between items-start">
              <Play className="w-6 h-6 text-white group-hover:text-[#CFB53B] transition-colors" strokeWidth={1.5} />
              <div className="bg-[#CFB53B]/20 text-[#CFB53B] text-[10px] uppercase tracking-widest px-3 py-1 rounded-full border border-[#CFB53B]/30 animate-pulse">Live Feed</div>
            </div>
            <div className="z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
              <div>
                <span className="text-white/50 text-[10px] tracking-widest font-sans uppercase mb-2 block">VLOG 042</span>
                <p className="font-heading text-2xl md:text-3xl text-white font-medium">Building a High-Ticket AI Website in 24 Hours.</p>
              </div>
              <div className="flex items-center gap-2 text-xs font-sans text-white/80 group-hover:text-[#CFB53B]">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">▶</div>
                Watch Now
              </div>
            </div>
          </motion.a>

          {/* Tile 3: X/Twitter */}
          <motion.a 
            href="https://x.com/vickyiitp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 md:row-span-1 relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] rounded-sm flex flex-col justify-between group"
          >
            <MessageCircle className="w-6 h-6 text-white/50 group-hover:text-white transition-colors" strokeWidth={1.5} />
            <div>
              <p className="font-sans text-sm text-white/80 leading-relaxed">
                If you&apos;re still manually entering lead data into your CRM in 2026, you&apos;re losing the war. Automate or evaporate.
              </p>
              <div className="mt-4 text-[#CFB53B] text-[10px] tracking-widest font-sans uppercase">@vickyiitp</div>
            </div>
          </motion.a>

          {/* Tile 4: Instagram */}
          <motion.a 
            href="https://instagram.com/vickyiitp"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1 md:row-span-1 relative p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] rounded-sm flex flex-col justify-center items-center group overflow-hidden"
          >
            {/* Visual gradient to mimic IG aesthetic slightly but keeping it dark */}
            <div className="absolute inset-0 bg-linear-to-tr from-purple-500/10 via-pink-500/5 to-[#CFB53B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
            
            <Aperture className="w-10 h-10 text-white/30 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 mb-4" strokeWidth={1} />
            <p className="font-heading text-lg text-white font-medium">The Creative Side</p>
            <p className="font-sans text-[10px] text-white/50 tracking-widest uppercase mt-2">BTS & Life at IIT Patna</p>
          </motion.a>

        </div>
      </div>
    </section>
  );
}
