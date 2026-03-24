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
    "Hello! I can assist you with web development queries, AI automation details, pricing, or just dropping some dev humor. What do you need?",
    "Greetings, human. 🤖 I am Devil Bot. Ready to deploy some knowledge about Vicky's coding skills. What do you want to know?"
  ],
  services: [
    "Vicky specializes in 6 core areas:\n\n1. 🌐 AI Websites (Next.js/React)\n2. 🤖 Agentic AI Systems\n3. ⚡ Business Automation (CRM/Invoicing)\n4. 💬 Custom Chatbots & Voice AI\n5. 🛒 E-Commerce Platforms\n6. 📱 SaaS MVPs\n\nAre you looking to build something specific, or do you want to talk pricing?",
    "We build production-ready digital tools. Whether you need a sleek landing page, a complex SaaS MVP, or an AI agent to handle your customer support, Vicky can code it. What industry are you in?",
    "Services include full-stack web development, frontend magic with Framer Motion, and hardcore backend automation with Python/Node.js. Want to see some examples or check rates?"
  ],
  pricing: [
    "💰 Pricing is structured for the Indian market but scales globally:\n\n• Starter (₹5K): Landing pages & portfolios (3-5 days)\n• Growth (₹15K): Full websites with CRM & automation workflows (1-2 weeks)\n• Enterprise (₹50K+): Custom SaaS, Agentic AI, multi-platform builds (3-6 weeks)\n\nWhich tier fits your current project?",
    "Vicky's rates are highly competitive. A simple, high-performing site starts at ₹5,000. Full business automation and CRM setups run around ₹15,000. For complex AI systems, we scope it out starting at ₹50,000. Want me to connect you with Vicky for a custom quote?",
    "It depends on the scope! From ₹5k for a lightning-fast landing page to ₹50k+ for an enterprise AI system. If you describe your project, I can give you a better estimate. Or type 'contact' to talk to the human."
  ],
  contact: [
    "Ready to build? 🚀\n\n📧 Email: vickyykumar14@gmail.com\n📱 WhatsApp: +91 8102099678\n🌐 Book a call via the contact form at the bottom of the page.\n\nVicky usually responds exactly when you need him to.",
    "You can reach the human (Vicky) directly at:\nEmail: vickyykumar14@gmail.com\nPhone/WhatsApp: +91 8102099678\n\nI recommend WhatsApp—he practically lives in the terminal and WhatsApp.",
    "Just scroll down to the contact form! Or if you're in a hurry:\n📞 +91 8102099678\n✉️ vickyykumar14@gmail.com"
  ],
  ai: [
    "Ah, AI. My favorite subject. 🧠\n\nVicky builds autonomous agents (like me, but tailored to your business), WhatsApp GPT bots, voice receptionists, and LLM integrations. We use LangChain, OpenAI, Claude, and local models. What kind of AI do you need?",
    "We don't just use AI; we build it into your workflows. Imagine a bot that books appointments, qualifies sales leads, and updates your CRM while you sleep. That's what Vicky codes. Want to know the price for that?",
    "AI development includes RAG applications, custom knowledge base chatbots, and automated content pipelines. We basically clone your best employee into code."
  ],
  website: [
    "Vicky's websites aren't just templates. They are custom-coded Next.js/React applications with 3D effects, Framer Motion animations, and 95+ Core Web Vitals scores. Starting at ₹5K. Want to start a project?",
    "If you want a site that loads instantly and makes your competitors cry, you're in the right place. We use Tailwind CSS, Next.js, and extreme SEO optimization. Type 'pricing' to see what it costs."
  ],
  automation: [
    "Automation means doing more with less code. ⚡\n\nVicky automates email drip campaigns, auto-generates invoices via Google Sheets, syncs bookings, and tracks competitor pricing. It's like magic, but it's just Python and webhooks.",
    "Tired of manual data entry? Vicky can build systems that connect your lead forms directly to your CRM, send auto-WhatsApp follow-ups, and alert you on Slack. Best ₹15K you'll ever spend."
  ],
  who_is_vicky: [
    "Vicky Kumar is a developer, prompt engineer, and the founder of Devil Labs. He studies Computer Science at IIT Patna (Class of '27). He has over 20 production apps on his GitHub and essentially breathes code.",
    "Vicky? He's the guy who built me. Developer by day, automation architect by night. IIT Patna student. He focuses on high-performance web apps and AI systems.",
    "Vicky is an IIT Patna CSE student who decided normal websites were boring. So he started Devil Labs to build AI-driven, highly animated, ultra-fast web tools."
  ],
  acknowledgement: [
    "Got it. I've noted that down.",
    "Makes sense.",
    "Interesting.",
    "I understand."
  ],
  fallback: [
    "I'm an advanced AI, but I missed that. Try asking about 'services', 'pricing', 'contact', or say 'tell me a joke'.",
    "My simulated neural nets didn't catch that context. Did you want to know about web development, AI automation, or Vicky's rates?",
    "Hmm 🤔... you can either ask me about Devil Labs' services, pricing, or I can tell you a developer joke.",
    "I'm continuously learning! While I process that, would you like to hear about our AI services or maybe a quick coding joke?"
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
    return "Awesome. I've captured your contact info safely 🔒. Vicky will reach out to you within 24 hours to discuss this further. Anything else you'd like to ask in the meantime?";
  }
  
  // Intent detection via regex matching
  const intents = {
    greeting: /\b(hi|hey|hello|sup|yo|hola|greetings)\b/i,
    services: /(service|what.*do|what.*build|offer|help with|can you make)/i,
    pricing: /(price|cost|rate|much|budget|₹|rs|rupee|charge|fee|quote)/i,
    contact: /(contact|email|phone|whatsapp|reach|call|hire|mail|touch)/i,
    joke: /(joke|funny|laugh|lol|haha|humor|meme|entertain)/i,
    ai: /\b(ai|artificial intelligence|agent|chatbot|gpt|llm|machine learning|ml)\b/i,
    website: /(web|site|landing|page|react|next|frontend)/i,
    automation: /(automat|workflow|zapier|n8n|crm|system|process)/i,
    who: /(who|vicky|about|iit|patna|devil|founder|creator)/i,
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
    if (matchedIntent === 'joke') {
      return devJokes[Math.floor(Math.random() * devJokes.length)];
    }
    
    // For recognized intents, get a random variant to feel more 'alive'
    const responses = knowledgeBase[matchedIntent === 'who' ? 'who_is_vicky' : matchedIntent];
    let reply = responses[Math.floor(Math.random() * responses.length)];
    
    // Add lead gen push if they ask about pricing/services after 1 message
    if ((matchedIntent === 'pricing' || matchedIntent === 'services' || matchedIntent === 'website' || matchedIntent === 'ai') && chatCount > 1 && Math.random() > 0.5) {
      reply += "\n\nBy the way, if you have a specific project in mind, drop your email or number right here in the chat and I'll have Vicky contact you to scope it out. 👇";
    }
    
    return reply;
  }
  
  // Contextual fallback: if they just say short agreement words
  if (lower.length < 5 || lower.match(/^(yes|no|yeah|nope|ok|okay|cool|nice|wow|sure)$/)) {
    return knowledgeBase.acknowledgement[Math.floor(Math.random() * knowledgeBase.acknowledgement.length)] + 
      " Want to talk about pricing, or looking for specific services?";
  }

  // Pure fallback
  return knowledgeBase.fallback[Math.floor(Math.random() * knowledgeBase.fallback.length)];
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
    setInput("");
    setIsTyping(true);

    setMessages(prev => {
      const newHistory = [...prev, { role: "user", text: userMsg, ts: Date.now() }];
      
      setTimeout(() => {
        const reply = getResponse(userMsg, newHistory);
        setMessages(current => [...current, { role: "bot", text: reply, ts: Date.now() }]);
        setIsTyping(false);
      }, 600 + Math.random() * 800);
      
      return newHistory;
    });
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
                    const userMsg = action;
                    setIsTyping(true);
                    setMessages(prev => {
                      const newHistory = [...prev, { role: "user", text: userMsg, ts: Date.now() }];
                      setTimeout(() => {
                        const reply = getResponse(userMsg, newHistory);
                        setMessages(current => [...current, { role: "bot", text: reply, ts: Date.now() }]);
                        setIsTyping(false);
                      }, 600 + Math.random() * 800);
                      return newHistory;
                    });
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
