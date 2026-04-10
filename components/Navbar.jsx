"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Workflow", href: "/workflow" },
    { name: "Manifesto", href: "/manifesto" },
    { name: "Stores", href: "/stores" },
    { name: "Devil Labs", href: "/devillabs" },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${
        scrolled 
          ? "bg-[#0A0A0A]/80 backdrop-blur-xl border-white/10 py-4 shadow-2xl" 
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-16">
        
        {/* Left: Branding */}
        <Link 
          href="/" 
          className="group flex flex-col"
        >
          <span className="text-base md:text-lg font-heading font-black tracking-widest uppercase text-white group-hover:text-[#CFB53B] transition-colors duration-500">
            Vicky Kumar
          </span>
          <span className="text-[9px] font-mono tracking-[0.3em] uppercase text-white/40 group-hover:text-white/80 transition-colors duration-500">
            Automation Architect
          </span>
        </Link>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 bg-white/[0.02] border border-white/5 rounded-full px-8 py-3 backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              prefetch={true}
              className="text-xs font-mono uppercase tracking-widest text-white/60 hover:text-[#CFB53B] transition-colors duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-px bg-[#CFB53B] transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
            </Link>
          ))}
        </div>

        {/* Right: WhatsApp CTA (Desktop) */}
        <div className="hidden lg:block relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-sm opacity-20 group-hover:opacity-50 blur transition duration-500"></div>
          <Link 
            href="https://wa.me/918102099678"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-6 py-3 text-xs font-mono uppercase tracking-widest border border-[#25D366]/50 bg-black text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all duration-500 rounded-sm flex items-center gap-2"
          >
            <span>WhatsApp</span>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white/80 hover:text-[#CFB53B] p-2 transition-colors relative z-[110]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#050505] z-[105] flex flex-col items-center justify-center space-y-8 px-6"
          >
            {/* Branding Mobile */}
            <div className="absolute top-6 left-6 flex flex-col">
              <span className="text-lg font-heading font-black tracking-widest uppercase text-white">Vicky Kumar</span>
            </div>

            {navLinks.map((link, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={link.name}
              >
                <Link
                  href={link.href}
                  prefetch={true}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-heading font-thin tracking-tight text-white hover:text-[#CFB53B] hover:italic transition-all duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              className="pt-8 w-full max-w-sm"
            >
              <Link 
                href="https://wa.me/918102099678"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full px-8 py-4 text-center text-sm font-mono uppercase tracking-widest border border-[#25D366] bg-[#25D366]/10 text-[#25D366] hover:bg-[#25D366] hover:text-black transition-all duration-500 rounded-sm"
              >
                WhatsApp +91 8102099678
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
