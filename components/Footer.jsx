"use client";

import { Globe, MessageCircle, Code2, Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full relative z-20 overflow-hidden bg-[#0A0A0A] border-t border-white/10 pt-16 pb-8">
      
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#CFB53B]/5 blur-[120px] rounded-t-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-white/10 shrink-0 mb-8">
          
          {/* Left: Branding & Badge */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-heading text-2xl font-bold text-white tracking-wide mb-2">
              DEVIL <span className="text-[#CFB53B]">LABS</span>
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-[10px] font-sans tracking-widest text-white/70 uppercase">
                IIT Patna <span className="text-[#CFB53B] px-1">|</span> Class of 2027
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-sans tracking-widest uppercase border border-white/5 bg-white/[0.02] p-4 rounded-xl">
            <Link href="/" className="text-white/60 hover:text-[#CFB53B] transition-colors">Home</Link>
            <Link href="/devillabs" className="text-white/60 hover:text-[#CFB53B] transition-colors">Devil Labs</Link>
            <Link href="/services" className="text-white/60 hover:text-[#CFB53B] transition-colors">Services</Link>
            <Link href="/workflow" className="text-white/60 hover:text-[#CFB53B] transition-colors">Workflow</Link>
            <Link href="/contact" className="text-white/60 hover:text-[#CFB53B] transition-colors">Contact</Link>
          </div>

          {/* Right: Social Links */}
          <div className="flex items-center gap-6">
            <SocialLink href="https://linkedin.com/in/vickyiitp" icon={<Globe className="w-5 h-5" />} label="LinkedIn" />
            <SocialLink href="https://github.com/vickyiitp" icon={<Code2 className="w-5 h-5" />} label="GitHub" />
            <SocialLink href="https://x.com/vickyiitp" icon={<MessageCircle className="w-5 h-5" />} label="Twitter" />
            <SocialLink href="mailto:vickyykumar14@gmail.com" icon={<Mail className="w-5 h-5" />} label="Email" />
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="flex justify-center flex-col md:flex-row items-center text-center">
          <div className="font-sans text-xs tracking-widest text-white/40 uppercase">
            &copy; {currentYear} Devil Labs. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white/50 hover:text-[#CFB53B] transition-colors duration-300 transform hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}
