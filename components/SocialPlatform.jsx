"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const platforms = [
  {
    name: "LinkedIn",
    id: "linkedin",
    icon: <FaLinkedin className="w-8 h-8 text-[#0077b5]" />,
    role: "Professional Insights",
    link: "https://linkedin.com/in/vickyiitp",
    cta: "Read Insights",
    gradient: "from-[#0077b5]/20 to-transparent",
    border: "group-hover:border-[#0077b5]/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(0,119,181,0.3)]",
    preview: (
      <div className="flex flex-col gap-2 p-3 bg-[#0a0a0a] rounded-lg border border-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-[#0077b5]/20"></div>
          <div className="w-20 h-2 rounded bg-white/10"></div>
        </div>
        <div className="w-full h-12 rounded bg-white/5 mt-2"></div>
      </div>
    )
  },
  {
    name: "X (Twitter)",
    id: "instagram", // using instagram slot for X/Twitter stylings or general dark mode stylings
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white fill-current">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.008 4.04H5.078z" />
      </svg>
    ),
    role: "Thoughts & Systems",
    link: "https://x.com/vickyiitp",
    cta: "Follow My Journey",
    gradient: "from-white/20 to-transparent",
    border: "group-hover:border-white/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]",
    preview: (
      <div className="flex flex-col gap-2 p-3 bg-[#0a0a0a] rounded-lg border border-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-white/10"></div>
          <div className="w-16 h-2 rounded bg-white/10"></div>
        </div>
        <div className="w-full h-16 rounded bg-white/5 mt-2"></div>
      </div>
    )
  },
  {
    name: "YouTube",
    id: "youtube",
    icon: <FaYoutube className="w-8 h-8 text-[#FF0000]" />,
    role: "Video Learning & Builds",
    link: "https://youtube.com/@vickyiitp",
    cta: "Watch Builds",
    gradient: "from-[#FF0000]/20 to-transparent",
    border: "group-hover:border-[#FF0000]/50",
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,0,0,0.3)]",
    preview: (
      <div className="flex flex-col gap-2 p-3 bg-[#0a0a0a] rounded-lg border border-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="w-full h-16 rounded bg-[#FF0000]/10 flex items-center justify-center">
          <div className="w-0 h-0 border-t-4 border-t-transparent border-l-6 border-l-white/50 border-b-4 border-b-transparent ml-1"></div>
        </div>
        <div className="w-24 h-2 rounded bg-white/10 mt-1"></div>
      </div>
    )
  },
  {
    name: "GitHub",
    id: "github",
    icon: <FaGithub className="w-8 h-8 text-white" />,
    role: "Projects & Capabilities",
    link: "https://github.com/vickyiitp",
    cta: "Explore Code",
    gradient: "from-white/10 to-transparent",
    border: "group-hover:border-white/30",
    shadow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]",
    preview: (
      <div className="flex flex-col gap-2 p-3 bg-[#0a0a0a] rounded-lg border border-white/5 opacity-50 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex gap-2 mb-1">
          <div className="w-12 h-2 rounded bg-[#2ea043]/50"></div>
          <div className="w-8 h-2 rounded bg-white/10"></div>
        </div>
        <div className="w-full h-3 rounded bg-white/5"></div>
        <div className="w-3/4 h-3 rounded bg-white/5"></div>
        <div className="w-full h-3 rounded bg-white/5"></div>
      </div>
    )
  }
];

export default function SocialPlatform() {
  return (
    <section className="w-full py-32 relative bg-[#050505] overflow-hidden z-20">
      
      {/* Luxury Radial Top Gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#CFB53B]/5 blur-[120px] rounded-b-full pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 backdrop-blur-md rounded-full mb-8">
            <div className="w-2 h-2 rounded-full bg-[#CFB53B] animate-pulse"></div>
            <span className="text-[#CFB53B] font-mono text-[10px] tracking-[0.2em] uppercase">Digital Ecosystem</span>
          </div>
          
          <h2 className="font-heading text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-6">
            Beyond Code. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white to-white/40 italic">My Digital Ecosystem.</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white/50 font-light px-4">
            I build systems, but I also share what I build, how I think, and what I learn across platforms. 
            <strong className="text-white block mt-2">Don’t just view my work — experience it across platforms.</strong>
          </p>
        </motion.div>

        {/* 3D Bento Grid (Perspective Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50, rotateX: 10 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group block relative"
            >
              {/* The Card */}
              <div 
                className={`h-full w-full bg-[#0A0A0A] border border-white/5 rounded-2xl p-6 transition-all duration-500 overflow-hidden relative z-10 ${platform.border} ${platform.shadow}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Gradient Injection */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${platform.gradient} blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>

                <div className="flex flex-col h-full relative z-20">
                  {/* Header: Icon + Name */}
                  <div className="flex items-center justify-between mb-8 transform group-hover:translate-z-10 transition-transform duration-500">
                    <div className="bg-white/[0.03] p-3 rounded-xl border border-white/5">
                      {platform.icon}
                    </div>
                    <ArrowUpRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Body: Mock Preview */}
                  <div className="mb-8 transform group-hover:translate-z-20 transition-transform duration-500 will-change-transform">
                    {platform.preview}
                  </div>

                  {/* Footer: Text & CTA */}
                  <div className="mt-auto transform group-hover:translate-z-30 transition-transform duration-500">
                    <div className="font-mono text-[10px] text-white/40 tracking-widest uppercase mb-1">{platform.role}</div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-4">{platform.name}</h3>
                    
                    <div className="inline-flex items-center gap-2 text-sm font-sans tracking-wide text-white/60 group-hover:text-[#CFB53B] transition-colors">
                      {platform.cta} <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* 3D Border Glow Effect on Hover */}
                <div className="absolute inset-0 rounded-2xl border border-white opacity-0 group-hover:opacity-10 pointer-events-none transition-opacity duration-500 mix-blend-overlay"></div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}