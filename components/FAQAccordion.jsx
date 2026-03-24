"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How exactly does automation increase profit for my business?",
    answer: "By replacing manual data-entry, scraping, and lead generation tasks with Python and Next.js bots, you instantly regain 40+ hours a week. This allows you to allocate human capital to high-leverage activities like closing deals and strategy, directly scaling your bottom line. We sandbox test every bot before deployment so it never breaks your existing workflow.",
  },
  {
    question: "Will your custom solutions be mobile-responsive and accessible?",
    answer: "Every web ecosystem I construct is built with a strict 'Mobile-First' architecture using modern standards like Tailwind CSS and Next.js. The interfaces scale mathematically, passing 100/100 Accessibility checks while preserving the high-end animated aesthetics on iOS and Android.",
  },
  {
    question: "I don't know anything about tech. Will I be able to manage this?",
    answer: "Absolutely. I follow a strict 'No-Code Handoff' policy. For complex backend automations, I build sleek, intuitive front-end dashboards (like the ones in my Project Inventory) so you simply click a button to execute 10,000 lines of code. You never need to touch the terminal.",
  },
  {
    question: "Do you offer post-delivery support or long-term engagement?",
    answer: "Yes. I offer targeted SLA (Service Level Agreement) packages. Whether you need a 30-day monitoring period for a new automation MVP, or an enterprise retainer where I actively manage and upgrade your AI ecosystem, I ensure 99.9% uptime.",
  },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-24 md:py-36 relative z-20 bg-[#0A0A0A]">
      <div className="max-w-4xl mx-auto px-6 md:px-16">
        
        {/* Header */}
        <div className="mb-16 md:mb-20 text-center">
          <p className="text-[#CFB53B] font-sans text-xs tracking-[0.3em] font-medium uppercase mb-4">Risk Reversal</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white drop-shadow-[0_4px_12px_rgba(207,181,59,0.1)]">
            Eradicating <span className="text-white/30">Doubt.</span>
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                key={index}
                className={`border rounded-sm transition-colors duration-500 overflow-hidden ${isOpen ? "border-[#CFB53B]/50 bg-[#CFB53B]/[0.02]" : "border-white/10 bg-white/[0.01] hover:border-white/30"}`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-8 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-heading text-lg md:text-xl font-medium transition-colors duration-300 ${isOpen ? "text-[#CFB53B]" : "text-white"}`}>
                    {faq.question}
                  </h3>
                  <div className={`p-2 rounded-full border transition-all duration-300 ${isOpen ? "border-[#CFB53B] bg-[#CFB53B]/10 rotate-180" : "border-white/10 rotate-0"}`}>
                    {isOpen ? <Minus className="w-4 h-4 text-[#CFB53B]" /> : <Plus className="w-4 h-4 text-white/50" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 pb-8 text-white/70 font-sans font-light leading-relaxed md:text-lg">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
