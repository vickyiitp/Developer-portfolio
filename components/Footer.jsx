"use client";

import { Globe, MessageCircle, Code2, Mail, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-20 overflow-hidden bg-[#050505] pt-32 pb-12 border-t border-white/10">
      
      {/* Luxury Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[#CFB53B]/5 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Massive Typography CTA Section */}
        <div className="flex flex-col items-center text-center mb-32 group cursor-pointer">
          <Link href="/contact" className="inline-block relative">
            <span className="font-heading text-[clamp(3rem,8vw,8rem)] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 tracking-tighter leading-none hover:text-white transition-colors duration-700">
              BUILD THE
            </span>
            <br />
            <span className="font-heading text-[clamp(3rem,8vw,8rem)] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#CFB53B] via-[#FFD700] to-[#CFB53B] tracking-tighter leading-none italic pr-4">
              FUTURE <ArrowUpRight className="inline-block w-12 h-12 md:w-24 md:h-24 text-[#CFB53B] opacity-0 group-hover:opacity-100 group-hover:translate-x-4 -group-hover:translate-y-4 transition-all duration-500" />
            </span>
          </Link>
          <p className="mt-8 text-white/50 font-mono tracking-widest uppercase text-xs md:text-sm max-w-xl">
            Stop building websites. Start building intelligent systems. Elevate your brand with high-performance architectures.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-white/10">
          
          {/* Brand & Mission (Col 1-5) */}
          <div className="lg:col-span-5 flex flex-col items-start text-left">
            <Link href="/" className="mb-6 flex flex-col">
              <span className="text-3xl font-heading font-black tracking-widest uppercase text-white">
                Vicky Kumar
              </span>
              <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-[#CFB53B] mt-1">
                Automation Architect
              </span>
            </Link>
            
            <p className="text-white/50 font-light text-sm leading-relaxed mb-8 max-w-sm">
              Designing premium digital systems, AI automation workflows, and high-conversion web architectures for top-tier brands and agencies.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-md">
              <div className="relative flex items-center justify-center w-3 h-3">
                <div className="absolute w-full h-full rounded-full bg-green-500 opacity-20 animate-ping"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
              </div>
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase">
                IIT Patna <span className="text-[#CFB53B] px-2">|</span> Availability: 6 AM - 11 PM (IST)
              </span>
            </div>
          </div>

          {/* Navigation Links (Col 6-9) */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <h4 className="text-white font-mono text-[10px] tracking-[0.2em] uppercase mb-4 opacity-50">Sitemap</h4>
              {['Home', 'Services', 'Workflow', 'Devil Labs'].map((item) => (
                <Link key={item} href={`/${item === 'Home' ? '' : item.toLowerCase().replace(' ', '')}`} prefetch={true} className="text-white/70 hover:text-[#CFB53B] text-sm font-light transition-colors w-fit">
                  {item}
                </Link>
              ))}
            </div>
            <div className="flex flex-col space-y-4">
              <h4 className="text-white font-mono text-[10px] tracking-[0.2em] uppercase mb-4 opacity-50">Network</h4>
              {['Manifesto', 'Stores', 'Contact'].map((item) => (
                <Link key={item} href={`/${item.toLowerCase()}`} prefetch={true} className="text-white/70 hover:text-[#CFB53B] text-sm font-light transition-colors w-fit">
                  {item}
                </Link>
              ))}
              <Link href="/privacy" prefetch={true} className="text-white/70 hover:text-[#CFB53B] text-sm font-light transition-colors w-fit mt-2">
                Privacy Policy
              </Link>
              <Link href="/terms" prefetch={true} className="text-white/70 hover:text-[#CFB53B] text-sm font-light transition-colors w-fit">
                Terms &amp; Conditions
              </Link>
            </div>
          </div>

          {/* Socials & Connect (Col 10-12) */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-white font-mono text-[10px] tracking-[0.2em] uppercase mb-8 opacity-50">Connect</h4>
            <div className="flex flex-col gap-4">
              <SocialLink href="https://wa.me/918102099678" label="WhatsApp: +91 8102099678" highlight />
              <SocialLink href="https://linkedin.com/in/vickyiitp" label="LinkedIn" />
              <SocialLink href="https://github.com/vickyiitp" label="GitHub" />
              <SocialLink href="mailto:themvaplatform@gmail.com" label="Email: themvaplatform@gmail.com" />
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] tracking-widest text-white/40 uppercase">
            &copy; {currentYear} VICKY KUMAR. ALL RIGHTS RESERVED.
          </div>
          <div className="font-mono text-[10px] tracking-widest text-[#CFB53B] uppercase">
            SYSTEMS BUILT TO SCALE.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, label, highlight }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group flex items-center justify-between py-2 border-b border-white/5 hover:border-[#CFB53B]/50 transition-colors duration-300 ${highlight ? 'text-[#CFB53B]' : 'text-white/60'}`}
    >
      <span className="text-sm font-light group-hover:text-white transition-colors">{label}</span>
      <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300 text-[#CFB53B]" />
    </a>
  );
}
