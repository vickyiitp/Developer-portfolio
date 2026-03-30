"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Workflow", href: "/workflow" },
    { name: "Devil Labs", href: "/devillabs" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full py-6 flex items-center justify-between border-b border-white/5 relative z-50 px-6 md:px-16">
      {/* Left: Branding */}
      <Link 
        href="/" 
        className="text-sm md:text-base font-sans tracking-[0.2em] font-light uppercase text-white hover:text-accent transition-colors duration-300"
      >
        Vicky | IIT Patna
      </Link>

      {/* Center: Desktop Links */}
      <div className="hidden md:flex items-center space-x-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            prefetch={true}
            className="text-sm font-sans font-light text-white/70 hover:text-accent transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>

      {/* Right: CTA Button (Desktop) */}
      <div className="hidden md:block">
        <Link 
          href="/contact"
          prefetch={true}
          className="px-6 py-2.5 text-sm font-sans font-light border border-accent/50 text-accent hover:bg-accent/10 transition-all duration-300 rounded-sm"
        >
          Request Consultation
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden text-white/80 hover:text-accent p-2"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 md:hidden flex flex-col items-center py-8 space-y-6 shadow-2xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-sans font-light text-white/80 hover:text-accent transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 px-8 py-3 w-full max-w-[200px] text-center text-sm font-sans font-light border border-[#CFB53B] text-[#CFB53B] hover:bg-[#CFB53B]/10 transition-all duration-300 rounded-sm"
          >
            Request Consultation
          </Link>
        </div>
      )}
    </nav>
  );
}
