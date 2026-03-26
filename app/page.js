"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";

/* Static imports for critical above-the-fold content */
import SEOIndex from "@/components/SEOIndex";

/* Dynamic imports for below-the-fold components (Optimizes 4.5s load time to < 1s) */
const SkillsOrbit = dynamic(() => import("@/components/SkillsOrbit"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const FounderNarrative = dynamic(() => import("@/components/FounderNarrative"), { ssr: false });
const SocialBento = dynamic(() => import("@/components/SocialBento"), { ssr: false });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

/* ═══════════════════════════════════════
   WIREFRAME:
   1. HERO — Hook + CTA + Profile
   2. EFFICIENCY ENGINE — Workflow Process
   3. SERVICES — Editorial Magazine Layout
   4. SKILLS — Decorative Skill Bars
   5. PROJECTS — Case Studies & Portfolio
   6. TESTIMONIALS — Marquee Client Strip
   7. FOUNDER — IIT Patna Narrative
   8. SOCIAL — Bento Grid Links
   9. FAQ — Doubt Killer
   10. CONTACT — Lead Gen Form
   11. SEO — Hidden Schema Data
   12. FOOTER — Credits & Links
   ═══════════════════════════════════════ */


/* ── 3D Candy Blobs (Pure CSS - GPU Accelerated) ── */
function CandyBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base ambient glow and grid mask for texture */}
      <div suppressHydrationWarning className="absolute inset-0 bg-[#0A0A0A]/60 z-10 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" />
      
      {/* Huge central rotating blob (Gold) */}
      <div 
        className="candy-blob absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] md:w-[45vw] md:h-[45vw] bg-accent/30 rounded-full"
        style={{ animationDelay: "0s" }}
      />
      
      {/* Top right secondary blob (Soft Purple/Pink) */}
      <div 
        className="candy-blob absolute -top-[10%] -right-[5%] w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-[#a855f7]/20 rounded-full"
        style={{ animationDelay: "-4s" }}
      />
      
      {/* Bottom left third blob (Soft Blue/Cyan) */}
      <div 
        className="candy-blob absolute -bottom-[15%] -left-[10%] w-[60vw] h-[60vw] md:w-[35vw] md:h-[35vw] bg-[#06b6d4]/15 rounded-full"
        style={{ animationDelay: "-8s" }}
      />
    </div>
  );
}


export default function Home() {

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[85vh] overflow-x-hidden relative">

      {/* ═══ 1. HERO SECTION ═══ */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-y-12 md:gap-x-12 lg:gap-x-20 items-center py-20 relative px-6 md:px-16 min-h-[85vh]"
      >
        {/* Background Effects Layer */}
        <CandyBlobs />

        {/* Row 1, Col 1: Header & Title */}
        <div className="order-1 md:order-none md:col-start-1 md:row-start-1 flex flex-col items-center md:items-start text-center md:text-left z-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-accent font-sans text-xs tracking-[0.4em] uppercase mb-6"
          >
            Vicky Kumar <span className="mx-1 opacity-50">|</span> IIT Patna
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-heading text-[clamp(2.5rem,8vw,5.5rem)] font-bold leading-[1.05] text-white tracking-tighter"
          >
            The <span className="text-accent italic">Automation</span> <br /> Architect.
          </motion.h1>
        </div>

        {/* Row 1-2, Col 2: Profile Image */}
        {/* Row 1-2, Col 2: Profile Image & Floating Elements */}
        <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center w-full relative min-h-[300px] md:min-h-[500px]">
          {/* Floating Stat Badge 1: Clients */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, -15, 0]
            }}
            transition={{ 
              opacity: { delay: 1.2, duration: 0.8 },
              x: { delay: 1.2, duration: 0.8 },
              y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute top-[10%] -left-4 md:-left-8 z-30 bg-background/40 backdrop-blur-xl border border-white/10 p-4 rounded-sm shadow-2xl hidden sm:block"
          >
            <div className="text-accent text-2xl font-heading font-bold">10+</div>
            <div className="text-white/40 text-[9px] tracking-widest uppercase font-sans">Clients Deal</div>
          </motion.div>

          {/* Floating Stat Badge 2: Guidance */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ 
              opacity: 1, 
              x: 0,
              y: [0, 15, 0]
            }}
            transition={{ 
              opacity: { delay: 1.4, duration: 0.8 },
              x: { delay: 1.4, duration: 0.8 },
              y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
            }}
            className="absolute bottom-[20%] -right-4 md:-right-8 z-30 bg-background/40 backdrop-blur-xl border border-white/10 p-4 rounded-sm shadow-2xl hidden sm:block"
          >
            <div className="text-accent text-2xl font-heading font-bold">25+</div>
            <div className="text-white/40 text-[9px] tracking-widest uppercase font-sans">Guidance</div>
          </motion.div>

          {/* Floating Tech Tag: 2026 Ready */}
          <motion.div
            className="absolute top-[60%] -left-12 z-30 bg-accent text-black px-3 py-1 text-[9px] font-sans font-bold tracking-tighter rounded-full hidden lg:block"
            animate={{ rotate: [-5, 5, -5] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            AI ARCHITECT 2026
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="relative z-10 w-[200px] h-[260px] sm:w-[260px] sm:h-[340px] md:w-[320px] md:h-[420px] rounded-sm overflow-hidden border border-white/10 bg-white/5"
            aria-label="Vicky Kumar Profile"
          >
            <Image
              src="/profile.jpg"
              alt="Vicky Kumar"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              priority={true}
              fill
              sizes="(max-width: 640px) 200px, (max-width: 768px) 260px, 320px"
            />
          </motion.div>
        </div>

        {/* Row 2, Col 1: Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="order-3 md:order-none md:col-start-1 md:row-start-2 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          <p className="font-sans text-sm md:text-base text-white/50 font-light leading-relaxed max-w-md mb-10">
            Vicky architectures high-performance digital systems. Bridging AI automation and conversion-focused web engines for maximum profitability.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.a
              href="/contact"
              whileHover={{ y: -3, boxShadow: "0 8px 30px rgba(207,181,59,0.2)" }}
              className="w-full sm:w-auto px-8 py-3.5 bg-accent text-black font-sans font-medium text-sm md:text-base tracking-wide hover:bg-white hover:text-black transition-all duration-300 text-center"
              aria-label="Request Consultation with Vicky, IIT Patna Developer"
            >
              Request Consultation
            </motion.a>
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ y: -3, borderColor: "rgba(207,181,59,0.6)" }}
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border border-accent text-white font-sans font-light text-sm md:text-base tracking-wide hover:bg-accent/10 transition-all duration-300 text-center"
              aria-label="Download Resume of Vicky, IIT Patna Developer"
            >
              Download Resume
            </motion.a>
          </div>

          {/* Mobile Hero Stats (Visible only on small screens) */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex sm:hidden items-center gap-6 mt-8 border-t border-white/5 pt-6 w-full justify-center"
          >
            <div className="flex flex-col text-center">
              <span className="text-accent text-xl font-heading font-bold">10+</span>
              <span className="text-white/40 text-[8px] tracking-widest uppercase">clients deal</span>
            </div>
            <div className="w-px h-6 bg-white/10" />
            <div className="flex flex-col text-center">
              <span className="text-accent text-xl font-heading font-bold">25+</span>
              <span className="text-white/40 text-[8px] tracking-widest uppercase">guidance</span>
            </div>
          </motion.div>
        </motion.div>

      </motion.section>


      {/* ═══ 4. SKILLS ORBIT ═══ */}
      <SkillsOrbit />



      {/* ═══ 6. TESTIMONIALS ═══ */}
      <Testimonials />


      {/* ═══ 7. FOUNDER NARRATIVE ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full relative overflow-hidden"
      >
        <FounderNarrative />
        <SocialBento />
      </motion.div>

      {/* ═══ 8. FAQ — DOUBT KILLER ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full relative overflow-hidden"
      >
        <FAQAccordion />
      </motion.div>



      {/* ═══ 10. SEO DATA LAYER ═══ */}
      <SEOIndex />

      {/* ═══ 11. FOOTER ═══ */}
      <Footer />
    </div>
  );
}
