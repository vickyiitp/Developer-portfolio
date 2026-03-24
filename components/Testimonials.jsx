"use client";

import { motion } from "framer-motion";

const reactions = [
  {
    quote: "bro saw this portfolio and literally said 'ye toh IITian hai, trust karle' 😭🔥 the website design is insane",
    source: "LinkedIn Comment",
    vibe: "🔥"
  },
  {
    quote: "just watched his YouTube video on automation tools... this guy builds things that actually work, not just tutorials",
    source: "YouTube Comment",
    vibe: "💡"
  },
  {
    quote: "asked him to build a WhatsApp bot for my shop and it was ready in 3 days. customers are placing orders automatically now",
    source: "WhatsApp Chat",
    vibe: "🚀"
  },
  {
    quote: "his DevScript has 100+ free tools and it loads faster than Google. how is this guy still in college 😅",
    source: "Twitter / X",
    vibe: "⚡"
  },
  {
    quote: "sent him a rough idea at night, woke up to a fully working prototype with payment integration. IIT se hai toh IIT se hai 🙏",
    source: "Instagram DM",
    vibe: "✨"
  },
  {
    quote: "his Hisaab app saved my small business. I track all payments and send WhatsApp reminders. no more awkward follow-ups",
    source: "Google Review",
    vibe: "💰"
  },
  {
    quote: "checked his GitHub — 20+ real projects, not just todo apps. AI bots, fintech tools, security scanners... actual production code",
    source: "GitHub Profile",
    vibe: "🧠"
  },
  {
    quote: "the pricing is so reasonable for the quality you get. most agencies charge 10x for the same thing with worse code",
    source: "LinkedIn DM",
    vibe: "💎"
  },
];

const doubled = [...reactions, ...reactions];

export default function Testimonials() {
  return (
    <section className="w-full py-20 md:py-28 relative z-20 overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-sans mb-4">Real Reactions</p>
          <h2 className="font-heading text-[clamp(2rem,5vw,4rem)] font-bold text-white tracking-tight">
            What People <span className="text-accent italic">Actually Say.</span>
          </h2>
          <p className="font-sans text-white/40 text-sm mt-3 max-w-lg">Real reactions from DMs, comments, and chats after people see the work and content.</p>
        </motion.div>
      </div>

      {/* Marquee Strip */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 50, ease: "linear" } }}
          className="flex gap-6 w-max"
        >
          {doubled.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-[300px] md:w-[380px] p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-sm group hover:border-accent/20 transition-colors relative overflow-hidden"
            >
              {/* Animated corner lines */}
              <div className="absolute top-0 left-0 w-8 h-px bg-accent/30 group-hover:w-16 transition-all duration-500" />
              <div className="absolute top-0 left-0 w-px h-8 bg-accent/30 group-hover:h-16 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-px bg-accent/30 group-hover:w-16 transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-px h-8 bg-accent/30 group-hover:h-16 transition-all duration-500" />

              <div className="text-3xl mb-4 select-none">{t.vibe}</div>
              
              <p className="font-sans text-sm md:text-base text-white/70 font-light leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-accent/50" />
                <span className="font-mono text-[10px] text-white/30 tracking-wider uppercase">{t.source}</span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
