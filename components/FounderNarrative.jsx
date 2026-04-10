"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import InteractiveTilt from "@/components/InteractiveTilt";

export default function FounderNarrative() {
  return (
    <section className="w-full py-24 md:py-36 relative z-20 bg-[#0A0A0A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="mb-16 md:mb-24 text-center md:text-left">
          <p className="text-[#CFB53B] font-sans text-xs tracking-[0.3em] font-medium uppercase mb-4">Behind the Code</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white drop-shadow-[0_4px_12px_rgba(207,181,59,0.1)]">
            Architecting <span className="text-[#CFB53B] italic">Digital Frontiers.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Founder Image / Story */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <InteractiveTilt className="relative w-full aspect-square max-w-md mx-auto lg:mx-0 rounded-[2.5rem] p-2 bg-gradient-to-tr from-pink-400 via-[#CFB53B] to-cyan-400 shadow-[0_20px_40px_rgba(207,181,59,0.25),inset_0_4px_15px_rgba(255,255,255,0.7)] group pointer-events-auto">
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-[inset_0_-4px_10px_rgba(0,0,0,0.5)] bg-black">
                <Image
                  src="/profile.jpg"
                  alt="Vicky - Founder of Devil Labs"
                  width={500}
                  height={500}
                  className="w-full h-full object-cover grayscale-0 transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-white/30 pointer-events-none mix-blend-overlay rounded-[2rem]"></div>
                <div className="absolute top-0 left-[15%] right-[15%] h-[15%] bg-gradient-to-b from-white/50 to-transparent rounded-full blur-[3px] pointer-events-none"></div>
                <div className="absolute bottom-6 left-6 border-l-4 border-white pl-4 drop-shadow-md z-10" style={{ transform: "translateZ(40px)" }}>
                  <p className="text-white font-heading text-2xl font-bold tracking-tight">Vicky</p>
                  <p className="text-white/90 font-sans text-xs tracking-[0.2em] font-bold uppercase drop-shadow-md">CEO, Devil Labs</p>
                </div>
              </div>
            </InteractiveTilt>

            <p className="font-sans text-lg text-white/80 leading-relaxed font-light">
              From the lecture halls of IIT Patna to the high-stakes world of Devil Labs, Vicky engineers the future. A 2nd-year B.Sc. student specializing in Data Analytics, he combines academic rigor with real-world automation to build systems that scale effortlessly.
            </p>
          </motion.div>

          {/* Right: 365 Days Stats Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="col-span-1 sm:col-span-2 mb-4">
              <h3 className="text-xl font-heading font-medium text-white tracking-widest uppercase drop-shadow-[0_2px_8px_rgba(207,181,59,0.15)]">365 Days of Building</h3>
              <div className="h-px w-full bg-linear-to-r from-[#CFB53B]/50 to-transparent mt-4"></div>
            </div>

            <StatCard label="Projects Deployed" value="100+" delay={0.1} />
            <StatCard label="Hours Saved" value="10k+" delay={0.2} />
            <StatCard label="Code Commits" value="5k+" delay={0.3} />
            <StatCard label="Client ROI" value="300%" delay={0.4} />

          </motion.div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ label, value, delay }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm rounded-sm hover:bg-[#CFB53B]/5 hover:border-[#CFB53B]/30 transition-all duration-500 group"
    >
      <h4 className="font-heading text-5xl font-black text-transparent bg-clip-text bg-linear-to-br from-white to-white/50 group-hover:from-[#CFB53B] group-hover:to-[#CFB53B]/50 transition-colors duration-500 mb-2">
        {value}
      </h4>
      <p className="font-sans text-xs tracking-[0.2em] text-white/40 uppercase group-hover:text-white/80 transition-colors">{label}</p>
    </motion.div>
  );
}
