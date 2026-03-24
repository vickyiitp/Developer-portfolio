"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import dynamic from "next/dynamic";

/* Static imports for critical above-the-fold content */
import EfficiencyEngine from "@/components/EfficiencyEngine";
import SEOIndex from "@/components/SEOIndex";

/* Dynamic imports for below-the-fold components (Optimizes 4.5s load time to < 1s) */
const ServicesShowcase = dynamic(() => import("@/components/ServicesShowcase"), { ssr: false });
const SkillsOrbit = dynamic(() => import("@/components/SkillsOrbit"), { ssr: false });
const ProjectInventory = dynamic(() => import("@/components/ProjectInventory"), { ssr: false });
const Testimonials = dynamic(() => import("@/components/Testimonials"), { ssr: false });
const FounderNarrative = dynamic(() => import("@/components/FounderNarrative"), { ssr: false });
const SocialBento = dynamic(() => import("@/components/SocialBento"), { ssr: false });
const FAQAccordion = dynamic(() => import("@/components/FAQAccordion"), { ssr: false });
const ContactSection = dynamic(() => import("@/components/ContactSection"), { ssr: false });
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

/* ── Reusable Glow Divider ── */
function GlowDivider() {
  return (
    <div className="w-full max-w-5xl mx-auto px-6 relative" style={{ height: "1px" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, transparent, rgba(207,181,59,0.05) 20%, rgba(207,181,59,0.3) 50%, rgba(207,181,59,0.05) 80%, transparent)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-4px",
          left: 0,
          right: 0,
          height: "9px",
          background: "linear-gradient(90deg, transparent, rgba(207,181,59,0) 20%, rgba(207,181,59,0.08) 50%, rgba(207,181,59,0) 80%, transparent)",
          filter: "blur(4px)",
        }}
      />
    </div>
  );
}

/* ── 3D Candy Blobs (Pure CSS - GPU Accelerated) ── */
function CandyBlobs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Base ambient glow and grid mask for texture */}
      <div className="absolute inset-0 bg-[#0A0A0A]/60 z-10 
                      bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] 
                      bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]" 
      />
      
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

/* ── Corner Brackets (JSX-based for full cross-browser) ── */
function CornerBrackets({ children, className = "" }) {
  return (
    <div className={`relative group ${className}`}>
      {/* Top-left corner */}
      <div className="absolute -top-2 -left-2 w-5 h-5 border-t border-l border-accent/20 group-hover:w-10 group-hover:h-10 group-hover:border-accent/50 transition-all duration-500 pointer-events-none z-20" />
      {/* Top-right corner */}
      <div className="absolute -top-2 -right-2 w-5 h-5 border-t border-r border-accent/20 group-hover:w-10 group-hover:h-10 group-hover:border-accent/50 transition-all duration-500 pointer-events-none z-20" />
      {/* Bottom-left corner */}
      <div className="absolute -bottom-2 -left-2 w-5 h-5 border-b border-l border-accent/20 group-hover:w-10 group-hover:h-10 group-hover:border-accent/50 transition-all duration-500 pointer-events-none z-20" />
      {/* Bottom-right corner */}
      <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b border-r border-accent/20 group-hover:w-10 group-hover:h-10 group-hover:border-accent/50 transition-all duration-500 pointer-events-none z-20" />
      {children}
    </div>
  );
}

export default function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -60]);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[85vh] overflow-x-hidden relative">

      {/* ═══ 1. HERO SECTION ═══ */}
      <motion.section
        ref={heroRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-y-8 md:gap-x-12 lg:gap-x-20 items-center py-12 md:py-0 relative px-6 md:px-16 min-h-[85vh]"
      >
        {/* Background Effects Layer */}
        <CandyBlobs />

        {/* Row 1, Col 1: Header & Title */}
        <motion.div
          style={{ y: heroParallax }}
          className="order-1 md:order-none md:col-start-1 md:row-start-1 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-accent font-sans text-xs md:text-sm tracking-[0.3em] font-light mb-4 md:mb-6 uppercase"
          >
            Developer Profile <span className="mx-1 opacity-50">|</span> Class of 2027 <span className="mx-1 opacity-50">|</span> IIT Patna
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white tracking-tight"
            style={{
              textShadow: "0 0 20px rgba(207,181,59,0.12), 0 0 60px rgba(207,181,59,0.05), 0 4px 12px rgba(0,0,0,0.5)",
            }}
          >
            Vicky: The <br className="hidden md:block" /> Automation <br className="hidden lg:block" /> Architect <br className="hidden md:block" /> Redefining 2026.
          </motion.h1>
        </motion.div>

        {/* Row 1-2, Col 2: Profile Image */}
        <div className="order-2 md:order-none md:col-start-2 md:row-start-1 md:row-span-2 flex justify-center items-center w-full relative min-h-[350px] md:min-h-[500px]">
          {/* Background Watermark */}
          <motion.div
            animate={{ opacity: [0.02, 0.04, 0.02] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-heading font-black text-white select-none z-0 pointer-events-none"
            style={{ opacity: 0.03 }}
          >
            DL
          </motion.div>

          {/* Profile Image with Corner Brackets */}
          <CornerBrackets>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="relative z-10 w-[240px] h-[320px] sm:w-[280px] sm:h-[380px] md:w-[350px] md:h-[450px] lg:w-[400px] lg:h-[550px] rounded-sm overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center animate-subtle-float"
              aria-label="Vicky, IIT Patna Developer"
            >
              <img
                src="/profile.jpg"
                alt="Vicky Kumar - Developer and Automation Architect, IIT Patna"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
                loading="eager"
                width={400}
                height={550}
              />

              {/* Ambient glow overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay"
                style={{ background: "linear-gradient(to top right, rgba(207,181,59,0.1), transparent)" }}
              />

              {/* Scan bar effect on image */}
              <motion.div
                className="absolute left-0 w-full pointer-events-none"
                style={{
                  height: "2px",
                  background: "linear-gradient(90deg, transparent, rgba(207,181,59,0.4), transparent)",
                  boxShadow: "0 0 12px rgba(207,181,59,0.2)",
                }}
                animate={{ top: ["0%", "100%"] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />

              <div className="absolute bottom-4 right-4 text-[10px] font-sans tracking-widest text-accent/80 font-medium">SYS.VICKY.01</div>

              {/* Status indicator */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-[9px] font-mono text-white/40 tracking-wider">ONLINE</span>
              </div>
            </motion.div>
          </CornerBrackets>
        </div>

        {/* Row 2, Col 1: Bio & CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="order-3 md:order-none md:col-start-1 md:row-start-2 flex flex-col items-center md:items-start text-center md:text-left z-10"
        >
          <p className="font-sans text-base md:text-lg lg:text-xl text-white/80 font-light leading-relaxed max-w-xl md:max-w-none mb-10">
            <span className="drop-cap">V</span>
            icky is a visionary developer bridging the gap between imagination and implementation. Specializing in AI automation and high-performance websites, he engineers profitability into every line of code.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <motion.a
              href="/#contact"
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
        </motion.div>

      </motion.section>

      {/* ═══ GLOW DIVIDER ═══ */}
      <GlowDivider />

      {/* ═══ 2. EFFICIENCY ENGINE ═══ */}
      <motion.div
        id="workflow"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full relative overflow-hidden"
      >
        <EfficiencyEngine />
      </motion.div>

      <GlowDivider />

      {/* ═══ 3. SERVICES SHOWCASE ═══ */}
      <ServicesShowcase />

      {/* ═══ 4. SKILLS ORBIT ═══ */}
      <SkillsOrbit />

      <GlowDivider />

      {/* ═══ 5. PROJECT INVENTORY ═══ */}
      <motion.div
        id="projects"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full relative overflow-hidden"
      >
        <ProjectInventory />
      </motion.div>

      <GlowDivider />

      {/* ═══ 6. TESTIMONIALS ═══ */}
      <Testimonials />

      <GlowDivider />

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

      {/* ═══ 9. CONTACT — LEAD GEN ═══ */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <ContactSection />
      </motion.div>

      {/* ═══ 10. SEO DATA LAYER ═══ */}
      <SEOIndex />

      {/* ═══ BACK TO TOP ═══ */}
      <motion.button
        onClick={scrollToTop}
        initial={false}
        animate={{
          opacity: showBackToTop ? 1 : 0,
          y: showBackToTop ? 0 : 20,
          rotate: showBackToTop ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
        className={`fixed bottom-8 right-6 md:right-12 w-12 h-12 bg-background border border-accent/30 flex items-center justify-center rounded-sm text-accent hover:bg-accent hover:text-black transition-all duration-500 z-[100] ${
          !showBackToTop ? "pointer-events-none" : ""
        }`}
        aria-label="Back to Top"
      >
        ↑
      </motion.button>

      {/* ═══ 11. FOOTER ═══ */}
      <Footer />
    </div>
  );
}
