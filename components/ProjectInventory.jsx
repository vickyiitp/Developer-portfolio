"use client";

import { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";

const projects = [];

const filters = ["Landing pages", "full stacks website", "Automations tools", "AI Tools", "Utilites tools", "others"];

function TiltCard({ project }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (window.innerWidth < 768) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
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
      whileInView={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative w-full ${project.size === 'large' ? 'md:col-span-2 h-[300px] md:h-[350px]' : 'h-[300px] md:h-[350px]'} bg-white/5 backdrop-blur-md border border-white/10 rounded-sm p-6 md:p-8 flex flex-col justify-between overflow-hidden group hover:border-accent/40 transition-all duration-500`}
    >
      <div className="absolute inset-x-0 bottom-[-50px] h-[100px] bg-accent/10 blur-[60px] rounded-full scale-0 group-hover:scale-100 transition-transform duration-1000 origin-bottom pointer-events-none" />

      <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
        <span className="font-sans text-[10px] tracking-widest text-accent mb-2 block">
          [{project.category.toUpperCase()}]
        </span>
        <h3 className="font-heading text-2xl md:text-3xl font-bold text-white leading-tight mb-2">
          {project.title}
        </h3>
        <p className="font-sans font-light text-white/50 text-sm leading-relaxed line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="relative z-10 flex gap-4 mt-6" style={{ transform: "translateZ(40px)" }}>
        <a href="#" className="flex-1 text-center py-2.5 bg-accent text-black font-sans font-bold text-[10px] tracking-wider hover:bg-white transition-colors">
          LAUNCH
        </a>
        <a href="#" className="flex-1 text-center py-2.5 bg-transparent text-white font-sans text-[10px] tracking-wider border border-white/10 hover:border-accent transition-colors">
          DETAILS
        </a>
      </div>
    </motion.div>
  );
}

export default function ProjectInventory() {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  const filteredProjects = projects.filter((p) => 
    p.category === activeFilter
  );

  return (
    <section className="w-full py-16 md:py-24 border-t border-white/5 bg-[#0A0A0A] relative z-20">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-8">
          <div>
            <h2 className="font-heading text-[clamp(2rem,4vw,3.5rem)] font-bold text-white tracking-tight mb-2">
              Project <span className="text-accent italic">Inventory.</span>
            </h2>
            <p className="font-sans font-light text-white/40 text-sm max-w-sm">
              Proprietary architectures and automation pipelines.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-4">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`font-sans tracking-widest text-[10px] px-3 py-1.5 border border-white/5 transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-accent/10 text-accent border-accent/20" 
                    : "text-white/30 hover:text-white/60"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <TiltCard key={project.id} project={project} />
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-center p-20 border border-white/5 bg-white/2 rounded-sm">
                <p className="text-white/20 font-sans text-sm tracking-widest uppercase">Inventory Empty</p>
                <p className="text-accent/40 font-heading text-lg mt-2 italic">Engineering in progress...</p>
              </div>
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
