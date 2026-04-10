"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Box, Cpu, Workflow } from "lucide-react";

// NEW INTELLIGENCE AND LEADERSHIP SECTIONS
const coreIntelligence = [
  "Strategic Thinking",
  "Problem Solving",
  "Critical Thinking",
  "Systems Design Mindset",
  "First-Principles Thinking",
  "Research-Driven Development",
  "Rapid Learning & Adaptation",
  "Product-Oriented Thinking"
];

const leadershipExecution = [
  "Project Ownership (End-to-End)",
  "Startup Mindset Execution",
  "Team Collaboration (5+ Members Experience)",
  "Decision Making Under Uncertainty",
  "Client Communication & Delivery",
  "Time & Priority Management"
];

const aiAutomation = [
  "AI Automation System Design",
  "Multi-Agent Systems (CrewAI, LangChain)",
  "GPT / Claude API Integrations",
  "AI SaaS Architecture",
  "Workflow Automation (No-Code + Code Hybrid)",
  "Prompt Engineering & Optimization",
  "AI-powered Dashboards & Tools",
  "Chatbots & Conversational AI",
  "Data Pipelines for AI Systems"
];

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
    <section className="w-full py-32 relative z-20 overflow-hidden bg-[#0A0A0A]">
      {/* Luxury Background Glow */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[#CFB53B]/5 blur-[200px] pointer-events-none z-0 rounded-full translate-x-1/3 -translate-y-1/4"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Superior Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-24 text-center md:text-left"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-[#CFB53B]/30 bg-[#CFB53B]/5 backdrop-blur-md rounded-full mb-8">
            <span className="text-[#CFB53B] font-mono text-[10px] tracking-[0.2em] uppercase uppercase">⚔️ Technical Arsenal</span>
          </div>
          <h2 className="font-heading text-5xl md:text-7xl font-black text-white leading-[1.05] tracking-tighter mb-6">
            Systems I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB53B] to-white italic">Design.</span> <br />
            Intelligence I <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB53B] to-white italic">Build.</span>
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl font-light">
            <strong className="text-white">I don’t just build websites. I build intelligent systems that replace work.</strong> This guy doesn’t just code — he builds systems, thinks deeply, and automates the future.
          </p>
        </motion.div>

        {/* 🧠 Core Intelligence & Leadership */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          
          {/* Box 1: Core Intelligence */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.02] border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#CFB53B]/10 flex items-center justify-center border border-[#CFB53B]/20">
                <Box className="w-5 h-5 text-[#CFB53B]" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">Core Intelligence</h3>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-[0.2em]">How I Think & Operate</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {coreIntelligence.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-[#CFB53B] shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Box 2: Leadership */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/[0.02] border border-white/10 p-10 rounded-2xl backdrop-blur-md hover:bg-white/[0.04] transition-all duration-500"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Cpu className="w-5 h-5 text-white/70" />
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">Leadership & Execution</h3>
                <p className="text-[10px] text-white/40 font-mono uppercase tracking-[0.2em]">How I Lead & Deliver</p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-y-4">
              {leadershipExecution.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-white/50 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/70 font-light">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* 🤖 AI Automation - The Differentiator */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full bg-gradient-to-br from-[#CFB53B]/10 to-transparent border border-[#CFB53B]/30 p-10 md:p-14 rounded-2xl backdrop-blur-xl mb-32 relative overflow-hidden group"
        >
          {/* Glass glare */}
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#CFB53B]/50 to-transparent"></div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Workflow className="text-[#CFB53B] w-6 h-6" />
                <h3 className="text-3xl md:text-4xl font-heading font-black text-white">AI Automation & Workflows</h3>
              </div>
              <p className="text-[#CFB53B] font-mono text-[10px] tracking-[0.2em] uppercase">🔥 The Differentiator</p>
            </div>
            <div className="md:text-right hidden md:block">
              <p className="text-white/60 italic font-serif text-lg">
                &quot;I don’t just use AI — <br/> <strong className="text-white">I design systems that work without me.</strong>&quot;
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
            {aiAutomation.map((item, i) => (
              <div key={i} className="flex items-center gap-3 bg-black/40 p-4 rounded-xl border border-white/5 group-hover:border-[#CFB53B]/20 transition-colors duration-500">
                <div className="w-1.5 h-1.5 rounded-full bg-[#CFB53B] shadow-[0_0_8px_#CFB53B]"></div>
                <span className="text-sm text-white/80 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 💻 Development Stack Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-heading font-bold text-white mb-12 flex items-center gap-4">
            Development Stack <div className="h-px bg-white/10 flex-1"></div>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
            {skillCategories.map((cat, catIdx) => (
              <div key={cat.category}>
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
                  <span className="text-[#CFB53B] font-mono text-xs">0{catIdx + 1}</span>
                  <h4 className="font-heading text-xl text-white font-semibold">{cat.category}</h4>
                </div>

                {/* Premium Skill Bars */}
                <div className="space-y-6">
                  {cat.skills.map((skill, skillIdx) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: skillIdx * 0.05 }}
                      className="group"
                    >
                      <div className="flex justify-between items-end mb-2">
                        <span className="font-mono text-xs text-white/70 uppercase tracking-widest group-hover:text-white transition-colors">{skill.name}</span>
                        <span className="font-mono text-[10px] text-[#CFB53B]/60 drop-shadow-[0_0_5px_rgba(207,181,59,0.5)]">{skill.level}%</span>
                      </div>
                      <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 + (skillIdx * 0.1), ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-0 left-0 h-full bg-[#CFB53B] shadow-[0_0_10px_#CFB53B]"
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stat Strip (Glassmorphism) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 pt-16 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {[
            { num: "24+", label: "Technologies Mastered" },
            { num: "20+", label: "Projects Built" },
            { num: "1+ Yr", label: "Building AI Systems" },
            { num: "∞", label: "Infinite Curiosity" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/40 mb-2">
                {stat.num}
              </div>
              <div className="font-mono text-[10px] text-[#CFB53B] tracking-[0.2em] uppercase">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
