"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const devJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "There are only 10 types of people: those who understand binary and those who don't 🤓",
  "A SQL query walks into a bar, sees two tables and asks... 'Can I JOIN you?'",
  "!false — it's funny because it's true 😂",
  "I told my client I'd have the site ready by Monday. I didn't say WHICH Monday 💀",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself 😅",
  "git commit -m 'fixed bug' // narrator: he did not fix the bug",
  "Debugging: removing bugs. Programming: adding bugs. The circle of dev life 🔄",
  "Client: 'Can you make the logo bigger?' Me: *internal screaming* 🫠",
  "AI replaced my job... of explaining to clients why something takes more than 5 minutes",
];

const botResponses = {
  greeting: [
    "Hey! 👋 I'm Devil Bot — Vicky's AI sidekick. Ask me about services, pricing, or just say 'joke' for a laugh!",
    "Yo! Welcome to Devil Labs 🔥 I can help you with projects, pricing, or drop some dev humor. What's up?",
  ],
  services: [
    "We build 6 things really well:\n\n🌐 AI Websites (₹5K+)\n🤖 Agentic AI Systems\n⚡ Business Automation\n💬 Chatbots & Voice AI\n🛒 E-Commerce Stores\n📱 SaaS Products\n\nWhich one sounds interesting? Or type 'pricing' for rates!",
  ],
  pricing: [
    "💰 Here's Vicky's pricing:\n\n• Starter: ₹5,000 — Landing page / Portfolio\n• Growth: ₹15,000 — Full website + CRM + Automation\n• Enterprise: ₹50,000+ — AI Systems / SaaS / Multi-platform\n\nTimeline: 3 days to 6 weeks depending on scope.\n\nWant to start? Type 'contact' or scroll to the form below! 👇",
  ],
  contact: [
    "📧 Email: vickyykumar14@gmail.com\n📱 WhatsApp: +91 8102099678\n🌐 Portfolio: vickyiitp.tech\n\nOr just fill the contact form at the bottom of this page! I'll make sure Vicky responds within 24 hours 🚀",
  ],
  joke: () => devJokes[Math.floor(Math.random() * devJokes.length)],
  ai: [
    "Oh, you want AI? You came to the right place 🧠\n\nVicky builds:\n• GPT-powered chatbots (like me but smarter 😅)\n• Autonomous AI agents (they work while you sleep)\n• Voice AI receptionists\n• AI content generators\n• Custom LLM integrations\n\nType 'pricing' to see rates or 'contact' to get started!",
  ],
  website: [
    "Websites are Vicky's bread and butter 🍞\n\nWhat you get:\n✅ Custom design (no templates)\n✅ SEO optimized (Core Web Vitals 95+)\n✅ Mobile-first responsive\n✅ Analytics dashboard\n✅ Source code ownership\n\nStarting at just ₹5,000. Type 'contact' to begin! ",
  ],
  automation: [
    "Automation = delete the boring ⚡\n\nWhat Vicky automates:\n• CRM pipelines → auto follow-ups\n• Invoice → auto payment reminders\n• Social media → scheduled posting\n• Email → drip campaigns\n• Inventory → auto reorder\n\nOne-time build, runs forever. Type 'pricing' or 'contact'!",
  ],
  who: [
    "Vicky Kumar 🎓\n\n• IIT Patna (CSE, Class 2027)\n• Founded Devil Labs\n• 20+ projects on GitHub\n• 1+ year building production code\n• Tech: Next.js, React, Python, AI/ML\n\nThis guy ships fast. Like, scary fast. 🚀",
  ],
  default: [
    "Hmm, I'm not sure about that one 🤔\n\nTry asking about:\n• 'services' — what we build\n• 'pricing' — how much it costs\n• 'contact' — reach Vicky\n• 'joke' — I'm actually funny\n• 'ai' — AI development\n• 'website' — web development\n• 'who' — about Vicky",
  ],
};

function getResponse(input) {
  const lower = input.toLowerCase().trim();
  if (lower.match(/hi|hey|hello|sup|yo|hola/)) return botResponses.greeting[Math.floor(Math.random() * botResponses.greeting.length)];
  if (lower.match(/service|what.*do|what.*build|offer/)) return botResponses.services[0];
  if (lower.match(/price|cost|rate|how much|budget|₹|rs|rupee|charge|fee/)) return botResponses.pricing[0];
  if (lower.match(/contact|email|phone|whatsapp|reach|call|hire|mail/)) return botResponses.contact[0];
  if (lower.match(/joke|funny|laugh|lol|haha|humor|meme/)) return botResponses.joke();
  if (lower.match(/ai|artificial|agent|chatbot|gpt|llm|machine learn/)) return botResponses.ai[0];
  if (lower.match(/web|site|landing|page|react|next/)) return botResponses.website[0];
  if (lower.match(/automat|workflow|zapier|n8n|crm|bot/)) return botResponses.automation[0];
  if (lower.match(/who|vicky|about|iit|patna|devil|founder/)) return botResponses.who[0];
  return botResponses.default[0];
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Hey! 👋 I'm Devil Bot. Ask about services, pricing, or say 'joke' for dev humor!", ts: Date.now() }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const send = () => {
    if (!input.trim()) return;
    const userMsg = input.trim();
    setMessages(prev => [...prev, { role: "user", text: userMsg, ts: Date.now() }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const reply = getResponse(userMsg);
      setMessages(prev => [...prev, { role: "bot", text: reply, ts: Date.now() }]);
      setIsTyping(false);
    }, 600 + Math.random() * 800);
  };

  const quickActions = ["Services", "Pricing", "Contact", "Joke"];

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-6 md:left-12 w-14 h-14 rounded-full bg-accent text-black flex items-center justify-center z-[100] shadow-lg shadow-accent/20 hover:shadow-accent/40 transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Chat Bot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="text-xl font-bold">✕</motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-2xl">💬</motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Notification dot */}
      {!isOpen && (
        <motion.div
          className="fixed bottom-[52px] left-[56px] md:left-[62px] w-3 h-3 rounded-full bg-red-500 z-[101]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-6 md:left-12 w-[calc(100vw-48px)] sm:w-[380px] h-[500px] bg-[#0A0A0A] border border-white/10 rounded-lg z-[100] flex flex-col overflow-hidden shadow-2xl shadow-black/50"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3 bg-white/[0.02]">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-sm">🤖</div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0A0A0A]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium font-sans">Devil Bot</p>
                <p className="text-white/40 text-[10px] font-mono tracking-wider">ALWAYS ONLINE • DEVIL LABS</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors text-xs">ESC</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-lg text-sm font-sans whitespace-pre-line leading-relaxed ${
                      msg.role === "user"
                        ? "bg-accent/20 text-white border border-accent/10"
                        : "bg-white/5 text-white/80 border border-white/5"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-lg flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-accent" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickActions.map(action => (
                <button
                  key={action}
                  onClick={() => {
                    setMessages(prev => [...prev, { role: "user", text: action, ts: Date.now() }]);
                    setIsTyping(true);
                    setTimeout(() => {
                      const reply = getResponse(action);
                      setMessages(prev => [...prev, { role: "bot", text: reply, ts: Date.now() }]);
                      setIsTyping(false);
                    }, 600 + Math.random() * 800);
                  }}
                  className="text-[10px] font-mono px-2.5 py-1 border border-white/10 text-white/40 rounded-full hover:border-accent/30 hover:text-accent/70 transition-colors"
                >
                  {action}
                </button>
              ))}
            </div>

            {/* Input */}
            <form
              onSubmit={(e) => { e.preventDefault(); send(); }}
              className="px-4 py-3 border-t border-white/10 flex gap-2 bg-white/[0.02]"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about services, pricing..."
                className="flex-1 bg-transparent text-white text-sm font-sans placeholder:text-white/20 outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="px-3 py-1.5 bg-accent text-black text-xs font-medium rounded-sm hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Send
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
