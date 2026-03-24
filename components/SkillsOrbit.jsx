"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Python", level: 92 },
      { name: "C++", level: 80 },
      { name: "HTML/CSS", level: 98 },
      { name: "SQL", level: 85 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "Next.js", level: 96 },
      { name: "React", level: 95 },
      { name: "Node.js", level: 90 },
      { name: "Django", level: 82 },
      { name: "FastAPI", level: 88 },
      { name: "Express", level: 87 },
    ],
  },
  {
    category: "AI & ML",
    skills: [
      { name: "LangChain", level: 90 },
      { name: "GPT / Claude API", level: 93 },
      { name: "TensorFlow", level: 75 },
      { name: "Whisper / TTS", level: 85 },
      { name: "Computer Vision", level: 78 },
      { name: "CrewAI", level: 88 },
    ],
  },
  {
    category: "Tools & Cloud",
    skills: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 82 },
      { name: "Vercel / AWS", level: 90 },
      { name: "Firebase", level: 85 },
      { name: "Figma", level: 80 },
      { name: "MongoDB", level: 88 },
    ],
  },
];

export default function SkillsOrbit() {
  return (
    <section className="w-full py-24 md:py-36 relative z-20 overflow-hidden bg-background">
      {/* Decorative Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(rgba(207,181,59,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(207,181,59,0.3) 1px, transparent 1px)`,
        backgroundSize: '80px 80px'
      }} />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-sans mb-4">Technical Arsenal</p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight">
            Tools I <br />
            <span className="text-accent italic">Weaponize.</span>
          </h2>
          <div className="w-24 h-px bg-accent/50 mt-8" />
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.1 }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-accent font-mono text-xs">0{catIdx + 1}</span>
                <h3 className="font-heading text-2xl text-white font-semibold">{cat.category}</h3>
                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Skill Bars */}
              <div className="space-y-5">
                {cat.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: catIdx * 0.05 + skillIdx * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-sans text-sm text-white/80 font-light">{skill.name}</span>
                      <span className="font-mono text-[10px] text-accent/60">{skill.level}%</span>
                    </div>
                    <div className="w-full h-[2px] bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, delay: catIdx * 0.1 + skillIdx * 0.08, ease: "easeOut" }}
                        className="h-full rounded-full"
                        style={{
                          background: `linear-gradient(90deg, rgba(207,181,59,0.3), rgba(207,181,59,0.8))`,
                        }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 pt-12 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { num: "24+", label: "Technologies" },
            { num: "20+", label: "Projects Built" },
            { num: "1+", label: "Year Building" },
            { num: "∞", label: "Curiosity" },
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="font-heading text-3xl md:text-4xl font-bold text-accent">{stat.num}</div>
              <div className="font-sans text-xs text-white/40 tracking-widest uppercase mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
