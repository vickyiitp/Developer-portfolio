"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, Brain, Star, Mic, Smile, 
  Link as LinkIcon, Users, 
  Flame, Database, Cloud, Triangle, 
  Mail, MessageCircle, Send, 
  Box, Layout 
} from "lucide-react";
import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const tools = [
  { name: "OpenAI (GPT)", role: "AI text & automation", icon: <Sparkles className="w-6 h-6" />, color: "group-hover:text-[#10a37f]" },
  { name: "Claude (Anthropic)", role: "Advanced reasoning", icon: <Brain className="w-6 h-6" />, color: "group-hover:text-[#d97757]" },
  { name: "Google Gemini", role: "Multimodal AI", icon: <Star className="w-6 h-6" />, color: "group-hover:text-[#4285f4]" },
  { name: "Whisper", role: "Speech-to-text", icon: <Mic className="w-6 h-6" />, color: "group-hover:text-white" },
  { name: "Hugging Face", role: "Open-source models", icon: <Smile className="w-6 h-6" />, color: "group-hover:text-[#ffd21e]" },
  
  { name: "LangChain", role: "AI workflow orchestration", icon: <LinkIcon className="w-6 h-6" />, color: "group-hover:text-[#32b08c]" },
  { name: "CrewAI", role: "Multi-agent systems", icon: <Users className="w-6 h-6" />, color: "group-hover:text-[#ff6b6b]" },
  
  { name: "Firebase", role: "Real-time backend", icon: <Flame className="w-6 h-6" />, color: "group-hover:text-[#ffca28]" },
  { name: "MongoDB", role: "NoSQL Database", icon: <Database className="w-6 h-6" />, color: "group-hover:text-[#47a248]" },
  { name: "AWS", role: "Cloud infrastructure", icon: <Cloud className="w-6 h-6" />, color: "group-hover:text-[#ff9900]" },
  { name: "Vercel", role: "Edge deployment", icon: <Triangle className="w-6 h-6 fill-current" />, color: "group-hover:text-white" },
  
  { name: "Gmail API", role: "Email automation", icon: <Mail className="w-6 h-6" />, color: "group-hover:text-[#ea4335]" },
  { name: "WhatsApp API", role: "Messaging automation", icon: <MessageCircle className="w-6 h-6" />, color: "group-hover:text-[#25d366]" },
  { name: "Telegram Bot", role: "Bot integration", icon: <Send className="w-6 h-6" />, color: "group-hover:text-[#0088cc]" },
  { name: "LinkedIn API", role: "Professional networking", icon: <FaLinkedin className="w-6 h-6" />, color: "group-hover:text-[#0077b5]" },
  { name: "YouTube API", role: "Video automation", icon: <FaYoutube className="w-6 h-6" />, color: "group-hover:text-[#ff0000]" },
  
  { name: "GitHub", role: "Version control", icon: <FaGithub className="w-6 h-6" />, color: "group-hover:text-white" },
  { name: "Docker", role: "Containerization", icon: <Box className="w-6 h-6" />, color: "group-hover:text-[#2496ed]" },
  { name: "WordPress", role: "CMS integration", icon: <Layout className="w-6 h-6" />, color: "group-hover:text-[#21759b]" },
];

export default function TechMarquee() {
  // Duplicate array for seamless infinite scroll
  const duplicatedTools = [...tools, ...tools];

  return (
    <section className="w-full py-24 bg-[#050505] relative z-20 overflow-hidden border-y border-white/5">
      
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center mb-16 relative z-10">
        <h2 className="font-heading text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Powered By <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#CFB53B] to-white italic">Intelligence</span>
        </h2>
        <p className="text-white/50 font-mono text-xs md:text-sm tracking-widest uppercase max-w-2xl mx-auto">
          I integrate powerful AI models, APIs, and tools to build automated systems.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full flex overflow-hidden group">
        
        {/* Left/Right Blur Fades (Glassmorphism edges) */}
        <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <motion.div 
          className="flex whitespace-nowrap gap-8 md:gap-12 px-6 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 40,
            repeat: Infinity,
          }}
          style={{ width: "max-content" }}
        >
          {/* Pause on hover achieved via CSS peer group hover override if needed, 
              but framer motion takes JS control. We can rely on a smooth consistent scroll for now, 
              or use a CSS animation class in tailwind. Since Framer Motion is used, we'll keep the infinite scroll active 
              and rely on the high-fidelity hover effects on the items. */}
          
          {duplicatedTools.map((tool, index) => (
            <div 
              key={index} 
              className="group relative flex items-center justify-center p-6 bg-white/[0.02] border border-white/5 rounded-2xl backdrop-blur-sm cursor-pointer transition-all duration-500 hover:bg-white/[0.05] hover:border-white/20 hover:scale-110 hover:shadow-[0_0_30px_rgba(207,181,59,0.15)] hover:z-20 min-w-[120px] md:min-w-[160px]"
            >
              <div className={`text-white/30 transition-colors duration-500 ${tool.color} flex flex-col items-center gap-3`}>
                {tool.icon}
                <span className="font-heading text-sm md:text-base font-bold tracking-wide text-white/50 group-hover:text-white transition-colors duration-500">
                  {tool.name}
                </span>
              </div>

              {/* Tooltip (Micro-detail) */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 transition-all duration-300 pointer-events-none">
                <div className="bg-[#CFB53B] text-black text-[10px] font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm whitespace-nowrap font-bold shadow-[0_0_15px_rgba(207,181,59,0.5)]">
                  {tool.role}
                </div>
                {/* Tooltip Triangle */}
                <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[#CFB53B] mx-auto"></div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      
    </section>
  );
}