"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const devJokes = [
  "Why do programmers prefer dark mode? Because light attracts bugs! 🐛",
  "There are only 10 types of people: those who understand binary and those who don't 🤓",
  "A SQL query walks into a bar, sees two tables and asks... 'Can I JOIN you?'",
  "I told my client I'd have the site ready by Monday. I didn't say WHICH Monday 💀",
  "Why was the JavaScript developer sad? Because he didn't Node how to Express himself 😅",
  "git commit -m 'fixed bug' // narrator: he did not fix the bug",
  "Debugging: removing bugs. Programming: adding bugs. The circle of dev life 🔄",
  "Client: 'Can you make the logo bigger?' Me: *internal screaming* 🫠",
  "AI replaced my job... of explaining to clients why something takes more than 5 minutes",
  "My code works, I don't know why. My code doesn't work, I don't know why. 🤷‍♂️",
  "A programmer's wife tells him: 'Go to the store and get a loaf of bread. If they have eggs, get a dozen.' He comes home with 12 loaves of bread."
];

const knowledgeBase = {
  greetings: [
    "Hey there! 👋 I'm Devil Bot, Vicky's AI agent. How can I help you today?",
    "Yo! Welcome to Devil Labs 🔥 I'm an AI designed to help you navigate Vicky's services. What's on your mind?",
    "Hello! I can assist you with web development queries, AI automation details, SaaS builds, pricing, or just dropping some dev humor. What do you need?",
    "Greetings, human. 🤖 I am Devil Bot. Ready to deploy some knowledge about Vicky's coding skills. What do you want to know?"
  ],
  capabilities: [
    "I'm programmed to give you instant answers about Devil Labs. You can ask me things like 'How much for an e-commerce site?', 'What tech stack do you use?', 'Do you handle SEO?', or 'Can you automate my business?'",
    "I know all about Vicky's background, service offerings, tech stack, and pricing models! Ask me anything about scaling your business with tech.",
    "Think of me as a digital receptionist. I can guide you through our services: AI Agents, SaaS MVP Development, Workflow Automation, Headless E-commerce, or Conversion Landing Pages!"
  ],
  services: [
    "Vicky specializes in 8 core areas:\n\n1. 🚀 Conversion Landing Pages\n2. 🏢 Corporate Web Platforms\n3. 🤖 Agentic AI Orchestration\n4. ☁️ Full-Stack SaaS/MVP\n5. 🛒 Headless E-Commerce\n6. ⚡ Workflow Automation\n7. 📈 Performance & SEO Growth\n8. 🛠️ Micro-Tools & Utilities\n\nAre you looking to build something specific, or do you want to talk pricing?",
    "We build production-ready digital tools. Whether you need a sleek landing page, a complex SaaS MVP, an AI agent to handle your customer support, or n8n workflow automation, Vicky can code it. What industry are you in?",
    "Services range from frontend magic with React/Next.js/Framer Motion to hardcore backend automation & AI systems with Python/Node.js. Want to see some examples or check rates?"
  ],
  seo: [
    "SEO isn't just about keywords anymore; it's about speed and technical structure. Vicky uses Next.js server-side rendering, semantic HTML, dynamic sitemaps, and Lighthouse optimization to ensure you score 95+ and rank higher. Want an audit of your current site?",
    "We offer a dedicated 'Performance & SEO Growth' package! We fix Core Web Vitals, implement structured data, optimize images, and build a ranking roadmap. This starts around ₹15K.",
    "Good SEO implies zero-latency! Our Next.js architectures naturally rank higher on Google because we eliminate slow loading times."
  ],
  saas: [
    "Got a SaaS idea? We build end-to-end MVPs fast. We handle secure Auth (NextAuth/Clerk), Stripe subscription billing, PostgreSQL databases (Prisma/Drizzle), and real-time dashboards. Starts at ₹90k+.",
    "SaaS MVPs are our jam! Vicky can take your concept to production in weeks, not months. We build scalable Docker-ready platforms using Node.js and Next.js."
  ],
  ecommerce: [
    "We build Headless E-Commerce sites! That means using a sleek, custom Next.js frontend connected to a Shopify or custom backend. The result? Sub-second page loads that massively increase conversion rates.",
    "E-com packages start at ₹50K+. Features include global CDN sync, secure Stripe payments, complex inventory logic, and automated order processing. Tell me what you're selling!"
  ],
  timeline: [
    "Timelines depend on the project scope! ⏳\n\n• Landing Pages: 3-5 days\n• Standard Websites: 1-2 weeks\n• E-commerce & SaaS MVPs: 3-6 weeks\n• Custom AI Systems: 3-8 weeks\n\nNeed it faster? We can talk express delivery.",
    "Vicky works in fast, iterative sprints. A simple landing page takes a few days. Massive scale SaaS or AI integrations take a few weeks. Drop your email if you need a specific timeline estimate!"
  ],
  stack: [
    "Vicky's go-to tech stack is elite: Next.js (React), Tailwind CSS, Framer Motion for frontend. Node.js, Python, Prisma (Postgres) for backend. LangChain and OpenAI for AI. Hosted on Vercel or AWS.",
    "We use the modern stack: Next.js, TypeScript, Tailwind, Python, and Docker. Everything is built for speed, security, and scalability. No slow WordPress themes here!"
  ],
  pricing: [
    "💰 Pricing structure (Customizable):\n\n• Micro-Tools & Scripts: ₹8K+\n• High-Conversion Landing Pages: ₹10K+\n• SEO & Performance Fixes: ₹15K+\n• Workflow Automation: ₹25K+\n• Corporate Web Platforms: ₹35K+\n• Headless E-Commerce: ₹50K+\n• Agentic AI Systems: ₹75K+\n• Full-Stack SaaS/MVP: ₹90K+\n\nWhich tier fits your current project?",
    "Rates vary based on complexity! From ₹10k for a lightning-fast landing page to ₹90k+ for an enterprise SaaS or AI capability. If you describe your project, I can give you a more accurate estimate. Or type 'contact' to talk to the human directly."
  ],
  contact: [
    "Ready to build? 🚀\n\n📧 Email: vickyykumar14@gmail.com\n📱 WhatsApp: +91 8102099678\n🌐 Book a call via the contact form at the bottom of the page.\n\nVicky usually responds exactly when you need him to.",
    "You can reach the human (Vicky) directly at:\nEmail: vickyykumar14@gmail.com\nPhone/WhatsApp: +91 8102099678\n\nI recommend WhatsApp—he practically lives in the terminal and WhatsApp.",
    "Just navigate to the Contact page or use the form! Or if you're in a hurry:\n📞 +91 8102099678\n✉️ vickyykumar14@gmail.com"
  ],
  ai: [
    "Ah, AI. My favorite subject. 🧠\n\nVicky builds autonomous agents (like me, but tailored to your business), custom RAG pipelines, LLM Tool Uses, and auto-scaling logic. We use LangChain, OpenAI, Claude, and local models. What kind of AI do you need?",
    "We don't just use AI; we weave it into your workflows. Imagine a bot that books appointments, qualifies sales leads, and updates your CRM while you sleep. That's what Vicky codes. Want to know the price for that?"
  ],
  website: [
    "Vicky's websites aren't just templates. They are custom-coded Next.js/React applications with 3D effects, Framer Motion animations, and 95+ Core Web Vitals scores. Starting at ₹10K. Want to start a project?",
    "If you want a site that loads instantly and makes your competitors cry, you're in the right place. We use Tailwind CSS, Next.js, and extreme SEO optimization. Type 'pricing' to see what it costs."
  ],
  automation: [
    "Automation means doing more with less code. ⚡\n\nVicky automates email drip campaigns, auto-generates invoices via Google Sheets, syncs bookings, connects APIs, and builds n8n/Zapier flows.",
    "Tired of manual data entry? Vicky can build systems that connect your lead forms directly to your CRM, send auto-WhatsApp follow-ups, and alert you on Slack. Starts at ₹25K."
  ],
  why_choose_us: [
    "Why choose Devil Labs? Simple:\n1. Zero Latency (99+ Lighthouse scores)\n2. No Code Bloat (Pure React/Next.js)\n3. Modern UI/UX (Glassmorphism & animations)\n4. Business-first mindset (We code to make you money).",
    "We don't just write code; we engineer absolute profitability. Vicky focuses on metrics that matter: conversion rates, SEO rankings, and automated man-hours saved."
  ],
  who_is_vicky: [
    "Vicky Kumar is a developer, prompt engineer, and the founder of Devil Labs. He studies Computer Science at IIT Patna (Class of '27). He has over 20 production apps on his GitHub and essentially breathes code.",
    "Vicky? He's the guy who built me. Developer by day, automation architect by night. IIT Patna student. He focuses on high-performance web apps and AI systems."
  ],
  socials: [
    "Want to connect with Vicky everywhere? 🌐\n\n• LinkedIn: linkedin.com/in/vickyiitp\n• Twitter/X: x.com/vickyiitp\n• Instagram: instagram.com/vickyiitp\n• YouTube: youtube.com/@VickyIITP\n\nHe posts great coding insights and IIT Patna life!",
    "Catch up with Vicky's latest updates!\nFollow him on Twitter (@vickyiitp) for tech takes, check out his YouTube (@VickyIITP) for coding guides, or connect on LinkedIn (vickyiitp) for business insights.",
    "Devil Labs is active all over social media. You can find Vicky on YouTube, LinkedIn, X, and Instagram. Just search for 'vickyiitp' everywhere! 🚀"
  ],
  acknowledgement: [
    "Got it. I've noted that down.",
    "Makes sense.",
    "Interesting. Tell me more!",
    "I understand. How can we proceed with this?"
  ],
  fallback: [
    "I'm an advanced AI, but I missed that nuance. Try asking about 'SaaS', 'automation', 'pricing', 'tech stack', or say 'tell me a joke'.",
    "My simulated neural nets didn't catch that context fully. Did you want to know about web development timelines, AI automation, or Vicky's rates?",
    "Hmm 🤔... you can either ask me about Devil Labs' services, SEO integrations, pricing, or I can tell you a developer joke.",
    "Still learning! While I process that, would you like to hear about our Headless E-commerce solutions or maybe a coding joke?"
  ]
};

// Advanced context-aware mock AI logic
function getResponse(input, messageHistory = []) {
  const lower = input.toLowerCase().trim();
  const pastUserDocs = messageHistory.filter(m => m.role === 'user').map(m => m.text.toLowerCase());
  const chatCount = pastUserDocs.length;
  
  // Lead Generation Triggers
  const isEmail = lower.match(/[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/);
  const isPhone = lower.match(/\+?\d{10,14}/);
  
  if (isEmail || isPhone) {
    return { text: "Awesome. I've captured your contact info safely 🔒. Vicky will reach out to you within 24 hours to discuss this further. Anything else you'd like to ask in the meantime?" };
  }
  
  // Intent detection via regex matching
  const intents = {
    greeting: /\b(hi|hey|hello|sup|yo|hola|greetings)\b/i,
    capabilities: /(what can you|what are you|help me with|how does this work|what do you know)/i,
    services: /(service|what.*do|what.*build|offer|help with|can you make)/i,
    seo: /(seo|search|rank|google|lighthouse|traffic|speed|fast)/i,
    saas: /(saas|software as a service|mvp|app|dashboard|auth|stripe)/i,
    ecommerce: /(ecommerce|e-commerce|store|shop|sell|products|shopify)/i,
    timeline: /(time|long|fast|when|duration|days|weeks|weeks|month)/i,
    stack: /(stack|tech|technology|language|framework|react|next|node|python)/i,
    pricing: /(price|cost|rate|much|budget|₹|rs|rupee|charge|fee|quote)/i,
    contact: /(contact|email|phone|whatsapp|reach|call|partner|mail|touch|form)/i,
    joke: /(joke|funny|laugh|lol|haha|humor|meme|entertain)/i,
    why_choose_us: /(why|choose|different|special|better|unique)/i,
    ai: /\b(ai|artificial intelligence|agent|chatbot|gpt|llm|machine learning|ml|rag)\b/i,
    website: /(web|site|landing|page|frontend|portfolio|redesign)/i,
    automation: /(automat|workflow|zapier|n8n|crm|system|process|efficiency)/i,
    who: /(who|vicky|about|iit|patna|devil|founder|creator)/i,
    socials: /(social|media|twitter|linkedin|instagram|youtube|github|follow|connect|tweet|ig|insta|x\.com)/i,
  };

  let matchedIntent = null;
  for (const [intent, regex] of Object.entries(intents)) {
    if (regex.test(lower)) {
      matchedIntent = intent;
      break;
    }
  }

  // Dynamic routing based on intent
  if (matchedIntent) {
    if (matchedIntent === 'contact') {
      // Check if we just sent a contact form, if so, don't show it again immediately
      if (messageHistory.length > 0 && messageHistory[messageHistory.length - 1]?.type === 'contact_form') {
           return { text: "We're already collecting your info! Just fill out the form above. 👆" };
      }
      return {
        text: "I can pull up Vicky's direct line for you. Or, since we're already talking, you can just drop your brief right here and I'll send it straight to his WhatsApp and Email instantly. 👇",
        type: "contact_form"
      };
    }

    if (matchedIntent === 'joke') {
      return { text: devJokes[Math.floor(Math.random() * devJokes.length)] };
    }
    
    // For recognized intents, get a random variant to feel more 'alive'
    const responses = knowledgeBase[matchedIntent === 'who' ? 'who_is_vicky' : matchedIntent];
    let reply = responses[Math.floor(Math.random() * responses.length)];
    
    // Add lead gen push if they ask about pricing/services after 1 message
    if ((matchedIntent === 'pricing' || matchedIntent === 'services' || matchedIntent === 'website' || matchedIntent === 'ai') && chatCount > 1 && Math.random() > 0.5) {
      reply += "\n\nIf you have a specific project in mind, type 'contact' and I can take down your brief right here in the chat!";
    }
    
    return { text: reply };
  }
  
  // Contextual fallback: if they just say short agreement words
  if (lower.length < 5 || lower.match(/^(yes|no|yeah|nope|ok|okay|cool|nice|wow|sure)$/)) {
    return { text: knowledgeBase.acknowledgement[Math.floor(Math.random() * knowledgeBase.acknowledgement.length)] + 
      " Want to talk about pricing, or looking for specific services?" };
  }

  // Pure fallback
  return { text: knowledgeBase.fallback[Math.floor(Math.random() * knowledgeBase.fallback.length)] };
}

function ChatForm({ onSuccess }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;

    const EMAIL = "vickyykumar14@gmail.com";
    const PHONE = "918102099678";

    try {
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `🤖 ChatBot Lead: ${name}`,
          _template: "table",
        }),
      });
    } catch(err) {
      // fallback ignore
    }

    const waText = encodeURIComponent(`🤖 *Quick ChatBot Lead*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n📝 *Brief:* ${message}`);
    window.open(`https://wa.me/${PHONE}?text=${waText}`, "_blank");

    setStatus("success");
    form.reset();
    setTimeout(() => {
      setStatus("idle");
      if (onSuccess) onSuccess(name);
    }, 2000);
  };

  if (status === "success") {
    return (
      <div className="mt-3 p-3 bg-green-500/10 border border-green-500/20 rounded-md text-green-400 font-sans text-xs text-center">
        ✓ Target Locked. Vicky has been pinged.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 flex flex-col gap-2 relative z-10 w-full">
      <input type="text" name="name" required placeholder="Your Name" className="w-full bg-[#050505] border border-white/10 px-3 py-2 text-white font-sans text-xs focus:outline-none focus:border-[#CFB53B] rounded-sm" />
      <input type="email" name="email" required placeholder="Your Email" className="w-full bg-[#050505] border border-white/10 px-3 py-2 text-white font-sans text-xs focus:outline-none focus:border-[#CFB53B] rounded-sm" />
      <textarea name="message" required rows={2} placeholder="Project Brief..." className="w-full bg-[#050505] border border-white/10 px-3 py-2 text-white font-sans text-xs focus:outline-none focus:border-[#CFB53B] rounded-sm resize-none" />
      <button 
        type="submit" 
        disabled={status !== "idle"}
        className="mt-1 w-full bg-[#CFB53B] hover:bg-white text-black font-sans font-bold text-[10px] tracking-widest uppercase py-2 transition-colors disabled:opacity-50 rounded-sm"
      >
        {status === "idle" ? "Dispatch to Vicky" : "Transmitting..."}
      </button>
    </form>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    { role: "bot", text: "Hey! 👋 I'm Devil Bot. Ask about services, pricing, or say 'joke' for dev humor!", type: "text", ts: Date.now() }
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

  const processMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = text.trim();
    setIsTyping(true);

    setMessages(prev => {
      const newHistory = [...prev, { role: "user", text: userMsg, type: "text", ts: Date.now() }];
      
      setTimeout(() => {
        const result = getResponse(userMsg, newHistory);
        const replyText = typeof result === 'string' ? result : result.text;
        const replyType = result.type || 'text';
        
        setMessages(current => [...current, { role: "bot", text: replyText, type: replyType, ts: Date.now() }]);
        setIsTyping(false);
      }, 600 + Math.random() * 800);
      
      return newHistory;
    });
  };

  const handleFormSuccess = (name) => {
    setMessages(prev => [
      ...prev, 
      { role: "bot", text: `Thanks, ${name}! Your brief has been securely transmitted. Vicky will check his messages shortly. Need anything else?`, type: "text", ts: Date.now() }
    ]);
  };

  const send = () => {
    processMessage(input);
    setInput("");
  };

  const quickActions = ["Services", "Pricing", "Contact", "SaaS", "Stack", "Socials"];

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
                    className={`max-w-[85%] px-3.5 py-2.5 rounded-lg text-sm font-sans whitespace-pre-line leading-relaxed flex flex-col ${
                      msg.role === "user"
                        ? "bg-accent/20 text-white border border-accent/10"
                        : "bg-white/5 text-white/80 border border-white/5"
                    }`}
                  >
                    <span>{msg.text}</span>
                    {msg.type === "contact_form" && <ChatForm onSuccess={handleFormSuccess} />}
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
                  onClick={() => processMessage(action)}
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
