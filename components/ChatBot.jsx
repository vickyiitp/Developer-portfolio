"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LeadForm({ collectedData, onSuccess }) {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const EMAIL = "themvaplatform@gmail.com";
    const PHONE = "918102099678";

    // Prepare Professional Dispatch Details
    const detailedMessage = `
--- 🚀 NEW DEAL DISPATCH ---
*Intent:* ${collectedData.intent}
*Industry:* ${collectedData.industry}
*Challenges:* ${collectedData.problem}
----------------------------
    `.trim();

    try {
      await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          message: detailedMessage,
          _subject: `🤖 Lead Secured: ${name} (${collectedData.industry})`,
          _template: "table",
        }),
      });
    } catch(err) {
      // ignore
    }

    const waText = encodeURIComponent(`🤖 *Executive Deal Dispatch*\n\n👤 *Client:* ${name}\n📧 *Email:* ${email}\n📱 *Phone:* ${phone}\n\n🏢 *Industry:* ${collectedData.industry}\n🎯 *Objective:* ${collectedData.intent}\n⚠️ *Challenges:* ${collectedData.problem}`);
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
      <div className="mt-3 p-3 bg-[#CFB53B]/10 border border-[#CFB53B]/30 rounded-md text-[#CFB53B] font-sans text-xs text-center font-medium">
        ✓ Dispatch confirmed. Vicky will reach out to you shortly.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-2.5 relative z-10 w-full bg-[#050505] p-3 rounded-md border border-white/5 shadow-inner">
      <p className="text-white/70 text-[10px] uppercase tracking-widest font-mono mb-1">Secure Your Consultation</p>
      
      <input type="text" name="name" required placeholder="Complete Name" className="w-full bg-[#0A0A0A] border border-white/10 px-3 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/30 rounded-sm transition-all" />
      
      <input type="email" name="email" required placeholder="Professional Email" className="w-full bg-[#0A0A0A] border border-white/10 px-3 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/30 rounded-sm transition-all" />
      
      <input type="tel" name="phone" required placeholder="WhatsApp / Phone Number" className="w-full bg-[#0A0A0A] border border-white/10 px-3 py-2.5 text-white font-sans text-xs focus:outline-none focus:border-[#CFB53B] focus:ring-1 focus:ring-[#CFB53B]/30 rounded-sm transition-all" />
      
      <button 
        type="submit" 
        disabled={status !== "idle"}
        className="mt-2 w-full bg-[#CFB53B] hover:bg-[#E3C952] text-black font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase py-3 transition-colors disabled:opacity-50 rounded-sm shadow-[0_0_15px_rgba(207,181,59,0.2)] hover:shadow-[0_0_25px_rgba(207,181,59,0.4)] relative"
      >
        {status === "idle" ? "Formalize Inquiry" : "Transmitting Data..."}
      </button>
    </form>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const endRef = useRef(null);
  const inputRef = useRef(null);

  // States for Conversational AI flow
  const [step, setStep] = useState(0);
  const [userData, setUserData] = useState({ intent: "", industry: "", problem: "" });
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Welcome to Devil Labs operations. I am the Executive Assistant for Vicky Kumar.\n\nTo ensure we provide the exact architectural guidance, what are you searching for on this website? Do you need high-performance system websites, operational automation tools, or custom SaaS integrations?" }
  ]);
  const [input, setInput] = useState("");

  const appendBotMessage = (text, isForm = false, delayMs = 600) => {
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: "bot", text, isForm }]);
      setIsTyping(false);
    }, delayMs + 300); // Fixed delay to resolve React purity issues
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const processMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = text.trim();
    
    setMessages(prev => [...prev, { role: "user", text: userMsg }]);
    setInput("");

    // --- DECISION TREE ---
    if (step === 0) {
      setUserData(prev => ({ ...prev, intent: userMsg }));
      setStep(1);
      appendBotMessage("Excellent choice. We engineer state-of-the-art infrastructure for those exact operational needs.\n\nTo better tailor our solutions to your specific landscape, may I know which industry or field your business primarily operates in?");
    } 
    else if (step === 1) {
      setUserData(prev => ({ ...prev, industry: userMsg }));
      setStep(2);
      
      const isYesOrAutomation = /(yes|automation|system|website|tool|tech|software|saas)/i.test(userMsg + " " + userData.intent);
      
      let replyText = "";
      if (isYesOrAutomation) {
        replyText = `You are absolutely at the right place for the ${userMsg} sector. We specialize in deploying highly scalable solutions that guarantee ROI.`;
      } else {
        replyText = `Understood. Adapting tech to the ${userMsg} sector is our specialty.`;
      }
      
      replyText += `\n\nCould you share more details about what you currently do and what primary problems or bottlenecks you are facing in your workflow?`;
      appendBotMessage(replyText, false, 800);
    } 
    else if (step === 2) {
      setUserData(prev => ({ ...prev, problem: userMsg }));
      setStep(3);
      
      // Trust Building Pitch + Form
      const trustPitch = "Thank you for sharing that crucial context. Vicky Kumar holds a prestigious background as an IIT Patna developer, known rigorously for being exceptionally valuable and trustworthy across high-stakes corporate developments.\n\nWe resolve these precise bottlenecks with pure engineering diligence.\n\nTo secure an exclusive consultation and formalize this deal, please submit your direct contact information below. I will dispatch your entire brief to Vicky's personal terminal and WhatsApp immediately.";
      
      appendBotMessage(trustPitch, true, 1500); // longer delay for longer text
    } 
    else if (step >= 3) {
      // Just acknowledge polite responses post-form
      appendBotMessage("I have recorded that. Please finalize your details in the contact form to proceed, or reach out directly at themvaplatform@gmail.com.");
    }
  };

  const handleFormSuccess = (name) => {
    appendBotMessage(`Thank you, ${name}. Your operational brief and contact credentials have been successfully transmitted. Vicky will initiate contact with you shortly to proceed with the engagement.`, false, 400);
    setStep(4);
  };

  // Determine Quick Actions based on step
  let quickActions = [];
  if (step === 0) {
    quickActions = ["System Websites", "Automation Tools", "Custom SaaS", "Not Sure Yet"];
  } else if (step === 1) {
    quickActions = ["E-Commerce", "Logistics", "Healthcare", "Tech Startup", "Service Agency"];
  } else if (step === 2) {
    quickActions = ["Slow Operations", "High Costs", "Need Digital Presence", "Outdated Software"];
  }

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 left-6 md:left-12 w-14 h-14 rounded-full bg-[#CFB53B] text-black flex items-center justify-center z-[100] shadow-[0_0_20px_rgba(207,181,59,0.3)] hover:shadow-[0_0_30px_rgba(207,181,59,0.5)] transition-shadow"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Toggle Chat Bot"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} className="text-xl font-bold font-sans">✕</motion.span>
          ) : (
            <motion.span key="open" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="text-2xl">💬</motion.span>
          )}
        </AnimatePresence>
      </motion.button>

      {!isOpen && (
        <motion.div
          className="fixed bottom-[52px] left-[56px] md:left-[62px] w-3 h-3 rounded-full bg-red-500 z-[101]"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 left-6 md:left-12 w-[calc(100vw-48px)] sm:w-[380px] h-[550px] bg-[#0A0A0A] border border-white/10 rounded-lg z-[100] flex flex-col overflow-hidden shadow-2xl shadow-black/80"
          >
            {/* Header */}
            <div className="px-4 py-3 border-b border-white/10 flex items-center gap-3 bg-white/[0.02]">
              <div className="relative">
                <div className="w-8 h-8 rounded-full bg-[#CFB53B]/20 flex items-center justify-center text-sm border border-[#CFB53B]/30">🤖</div>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-[#0A0A0A]" />
              </div>
              <div className="flex-1">
                <p className="text-white text-sm font-medium font-sans">Devil Executive Bot</p>
                <p className="text-[#CFB53B] text-[10px] font-mono tracking-wider">SECURE TRANSMISSION</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/30 hover:text-white transition-colors text-xs font-mono">ESC</button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
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
                        ? "bg-[#CFB53B]/20 text-white border border-[#CFB53B]/20"
                        : "bg-white/5 text-white/90 border border-white/10"
                    }`}
                  >
                    <span>{msg.text}</span>
                    {msg.isForm && <LeadForm collectedData={userData} onSuccess={handleFormSuccess} />}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/5 px-4 py-3 rounded-lg flex gap-1">
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0 }} className="w-1.5 h-1.5 rounded-full bg-[#CFB53B]" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.2 }} className="w-1.5 h-1.5 rounded-full bg-[#CFB53B]" />
                    <motion.div animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1, repeat: Infinity, delay: 0.4 }} className="w-1.5 h-1.5 rounded-full bg-[#CFB53B]" />
                  </div>
                </div>
              )}
              <div ref={endRef} />
            </div>

            {/* Quick Actions / Suggestions */}
            {quickActions.length > 0 && !isTyping && (
              <div className="px-4 pb-2 flex gap-2 flex-wrap">
                {quickActions.map(action => (
                  <button
                    key={action}
                    onClick={() => processMessage(action)}
                    className="text-[10px] font-mono px-3 py-1.5 border border-[#CFB53B]/20 text-[#CFB53B]/70 hover:bg-[#CFB53B]/10 rounded-sm hover:border-[#CFB53B]/60 hover:text-[#CFB53B] transition-colors"
                  >
                    {action}
                  </button>
                ))}
              </div>
            )}

            {/* Input Form */}
            <form
              onSubmit={(e) => { e.preventDefault(); processMessage(input); }}
              className="px-4 py-3 border-t border-white/10 flex gap-2 bg-[#050505]"
            >
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={isTyping}
                placeholder={step >= 3 ? "Wait for dispatch..." : "Type your response here..."}
                className="flex-1 bg-transparent text-white text-sm font-sans placeholder:text-white/30 outline-none disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="px-3 py-1.5 bg-[#CFB53B] text-black text-xs font-semibold rounded-sm hover:bg-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed uppercase tracking-wider"
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
