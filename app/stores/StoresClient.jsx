"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

/* 
  Stores & Retail Page 
  Targets offline and online stores, showing why they need modern digital infrastructure, 
  Dashboards, AI, and Automation. Includes vivid Unsplash imagery.
*/

export default function StoresClient() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e0e0e0] font-sans selection:bg-accent selection:text-black overflow-x-hidden">
      
      {/* Navigation */}
      <nav className="relative z-40 w-full py-6 px-8 flex justify-between items-center border-b border-white/10">
        <Link href="/" className="font-heading text-xl font-bold tracking-tighter text-white">
          VK<span className="text-accent">.</span>
        </Link>
        <span className="text-xs tracking-[0.2em] text-accent uppercase">Retail Transformation</span>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full pt-24 pb-20 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1 border border-accent/30 bg-accent/10 text-accent text-xs font-mono tracking-widest uppercase mb-6 rounded-full">
              For Stores & Boutiques
            </div>
            <h1 className="font-heading text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6">
              Shatter Your <br /> <span className="text-accent italic">Physical Ceilings.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed mb-10 max-w-lg">
              Brick-and-mortar is limited by geography. Standard e-commerce templates are invisible in the algorithm. We architect bespoke digital storefronts, AI customer service, and full-stack inventory dashboards that scale your retail empire infinitely.
            </p>
            <div className="flex gap-4">
              <Link 
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold text-sm tracking-widest uppercase hover:bg-accent transition-colors"
              >
                Upgrade My Store
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full rounded-sm overflow-hidden border border-white/10"
          >
            {/* Unsplash image of a modern, aesthetic store */}
            <Image
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop"
              alt="Modern Retail Store"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </motion.div>
        </div>
      </section>

      {/* The Problem & Solution Grid */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">Why Your Store Needs an <span className="text-accent italic">Architect</span></h2>
            <p className="text-white/50 max-w-2xl mx-auto text-lg">
              Relying on foot traffic and manual spreadsheets is business suicide in 2026. Here is exactly where and how we intervene to automate your revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="Dashboard and Analytics"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">01. Bespoke Inventory Dashboards</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  Stop using broken Excel sheets. We build custom full-stack web panels that sync your physical stock with your online storefront. Get automated alerts when inventory drops, track best-selling SKUs, and manage staff schedules from one unified hub.
                </p>
                <div className="text-accent text-xs font-mono uppercase tracking-widest">Where: Back-Office & Operations</div>
              </div>
            </motion.div>

            {/* Service 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
                  alt="Online Shopping Experience"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">02. High-Conversion Storefronts</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  We don&apos;t use clunky drag-and-drop builders. We code lightning-fast Next.js shopping experiences optimized for mobile. Stunning UI that triggers dopamine, seamless checkout flows, and aggressive SEO architecture that puts you over competitors on Google.
                </p>
                <div className="text-accent text-xs font-mono uppercase tracking-widest">Where: Customer Facing Web</div>
              </div>
            </motion.div>

            {/* Service 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-[#050505] border border-white/10 rounded-sm overflow-hidden group"
            >
              <div className="h-48 relative overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
                  alt="AI Automation"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-bold text-white mb-3">03. AI & Omni-Channel Automation</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-4">
                  Imagine an AI concierge greeting your website visitors at 3 AM, answering product FAQs, and closing sales. Coupled with n8n automated workflows to instantly send WhatsApp abandoned cart reminders and purchase receipts without human delay.
                </p>
                <div className="text-accent text-xs font-mono uppercase tracking-widest">Where: Sales & Retention Loop</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Narrative & ROI Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-accent text-6xl font-serif leading-none">&quot;</span>
          <h2 className="text-3xl md:text-4xl font-heading font-light leading-snug text-white mb-10">
            A store is no longer just a physical location. It is a data-driven ecosystem. If your business depends on you being there to ring up a sale, you own a job, not a scalable asset.
          </h2>
          
          <div className="flex flex-col items-center gap-6 mt-12 bg-white/5 border border-white/10 p-10 rounded-sm">
            <h3 className="text-2xl font-bold text-white">The ROI of Automation</h3>
            <ul className="text-left space-y-4 text-white/70">
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Reduce manual inventory errors by 98% via custom Full-Stack Dashboards.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Recover 30% of lost sales through n8n WhatsApp / Email automated follow-ups.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Provide instant 24/7 customer support via trained LLM AI Chatbots on your site.
              </li>
              <li className="flex items-center gap-3">
                <span className="text-accent">✓</span> Dominate local and global searches with an optimized Next.js Web Presence.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Creative CTA Footer */}
      <section className="py-32 border-t border-white/10 relative text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] max-w-3xl h-[40vh] bg-accent/10 blur-[150px] pointer-events-none rounded-full"></div>
        
        <h2 className="text-5xl md:text-7xl font-heading font-black text-white relative z-10 mb-6">
          Digitize or <span className="text-accent italic text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Disappear.</span>
        </h2>
        <p className="text-lg text-white/50 mb-12 max-w-xl mx-auto relative z-10">
          The technology isn&apos;t futuristic; it&apos;s available right now. Let&apos;s wire your store to print money while you sleep.
        </p>
        <div className="relative z-10">
          <Link 
            href="/contact"
            className="inline-block px-12 py-5 bg-accent text-black font-bold tracking-widest uppercase hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(207,181,59,0.3)]"
          >
            Digitize My Store Today
          </Link>
          <div className="mt-8 text-white/30 text-xs font-mono uppercase tracking-[0.2em] flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse"></span>
            Awaiting your signal to build.
          </div>
        </div>
      </section>

    </div>
  );
}