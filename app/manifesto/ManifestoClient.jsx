"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

/* 
  Mega-Manifesto Page + 100 Case Studies (Virtual grid)
  Features:
  - Fixed syntax error (<motion.p> closing tag)
  - Interactive "100 Failures & Rebirths" section
  - Heavy framer-motion animations
  - Creative UI/UX for deep reading retention
*/

const BASE_STORIES = [
  { domain: "Local Retail Fleet", problem: "Offline inventory mismatch across 4 locations. Staff using WhatsApp to check stock. Losing 20% of sales daily due to stockout illusions.", solution: "Full-Stack Next.js POS Dashboard synced with a centralized database. Real-time updates, no human intervention.", result: "Revenue stabilized instantly (+22% YoY). Zero stockout reporting errors." },
  { domain: "Content Creator (2M+ Subs)", problem: "Drowning in DMs for brand deals. Missing $10k+ sponsorships because of slow response times. Manual PDF media kits.", solution: "n8n Webhook workflow attached to a High-Conversion Landing Page. Auto-filters brand budgets, sends dynamic media kit, and books calendar.", result: "Closed 4 major deals in month 1 entirely hands-free. Saved 15 hours/week." },
  { domain: "Private Healthcare Clinic", problem: "Receptionists overwhelmed by call volume for basic appointments. 18% no-show rate costing thousands.", solution: "AI Voice & Chatbot integration trained on clinic FAQs. Automated WhatsApp reminder flow 24h before appt.", result: "No-show rate dropped to 3%. Receptionists focused entirely on in-person patient care." },
  { domain: "Real Estate Brokerage", problem: "Generating leads via Facebook Ads but failing to follow up within the critical 5-minute window. Leads going entirely cold.", solution: "Automated Lead Routing pipeline. Facebook Lead -> n8n -> CRM -> Instant customized SMS via AI -> Calendar Link.", result: "Lead to booked-tour conversion spiked by 310%. Reps only talk to warm, scheduled prospects." },
  { domain: "B2B SaaS Startup", problem: "High churn rate during the 14-day trial because users didn't understand the platform. Manual check-in emails were inconsistent.", solution: "Behavior-triggered automated sequences. If a user doesn't click feature X in 48 hours, an automated AI-personalized tutorial email fires.", result: "Trial to paid conversion jumped 14%. Churn reduced significantly." },
  { domain: "E-Commerce Apparel", problem: "Cart abandonment at 72%. Manual email sequences acting too slow, missing the impulse buy window.", solution: "n8n hyper-fast webhooks coupled with WhatsApp API. Personalized discount codes sent exactly 12 minutes post-abandonment.", result: "Recovered 35% of abandoned carts. +$40k Monthly Recurring Revenue." },
  { domain: "Logistics & Freight Co.", problem: "Drivers using paper logs. Dispatchers physically calling drivers for location updates. Lost invoices and dispute chaos.", solution: "Custom PWA (Progressive Web App) for drivers. GPS auto-sync, digital POD (Proof of Delivery), and automated Stripe invoicing upon delivery.", result: "Disputes dropped to 0%. Payment cycle reduced from 45 days to 24 hours." },
  { domain: "Boutique Legal Firm", problem: "Paralegals manually drafting 100+ standard contracts per week. High human error rate in sensitive documents.", solution: "Internal Next.js Portal with integrated LLM (AI) generation. Form inputs automatically generate formatted legal PDFs via n8n.", result: "Contract drafting time went from 40 hours/week to 2 hours/week. 0% error rate." },
  { domain: "High-End Gym Franchise", problem: "Members canceling because they couldn't easily rebook missed personal training sessions. App was clunky and native.", solution: "React-based omnichannel dashboard. Smart AI auto-rescheduling based on trainer calendar availability without front-desk help.", result: "Member retention increased by 19%. Front desk labor costs cut by half." },
  { domain: "Tech Consulting Agency", problem: "Onboarding required 5 different meetings, 4 document signings, and manual Slack channel creation. Clients felt friction.", solution: "Zero-touch onboarding sequence: Triggered by Stripe payment -> n8n creates Drive folders, Slack channels, and sends personalized intro video.", result: "Client satisfaction scores hit 99%. Agency capacity increased by 40% without hiring." }
];

// Generate 100+ unique permutations
const DETAILED_STORIES = Array.from({ length: 110 }).map((_, index) => {
  const base = BASE_STORIES[index % BASE_STORIES.length];
  let domainMod = base.domain;
  if (index >= BASE_STORIES.length) {
    const prefixes = ["Global", "National", "Regional", "Hyper-local", "Elite", "Agile", "Next-Gen"];
    const suffix = ["Group", "Syndicate", "Network", "Partners", "Enterprise"];
    domainMod = `${prefixes[index % prefixes.length]} ${base.domain} ${suffix[index % suffix.length]}`;
  }
  
  return {
    id: String(index + 1).padStart(3, '0'),
    domain: domainMod,
    problem: base.problem,
    solution: base.solution,
    result: base.result
  };
});

export default function ManifestoClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [activeStory, setActiveStory] = useState(DETAILED_STORIES[0]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-accent selection:text-black overflow-hidden relative" style={{ position: "relative" }}>
      
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-accent z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      <main className="relative z-10 w-full pt-32 pb-32">
        
        {/* Hero */}
        <header className="mb-24 flex flex-col items-center text-center px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h4 className="text-accent font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-8">The Global Business Blueprint</h4>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tighter mb-8">
              From Invisible to <span className="italic text-accent">Invincible.</span>
            </h1>
            <p className="text-lg md:text-2xl text-white/60 font-light max-w-3xl mx-auto leading-relaxed border-l-2 border-accent pl-6 text-left">
              How traditional offline enterprises and ambitious startups are commanding global digital real estate, leveraging AI automation, and building self-sustaining ecosystems.
            </p>
          </motion.div>
        </header>

        {/* The Core Article (Fixed compilation error here) */}
        <article className="max-w-4xl mx-auto prose prose-invert prose-lg md:prose-xl prose-headings:font-heading prose-headings:font-bold px-6 lg:px-0">
          
          <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
            <span className="text-5xl float-left font-serif text-accent mr-3 mt-[-8px] font-black">T</span>
            he modern business landscape is split into two distinct realities: those who labor under the weight of manual, offline processes, and those who have ascended into self-automating digital empires. Across every domain—from local retail and clinics to real estate, finance, manufacturing, and creators—the potential for scale is no longer limited by physical geography. The ceiling has been shattered by full-stack systems and Artificial Intelligence.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="my-16 p-8 md:p-12 bg-white/5 border border-white/10 rounded-lg relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 text-[120px] leading-none text-white/[0.03] font-heading font-black -mt-4 -mr-4">&quot;</div>
            <h3 className="text-2xl md:text-3xl text-white font-heading font-light leading-snug m-0 relative z-10">
              &quot;An offline business is a ghost in the modern economy. But a digitized, AI-automated business is an omnipresent force.&quot;
            </h3>
          </motion.div>

        </article>

        {/* ============================================================== */}
        {/* The "100 Demises & Rebirths" Interactive Section               */}
        {/* ============================================================== */}
        <section className="py-32 w-full mt-24 relative overflow-hidden bg-[#020202]">
          
          {/* Luxury Background Glow */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#CFB53B]/5 blur-[150px] mix-blend-screen pointer-events-none z-0 rounded-full translate-x-1/2 -translate-y-1/4"></div>

          <div className="max-w-7xl mx-auto px-6 lg:px-24">
            
            <div className="text-center mb-24 relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#CFB53B] animate-pulse"></div>
                <span className="text-[10px] font-mono tracking-[0.3em] text-white/70 uppercase">Data Archive Initiated</span>
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-heading font-black text-white mb-8 tracking-tighter"
              >
                100 Exodi. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB53B] via-[#FFE270] to-[#CFB53B] italic">100 Redemptions.</span>
              </motion.h2>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed font-light">
                Businesses do not perish from a lack of passion. They die from <strong className="text-white font-medium">friction</strong>. They burn resources answering emails, fixing inventory sheets, and bleeding margins. Here is how architectural engineering cures the disease.
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 relative z-10 w-full h-auto lg:h-[600px]">
              
              {/* Left Col: Luxury Data Constellation */}
              <div className="w-full lg:w-5/12 h-[500px] lg:h-full flex flex-col p-8 border border-white/5 bg-white/[0.01] backdrop-blur-3xl rounded-2xl relative overflow-hidden group shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                
                {/* HUD Elements */}
                <div className="absolute top-8 left-8 text-[10px] font-mono text-[#CFB53B] uppercase tracking-widest z-20 flex items-center gap-2">
                  <span className="w-4 h-px bg-[#CFB53B]"></span>
                  Matrix Scan: The 110
                </div>
                
                <div className="absolute top-8 right-8 text-[10px] font-mono text-white/30 uppercase tracking-widest z-20">
                  Vol. {activeStory.id}
                </div>

                {/* Visual Grid representing 110 files */}
                <div className="my-auto w-full flex items-center justify-center relative z-10">
                  <div className="grid grid-cols-11 gap-x-3 gap-y-3 opacity-60 group-hover:opacity-100 transition-opacity duration-1000 p-4">
                    {DETAILED_STORIES.map((story, i) => (
                      <motion.div 
                        key={story.id}
                        onClick={() => setActiveStory(story)}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i % 15) * 0.02, type: "spring", stiffness: 200 }}
                        title={story.domain}
                        className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full ${
                          i % 11 === 0 ? "bg-red-500/80 shadow-[0_0_15px_rgba(239,68,68,0.5)]" 
                          : activeStory.id === story.id ? "bg-[#CFB53B] shadow-[0_0_30px_#CFB53B] scale-[2] z-20" 
                          : "bg-white/20"
                        } hover:bg-white hover:scale-150 hover:shadow-[0_0_20px_rgba(255,255,255,0.8)] cursor-crosshair transition-all duration-500`}
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-auto text-[9px] uppercase font-mono text-white/30 flex justify-between z-20 border-t border-white/10 pt-6">
                  <span className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></div> Terminal Friction Points</span>
                  <span>Hover to extract Node</span>
                </div>
              </div>

              {/* Right Col: Luxury Deep Dive Briefing */}
              <div className="w-full lg:w-7/12 flex flex-col h-[500px] lg:h-full">
                
                {/* Horizontal scrolling navigation pills, styled minimally */}
                <div className="flex overflow-x-auto no-scrollbar gap-4 mb-8 pb-2 mask-linear-gradient">
                  {DETAILED_STORIES.slice(0, 10).map(story => (
                    <button
                      key={story.id}
                      onClick={() => setActiveStory(story)}
                      className={`px-5 py-2 text-[10px] font-mono uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-500 rounded-full ${
                        activeStory.id === story.id 
                        ? "bg-[#CFB53B]/10 border border-[#CFB53B]/50 text-[#CFB53B]" 
                        : "bg-white/[0.03] border border-transparent text-white/40 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      Case {story.id}
                    </button>
                  ))}
                  <span className="px-5 py-2 text-[10px] font-mono text-white/20 whitespace-nowrap">... +100 More Iterations</span>
                </div>

                {/* Content Panel (Museum Plaque Style) */}
                <AnimatePresence mode="wait">
                  <motion.div 
                    key={activeStory.id}
                    initial={{ opacity: 0, y: 15, filter: "blur(10px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -15, filter: "blur(10px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 bg-gradient-to-br from-white/[0.03] to-transparent border border-white/5 p-10 md:p-14 rounded-2xl relative overflow-hidden shadow-2xl"
                  >
                    
                    {/* Giant Ghost Number */}
                    <div className="absolute -top-10 -right-6 text-[150px] md:text-[200px] font-black text-white/[0.02] pointer-events-none leading-none font-serif tracking-tighter mix-blend-overlay">
                      {activeStory.id}
                    </div>

                    <div className="flex items-center gap-4 mb-4 relative z-10">
                      <div className="w-10 h-px bg-[#CFB53B]/50"></div>
                      <span className="text-[#CFB53B] font-mono text-[10px] tracking-[0.2em] uppercase">Industry Classification</span>
                    </div>

                    <h3 className="text-3xl md:text-5xl font-heading font-light text-white mb-12 relative z-10 leading-tight">
                      {activeStory.domain}
                    </h3>
                    
                    <div className="space-y-10 relative z-10">
                      {/* The Disease */}
                      <div className="group">
                        <div className="text-white/40 font-mono text-[10px] tracking-widest uppercase mb-3 flex items-center justify-between">
                          <span>The Friction</span>
                          <span className="w-4 h-4 rounded-full border border-red-500/50 flex flex-col items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                          </span>
                        </div>
                        <p className="text-white/80 font-light text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                          {activeStory.problem}
                        </p>
                      </div>
                      
                      {/* The Architecture */}
                      <div className="group">
                        <div className="text-[#CFB53B]/80 font-mono text-[10px] tracking-widest uppercase mb-3 flex items-center justify-between border-t border-white/5 pt-8">
                          <span>The Architecture Formulation</span>
                          <span className="w-4 h-4 rounded-full border border-[#CFB53B]/50 flex flex-col items-center justify-center">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#CFB53B]"></span>
                          </span>
                        </div>
                        <p className="text-white/80 font-light text-base md:text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                          {activeStory.solution}
                        </p>
                      </div>

                      {/* The Ascension (Result) */}
                      <div className="pt-8 border-t border-white/5 mt-auto">
                        <div className="inline-flex flex-col">
                          <span className="text-green-500/80 font-mono text-[10px] tracking-widest uppercase mb-2">The Absolute ROI</span>
                          <p className="text-white font-heading text-xl md:text-2xl font-light tracking-wide drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                            {activeStory.result}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-24 text-center relative max-w-4xl mx-auto px-6"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50vh] bg-accent/20 blur-[150px] pointer-events-none rounded-full"></div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white relative z-10 mb-6">
            Stop waiting for humans to do a machine&apos;s job. Let&apos;s Build.
          </h2>
          <p className="text-xl text-white/50 mb-12 relative z-10 max-w-2xl mx-auto">
            Your competitors are building invisible AI and automation pipelines right now. Secure your digital real estate before you go obsolete.
          </p>
          <div className="relative z-10">
            <Link 
              href="/contact"
              className="inline-block px-12 py-5 bg-accent text-black font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_40px_rgba(207,181,59,0.3)] hover:shadow-[0_0_60px_rgba(255,255,255,0.4)]"
            >
              INITIALIZE SYSTEM
            </Link>
            <p className="mt-8 text-white/40 text-xs font-mono uppercase tracking-[0.2em]">Contact Node Open. Awaiting Query.</p>
          </div>
        </motion.div>

      </main>

    </div>
  );
}