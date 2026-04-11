
"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { FiGithub, FiExternalLink, FiCode, FiLinkedin, FiInstagram } from "react-icons/fi";

const projects = [
  // --- Landing Pages ---
  { id: "Developer-portfolio", title: "Developer Portfolio - Devil Labs", description: "A premium, interactive portfolio website featuring 3D creative motion design, floating particles, and an integrated AI Chatbot for lead generation.", category: "Landing Pages", tags: ["Next.js 16", "3D UI", "Portfolio"], github_url: "https://github.com/vickyiitp/Developer-portfolio", live_demo: "https://developer-portfolio-bpgc.vercel.app", size: "large" },
  { id: "Prop--View--Demo", title: "Prop View Demo", description: "A high-end real estate property viewing application offering a premium, interactive showcase experience with dynamic metadata and fluid animations.", category: "Landing Pages", tags: ["Real Estate", "Showcase"], github_url: "https://github.com/vickyiitp/Prop--View--Demo", live_demo: "https://prop-view-demo.vercel.app", size: "normal" },
  { id: "Menu-Craft-demo", title: "MenuCraft", description: "A modern, high-performance landing page representing a premier digital menu solution tailored for modern restaurants, cafes, and hotels.", category: "Landing Pages", tags: ["Restaurant SaaS", "Landing Page"], github_url: "https://github.com/vickyiitp/Menu-Craft-demo", live_demo: "https://menu-craft-demo.vercel.app", size: "normal" },
  { id: "Fit-launch-demo", title: "Fit-Launch", description: "A state-of-the-art landing page for fitness brands demonstrating modern design aesthetics, responsive layouts, and smooth transition effects.", category: "Landing Pages", tags: ["Fitness", "Landing Page"], github_url: "https://github.com/vickyiitp/Fit-launch-demo", live_demo: "https://fit-launch-demo.vercel.app", size: "normal" },
  { id: "Cosmic-Genesis", title: "Cosmic Genesis", description: "An interactive, visually stunning scroll-driven web application narrating the beautiful evolution of our universe with deep React and TS implementations.", category: "Landing Pages", tags: ["Interactive Web", "Space Explorer"], github_url: "https://github.com/vickyiitp/Cosmic-Genesis", live_demo: "https://cosmic-genesis.vercel.app", size: "normal" },
  { id: "indigo-lens-demo", title: "Indigo Lens Services", description: "A specialized agency showcase demonstrating cutting-edge 3D environmental mapping techniques and engaging interactions backed by a localized AI Chatbot.", category: "Landing Pages", tags: ["3D Effects", "UI Agency"], github_url: "https://github.com/vickyiitp/indigo-lens-demo", live_demo: "https://indigolens-demo.netlify.app/", size: "normal" },

  // --- Full Stack Websites ---
  { id: "Spilt-Pro-demo", title: "SplitMate", description: "A premium, high-performance web utility designed for effortlessly managing and splitting roommate expenses with integrated UPI support.", category: "Full Stack Websites", tags: ["Next.js", "Finance", "UPI"], github_url: "https://github.com/vickyiitp/Spilt-Pro-demo", live_demo: "https://prop-view-demo-lf2e.vercel.app", size: "large" },
  { id: "hisaab", title: "Hisaab", description: "A lightweight financial tracking app specifically tailored for small merchants to manage dues, log payments, and send direct WhatsApp reminders.", category: "Full Stack Websites", tags: ["Next.js", "DB Storage"], github_url: "https://github.com/vickyiitp/hisaab", live_demo: "https://hisaab-lac.vercel.app", size: "normal" },
  { id: "-EduStream-Classes-app-for-cochin", title: "EduStream App", description: "A highly capable online e-learning interface aimed at institutes looking for an interactive, structured platform reminiscent of massive EdTech leaders.", category: "Full Stack Websites", tags: ["EdTech", "Streaming"], github_url: "https://github.com/vickyiitp/-EduStream-Classes-app-for-cochin", live_demo: "https://edu-stream-classes-app-for-cochin.vercel.app", size: "normal" },

  // --- Automation Tools ---
  { id: "Invoice-Flow-Automation-tool", title: "Invoice Flow", description: "A streamlined invoicing utility crafted for modern freelancers and creative studios, automating the tedious aspects of financial tracking and billing.", category: "Automation Tools", tags: ["Automation", "Invoicing"], github_url: "https://github.com/vickyiitp/Invoice-Flow-Automation-tool", live_demo: "https://invoice-flow-automation-tool.vercel.app", size: "large" },
  { id: "Soical-Queue-Automation-Tool", title: "SocialQueue", description: "An elite automation tool built for content strategists to simplify multi-platform post-scheduling using a stunning, intuitive interface.", category: "Automation Tools", tags: ["Social Media", "Automation"], github_url: "https://github.com/vickyiitp/Soical-Queue-Automation-Tool", live_demo: null, size: "normal" },
  { id: "WhatsappBulk-automation-tools", title: "WhatsApp Bulk Messenger", description: "A secure and efficient tool bridging Excel/CSV data to automate personalized bulk messaging on WhatsApp, offering real-time progress tracking.", category: "Automation Tools", tags: ["WhatsApp API", "Bulk Messaging"], github_url: "https://github.com/vickyiitp/WhatsappBulk-automation-tools", live_demo: null, size: "normal" },

  // --- AI Tools ---
  { id: "resume-ai", title: "Resume Architect AI", description: "An intuitive AI-powered resume builder bridging professional templates and domain-specific structuring to help users land their dream opportunities.", category: "AI Tools", tags: ["AI Service", "Resume Builder"], github_url: "https://github.com/vickyiitp/resume-ai", live_demo: "https://resume-vickyiitp.vercel.app", size: "large" },
  { id: "ShivaTri", title: "ShivaTri Venture OS", description: "An advanced, AI-driven startup ecosystem providing legal foresight, market gap validation, and structural guidance wrapped in an elite 3D interface.", category: "AI Tools", tags: ["Gemini AI", "Startup Engine"], github_url: "https://github.com/vickyiitp/ShivaTri", live_demo: "https://shiva-tri.vercel.app", size: "normal" },
  { id: "Valentine-Day-Gift", title: "Cupid's Whisper AI", description: "An enchanting, AI-powered digital gift generator allowing users to send charming, dynamic web-based declarations to their partners.", category: "AI Tools", tags: ["Generative AI", "Web Gift"], github_url: "https://github.com/vickyiitp/Valentine-Day-Gift", live_demo: "https://valentine-day-gift-inky.vercel.app", size: "normal" },
  { id: "Sovereign-AI-Green-Tracker", title: "Green Tracker", description: "A next-generation sustainability mandate auditor employing real-time AI to track carbon emissions and water usage with an anti-gravity GUI design.", category: "AI Tools", tags: ["AI Auditor", "Sustainability"], github_url: "https://github.com/vickyiitp/Sovereign-AI-Green-Tracker", live_demo: null, size: "normal" },
  { id: "vicky-ghost-agent", title: "Ghost-Agent Intelligence", description: "An undetectable local-first digital intelligence unit powered by Gemini 2.5 Vision, designed for silent lead generation through multi-layer behavior simulation.", category: "AI Tools", tags: ["Gemini 2.5", "Stealth Agent"], github_url: "https://github.com/vickyiitp/vicky-ghost-agent", live_demo: null, size: "normal" },
  { id: "CyberAI-Inspector-", title: "CyberAI Inspector", description: "A robust AI-powered security analysis suite ensuring the authenticity of digital content. Examines URLs, deepfakes, text manipulation, and metadata footprints.", category: "AI Tools", tags: ["Cybersecurity", "AI Tooling"], github_url: "https://github.com/vickyiitp/CyberAI-Inspector-", live_demo: null, size: "normal" },
  { id: "NoDepression-AI", title: "NoDepression AI", description: "An empathetic generative AI platform designed specifically to guide and console students managing academic stress and emotional unwellness.", category: "AI Tools", tags: ["AI Chatbot", "Mental Health"], github_url: "https://github.com/vickyiitp/NoDepression-AI", live_demo: "https://no-depression-ai.vercel.app", size: "normal" },
  { id: "devilfintech-ai", title: "DevilFintech AI Evaluator", description: "A conversational, data-driven Indian financial analyst AI built to strategize tax planning, asset management, and risk-tolerance advice specifically for regional markets.", category: "AI Tools", tags: ["FinServ", "Gemini AI"], github_url: "https://github.com/vickyiitp/devilfintech-ai", live_demo: "https://devilfintech-ai.vercel.app", size: "normal" },

  // --- Utilities Tools ---
  { id: "Bio-Hub-Demo", title: "Bio-Hub", description: "The ultimate link management tool for digital creators. A premium, open-source alternative to Linktree focused on customizable aesthetics and performance.", category: "Utilities Tools", tags: ["Link Management", "Creator Tools"], github_url: "https://github.com/vickyiitp/Bio-Hub-Demo", live_demo: "https://bio-hub-demo.vercel.app", size: "large" },
  { id: "DevScript", title: "DevScript Hub", description: "A zero-bloat PWA presenting over 100 client-side tools for developers and everyday users, emphasizing fast load times and a premium dark-mode aesthetic.", category: "Utilities Tools", tags: ["PWA", "Utility Hub"], github_url: "https://github.com/vickyiitp/DevScript", live_demo: "https://dev-script-two.vercel.app", size: "normal" },
  { id: "QR-Menu-Generator-Demo", title: "QR Menu Gen", description: "A premium Micro-SaaS solution allowing restaurant owners to instantly generate hosted digital menus and QR codes directly from uploaded PDF files.", category: "Utilities Tools", tags: ["PDF Processing", "QR Code"], github_url: "https://github.com/vickyiitp/QR-Menu-Generator-Demo", live_demo: "https://qr-menu-generator-demo.vercel.app", size: "normal" },
  { id: "video_downloader_app", title: "Video Downloader", description: "A utility Python web application built for swiftly downloading media content from private and public remote sources seamlessly.", category: "Utilities Tools", tags: ["Python", "Utility"], github_url: "https://github.com/vickyiitp/video_downloader_app", live_demo: "https://rapidgrab.onrender.com/", size: "normal" },
  { id: "100Games", title: "MindSpark Hub 100", description: "A curated client-side repository of over 100 mind-boosting, free-time puzzle scenarios aimed at cognitive improvement and light entertainment.", category: "Utilities Tools", tags: ["Gaming Hub", "Puzzles"], github_url: "https://github.com/vickyiitp/100Games", live_demo: "https://mindsparkhub-vickyiitp.netlify.app/", size: "normal" },
  { id: "timer-stopwatch-app", title: "Precision Timer App", description: "A reliable and crisp web-based utility for dedicated stopwatch pacing, ensuring precision timing without extraneous processing bloat.", category: "Utilities Tools", tags: ["Utility", "Timer"], github_url: "https://github.com/vickyiitp/timer-stopwatch-app", live_demo: "https://timer-stopwatch-vickyiitp.netlify.app/", size: "normal" },
  { id: "typeX-vickyiitp", title: "TypeX 2025", description: "A futuristic AI-augmented typing challenge platform offering immediate analytical feedback, robust gamification, and intelligent skill progression.", category: "Utilities Tools", tags: ["Education", "Typing"], github_url: "https://github.com/vickyiitp/typeX-vickyiitp", live_demo: "https://typexvickyiitp.netlify.app/", size: "normal" },

  // --- Others ---
  { id: "os-building", title: "OS Building", description: "Explorations into operating system architectural building blocks, diving into the core C++ fundamentals of threading and memory handling.", category: "Others", tags: ["C++", "Architecture"], github_url: "https://github.com/vickyiitp/os-building", live_demo: null, size: "large" },
  { id: "Capstone", title: "Capstone Projects", description: "A compilation repository serving as the focal point for IIT PATNA academic team milestones and pure HTML front-end demonstrations.", category: "Others", tags: ["HTML", "College Project"], github_url: "https://github.com/vickyiitp/Capstone", live_demo: null, size: "normal" },
  { id: "vickyiitp", title: "GitHub Profile Config", description: "The special repository designed solely to structure the aesthetic markdown and configuration settings of the developer's primary GitHub profile.", category: "Others", tags: ["Markdown", "Config"], github_url: "https://github.com/vickyiitp/vickyiitp", live_demo: null, size: "normal" }
];

const categories = [
  "Landing Pages",
  "Full Stack Websites",
  "Automation Tools",
  "AI Tools",
  "Utilities Tools",
  "Others"
];

function TiltCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), springConfig);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    // For Tilt
    if (window.innerWidth >= 768) {
      const xPct = (e.clientX - rect.left) / rect.width - 0.5;
      const yPct = (e.clientY - rect.top) / rect.height - 0.5;
      x.set(xPct);
      y.set(yPct);
    }
    // For Hover Glow (always works)
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const launchedUrl = project.live_demo || "https://vickyiitp.tech";

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] md:h-[380px] bg-[#0c0c0c]/80 backdrop-blur-2xl border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between overflow-hidden group hover:border-accent/40 transition-all duration-500 shadow-[0_0_0_0_rgba(var(--accent-color-rgb),0)] hover:shadow-[0_0_60px_-15px_rgba(var(--accent-color-rgb),0.3)]"
    >
      {/* Background Graphic Flare (Follows Mouse) */}
      <motion.div 
        className="absolute w-[250px] h-[250px] bg-accent/20 blur-[80px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Animated Top Border Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 pointer-events-none origin-left" />

      {/* Top Details */}
      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}> 
        <div className="flex justify-between items-start mb-4">
          <span className="font-sans text-[10px] md:text-[11px] tracking-widest text-accent flex items-center gap-2 uppercase font-bold drop-shadow-md">
            <FiCode className="text-accent text-sm animate-pulse" style={{ animationDuration: "3s" }} />
            {project.category}
          </span>
          {/* Tags */}
          <div className="flex gap-2 flex-wrap justify-end max-w-[60%]">
            {project.tags.map((tag, i) => (
              <span key={i} className="text-[9px] text-white/70 bg-white/5 px-2.5 py-1 rounded-md border border-white/10 tracking-[0.1em] uppercase whitespace-nowrap backdrop-blur-md group-hover:border-accent/30 group-hover:text-white transition-colors duration-300">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white leading-tight mb-3 tracking-wide group-hover:bg-gradient-to-br group-hover:from-white group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
          {project.title}
        </h3>
        <p className="font-sans font-light text-white/50 text-sm md:text-[15px] leading-relaxed line-clamp-3 group-hover:text-white/80 transition-colors duration-300">
          {project.description}
        </p>
      </div>

      {/* Bottom Buttons */}
      <div className="relative z-10 flex gap-4 mt-6" style={{ transform: "translateZ(40px)" }}>
        <a
          href={launchedUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 py-3 group/launch overflow-hidden rounded-lg bg-accent/10 border border-accent/20 hover:border-accent/80 transition-all duration-300 flex justify-center items-center gap-2"   
        >
          <div className="absolute inset-0 bg-accent translate-y-full group-hover/launch:translate-y-0 transition-transform duration-300 ease-in-out" />
          <span className="relative z-10 text-accent font-sans font-bold text-[11px] tracking-widest group-hover/launch:text-black transition-colors duration-300 flex items-center gap-2">
            LAUNCH
            <FiExternalLink className="group-hover/launch:-translate-y-[2px] group-hover/launch:translate-x-[2px] transition-transform text-sm" />
          </span>
        </a>
        <a 
          href={project.github_url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative flex-1 py-3 group/source overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/40 transition-all duration-300 flex justify-center items-center gap-2"
        >
          <div className="absolute inset-0 bg-white/10 translate-y-full group-hover/source:translate-y-0 transition-transform duration-300 ease-in-out" />
          <span className="relative z-10 text-white/70 group-hover/source:text-white font-sans font-bold text-[11px] tracking-widest transition-colors duration-300 flex items-center gap-2">
            SOURCE
            <FiGithub className="group-hover/source:scale-110 group-hover/source:rotate-6 transition-transform text-sm" />
          </span>
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectInventory() {
  const [activeFilter, setActiveFilter] = useState(categories[0]);

  const filteredProjects = projects.filter((p) => p.category === activeFilter);

  return (
    <section className="w-full py-20 border-t border-white/5 bg-[#050505] relative z-20 overflow-hidden min-h-screen">
      
      {/* Absolute Ambient Background Lights */}
      <div className="absolute top-[10%] left-[-20%] w-[50%] h-[50%] bg-accent/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[40%] h-[40%] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />
      {/* Tiny stars/particles grid background simulation */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] pointer-events-none" />

      <div className="max-w-[85rem] mx-auto px-6 md:px-12 xl:px-16 relative z-10">
        
        {/* Header and Filter Buttons */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-10">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-extrabold text-white tracking-tighter mb-4 leading-none"
            >
              Devil<span className="text-accent italic">Labs</span>.    
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="font-sans text-white/50 text-base max-w-md leading-relaxed mb-6"
            > 
              An archive of proprietary architectures, elite automation pipelines, and high-performance React integrations.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex items-center gap-4"
            >
              <a 
                href="https://www.linkedin.com/company/devillabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase border border-white/10 px-4 py-2 rounded-full hover:border-accent hover:bg-accent/5"
              >
                <FiLinkedin className="text-sm" /> LinkedIn
              </a>
              <a 
                href="https://www.instagram.com/devillabs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/60 hover:text-accent transition-colors duration-300 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase border border-white/10 px-4 py-2 rounded-full hover:border-accent hover:bg-accent/5"
              >
                <FiInstagram className="text-sm" /> Instagram
              </a>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-2 md:gap-3 lg:justify-end max-w-3xl"
          >
            {categories.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-sans tracking-[0.15em] text-[10px] md:text-xs px-5 py-2.5 border transition-all duration-300 rounded-sm z-10 relative overflow-hidden group ${
                  activeFilter === filter
                    ? "bg-accent/15 text-accent border-accent/40 shadow-[0_0_20px_rgba(var(--accent-color-rgb),0.15)]"
                    : "border-white/10 bg-black/50 text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5"
                }`}
              >
                {filter.toUpperCase()}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Project Masonry / Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[600px] mb-20">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <TiltCard key={project.id} project={project} />
              ))
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                exit={{ opacity: 0, scale: 0.9 }} 
                className="col-span-full flex flex-col items-center justify-center text-center p-24 border border-white/5 bg-white/[0.01] rounded-sm backdrop-blur-sm"
              >
                <div className="w-16 h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center mb-6 relative">
                  <div className="absolute inset-0 border border-accent/30 rounded-full animate-ping" />
                  <FiCode className="text-accent/50 text-2xl" />
                </div>
                <p className="text-white/30 font-sans text-xs tracking-[0.3em] uppercase">Sector Empty</p>
                <p className="text-accent/60 font-heading tracking-wider text-xl mt-3 italic font-light">Engineering phase active...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}

