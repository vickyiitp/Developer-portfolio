"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "EcoLogistics API",
    category: "AUTOMATION TOOLS",
    description: "Automated 40+ hours of manual data entry for a Logistics startup using headless integrations.",
    demoLink: "#",
    videoLink: "#",
  },
  {
    id: 2,
    title: "Devil Labs Core",
    category: "CREATIVE WEBSITES",
    description: "Engineered a high-performance, 0-latency marketing site using Next.js 15 and WebGL.",
    demoLink: "#",
    videoLink: "#",
  },
  {
    id: 3,
    title: "Unity Sync Bot",
    category: "AUTOMATION TOOLS",
    description: "Deployed custom Unity script pipelines that cut compilation monitoring time by 85%.",
    demoLink: "#",
    videoLink: "#",
  },
  {
    id: 4,
    title: "Aura E-Commerce",
    category: "CREATIVE WEBSITES",
    description: "Built a fully headless storefront resolving abandoned carts with AI-driven dynamic pricing.",
    demoLink: "#",
    videoLink: "#",
  },
  {
    id: 5,
    title: "ShiftGenius AI",
    category: "AUTOMATION TOOLS",
    description: "Developed an automated shift scheduling predictor for a mid-sized restaurant franchise.",
    demoLink: "#",
    videoLink: "#",
  },
  {
    id: 6,
    title: "Velocity Dashboard",
    category: "CREATIVE WEBSITES",
    description: "Designed a dark-mode interactive data visualization portal for high-frequency traders.",
    demoLink: "#",
    videoLink: "#",
  },
];

const filters = ["ALL PROJECTS", "AUTOMATION TOOLS", "CREATIVE WEBSITES"];

function TiltCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for the 3D tilt
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    // Only apply hover effects on larger screens (min-width md, typical mouse environments)
    if (window.innerWidth < 768) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[380px] md:h-[400px] bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-8 md:p-10 flex flex-col justify-between overflow-hidden group hover:border-[#CFB53B]/50 transition-colors duration-500"
    >
      {/* Animated CSS Grid inside card */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none group-hover:opacity-[0.08] transition-opacity duration-1000"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
      
      {/* Subtle gold glow on hover */}
      <div className="absolute inset-x-0 bottom-[-100px] h-[200px] bg-[#CFB53B]/20 blur-[100px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 origin-bottom pointer-events-none z-0" />

      {/* Card Content Top Container */}
      <div className="relative z-10 flex flex-col" style={{ transform: "translateZ(30px)" }}>
        <span className="font-sans text-xs tracking-widest text-[#CFB53B] mb-4">
          [{project.category}]
        </span>
        <h3 className="font-heading text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
          {project.title}
        </h3>
        <p className="font-sans font-light text-white/60 text-sm md:text-base leading-relaxed line-clamp-3">
          {project.description}
        </p>
      </div>

      {/* Card Actions Bottom Container */}
      <div className="relative z-10 flex flex-col space-y-3 mt-8" style={{ transform: "translateZ(40px)" }}>
        <a 
          href={project.demoLink}
          className="w-full text-center py-3.5 bg-[#CFB53B] text-black font-sans font-medium text-xs tracking-wider border border-[#CFB53B] hover:bg-transparent hover:text-[#CFB53B] transition-colors duration-300"
        >
          LAUNCH LIVE DEMO
        </a>
        <a 
          href={project.videoLink}
          className="w-full text-center py-3.5 bg-transparent text-white font-sans font-light text-xs tracking-wider border border-white/20 group-hover:border-[#CFB53B]/50 hover:bg-white/5 transition-all duration-300"
        >
          WATCH PROCESS VIDEO
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectInventory() {
  const [activeFilter, setActiveFilter] = useState("ALL PROJECTS");

  const filteredProjects = projects.filter((p) => 
    activeFilter === "ALL PROJECTS" ? true : p.category === activeFilter
  );

  return (
    <section className="w-full py-24 md:py-36 border-t border-white/5 bg-[#0A0A0A] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 gap-8">
          <div>
            <h2 className="font-heading text-[clamp(2.2rem,4vw,4rem)] font-bold text-white tracking-tight mb-4">
              Project Inventory.
            </h2>
            <p className="font-sans font-light text-white/60 max-w-sm">
              An archive of robust architectures and automation pipelines engineered for absolute profitability.
            </p>
          </div>

          {/* High-end Minimal Filters */}
          <div className="flex flex-wrap gap-4 md:gap-x-8 md:gap-y-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-sans tracking-widest text-xs transition-colors duration-300 ${
                  activeFilter === filter 
                    ? "text-[#CFB53B] font-medium" 
                    : "text-white/40 hover:text-white/80"
                }`}
              >
                [ {filter} ]
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-1000">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <TiltCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
