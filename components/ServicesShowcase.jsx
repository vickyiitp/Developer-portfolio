"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const services = [
  {
    num: "01",
    title: "AI-Powered Websites",
    tagline: "Not just pages — revenue engines.",
    description: "I build websites that think. Every pixel is engineered for conversion, every interaction tracked for optimization. These aren't templates — they're custom-architected digital experiences that work 24/7 as your best salesperson.",
    examples: [
      { name: "Luxury Jewelry Storefront", detail: "AR try-on integration, 3D product viewer, AI-powered recommendations. Built with Next.js + Three.js. Deployed on Vercel with edge caching. Result: 340% increase in average session time." },
      { name: "Restaurant Chain Platform", detail: "Real-time ordering, kitchen management dashboard, QR menu system. Built with React + Node.js + Socket.io. Deployed on AWS. Result: ₹12L/month saved in manual order processing." }
    ],
    features: ["Custom Design System", "SEO Optimized (Core Web Vitals 95+)", "Mobile-First Responsive", "Analytics Dashboard", "CMS Integration", "A/B Testing Ready"],
    tech: "Next.js · React · TypeScript · Tailwind · Vercel",
    deliverables: "Source code · Documentation · Deployment · 30-day support · Performance monitoring"
  },
  {
    num: "02",
    title: "Agentic AI Systems",
    tagline: "Autonomous intelligence that never sleeps.",
    description: "I architect AI agents that operate independently — making decisions, completing tasks, and scaling your operations without human oversight. These agents learn, adapt, and execute complex multi-step workflows across your entire business.",
    examples: [
      { name: "Sales Pipeline Agent", detail: "Autonomous lead qualification, email personalization, CRM updates, follow-up scheduling. Uses GPT-4 + LangChain. Integrates with HubSpot/Salesforce. Result: 5x more qualified leads with zero manual work." },
      { name: "Content Creation Agent", detail: "Multi-agent system: Research Agent → Writing Agent → SEO Agent → Publishing Agent. Produces 50 optimized blog posts/week. Uses Claude + custom fine-tuned models. Result: 800% organic traffic increase in 90 days." }
    ],
    features: ["Multi-Agent Orchestration", "Memory & Context Management", "Tool Use & API Integration", "Human-in-the-Loop Options", "Real-time Monitoring Dashboard", "Auto-Scaling Architecture"],
    tech: "Python · LangChain · CrewAI · GPT-4 · Claude · FastAPI",
    deliverables: "Agent codebase · API endpoints · Monitoring dashboard · Training docs · Scaling playbook"
  },
  {
    num: "03",
    title: "Business Automation",
    tagline: "Delete the busywork. Automate the boring.",
    description: "I find every manual process in your business and eliminate it. From CRM pipelines to invoice generation, from email sequences to inventory management — I build systems that run your business while you sleep.",
    examples: [
      { name: "E-Commerce Automation Suite", detail: "Order processing → Inventory sync → Shipping label → Customer notification → Review request. Zero human touch from cart to delivery. Built with Node.js + webhooks. Result: 95% reduction in order processing time." },
      { name: "HR Onboarding Automation", detail: "Offer letter generation → Document collection → Background check trigger → Slack channel creation → Equipment ordering → Training schedule. Built with Python + Zapier alternative. Result: 3 weeks → 3 hours onboarding time." }
    ],
    features: ["Workflow Builder", "Custom Integrations (500+ apps)", "Error Handling & Retry Logic", "Audit Logs", "Role-Based Access", "Scheduled & Event-Driven Triggers"],
    tech: "Node.js · Python · n8n · Custom APIs · Webhooks · Cron",
    deliverables: "Automation scripts · Integration setup · Testing suite · Runbook · SLA monitoring"
  },
  {
    num: "04",
    title: "AI Chatbots & Voice Agents",
    tagline: "Your smartest employee. Available 24/7/365.",
    description: "Custom AI chatbots that understand context, remember conversations, and actually solve problems. Available on WhatsApp, Telegram, your website, or as voice agents on phone. These aren't scripted bots — they think.",
    examples: [
      { name: "WhatsApp Sales Bot", detail: "Multilingual product recommendations, order placement, payment processing via WhatsApp. Handles 10,000+ conversations/day. Built with GPT + Twilio. Result: ₹45L/month in automated sales." },
      { name: "Voice AI Receptionist", detail: "Handles incoming calls, books appointments, answers FAQs, escalates to humans when needed. Built with Porcupine + GPT + TTS. Result: 70% reduction in missed calls, 24/7 availability." }
    ],
    features: ["Natural Language Understanding", "Multi-Platform Deployment", "Conversation Memory", "Handoff to Humans", "Analytics & Insights", "Custom Training Data"],
    tech: "GPT-4 · Whisper · ElevenLabs · Twilio · Socket.io · Python",
    deliverables: "Bot deployment · Training pipeline · Analytics dashboard · Conversation logs · Escalation system"
  },
  {
    num: "05",
    title: "E-Commerce Solutions",
    tagline: "Stores that sell while you sleep.",
    description: "Full-stack e-commerce platforms built for scale. From single-product landing pages to multi-vendor marketplaces, I engineer shopping experiences that maximize average order value and minimize cart abandonment.",
    examples: [
      { name: "Luxury Watch Marketplace", detail: "Multi-vendor platform with authentication certificates, 360° product views, escrow payments. Built with Next.js + Stripe + PostgreSQL. Deployed on Vercel. Result: ₹2Cr GMV in first 6 months." },
      { name: "D2C Fashion Brand", detail: "Personalized shopping, AI size recommendations, Instagram Shop sync, automated returns. Built with Shopify Hydrogen + custom APIs. Result: 28% reduction in returns, 45% repeat purchase rate." }
    ],
    features: ["Payment Gateway Integration", "Inventory Management", "Order Tracking", "Customer Analytics", "Multi-Currency Support", "SEO-Optimized Product Pages"],
    tech: "Next.js · Shopify · Stripe · PostgreSQL · Redis · Vercel",
    deliverables: "Store deployment · Admin dashboard · Payment setup · SEO config · Marketing automation"
  },
  {
    num: "06",
    title: "SaaS Products",
    tagline: "From MVP to millions. Engineered for scale.",
    description: "I build complete SaaS products — authentication, billing, dashboards, APIs, multi-tenancy, and analytics. Whether you're validating an idea or scaling to enterprise, I architect software that grows with you.",
    examples: [
      { name: "Project Management SaaS", detail: "Real-time collaboration, Kanban boards, time tracking, invoicing, client portal. Built with Next.js + Prisma + PostgreSQL. Multi-tenant architecture. Result: 0 to 500 paying users in 4 months." },
      { name: "AI Content Platform", detail: "AI writing assistant + image generation + SEO optimizer + publishing scheduler. Built with React + Python + GPT API. Subscription billing via Stripe. Result: $15K MRR within 6 months." }
    ],
    features: ["Multi-Tenant Architecture", "Subscription Billing", "Role-Based Access Control", "API & Webhooks", "Analytics Dashboard", "Automated Testing Suite"],
    tech: "Next.js · Python · PostgreSQL · Prisma · Stripe · Redis · Docker",
    deliverables: "Full codebase · CI/CD pipeline · Documentation · Deployment · Billing setup · Launch strategy"
  }
];

const pricing = [
  { tier: "Starter", price: "₹5,000", desc: "Landing page / Portfolio / Single-page site", timeline: "3-5 days" },
  { tier: "Growth", price: "₹15,000", desc: "Full website + CRM + Automation", timeline: "1-2 weeks" },
  { tier: "Enterprise", price: "₹50,000+", desc: "AI Systems + SaaS + Multi-platform", timeline: "3-6 weeks" },
];

export default function ServicesShowcase() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={containerRef} id="services" className="w-full relative z-20 overflow-hidden bg-background">
      
      {/* Section Header */}
      <div className="py-20 md:py-32 px-6 md:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-sans mb-4">What I Engineer</p>
          <h2 className="font-heading text-[clamp(2.5rem,6vw,5.5rem)] font-bold text-white leading-[0.95] tracking-tight">
            Services That <br/>
            <span className="text-accent italic">Print Money.</span>
          </h2>
          <div className="w-24 h-px bg-accent/50 mt-8" />
        </motion.div>
      </div>

      {/* Services — Editorial Layout */}
      {services.map((service, i) => (
        <motion.div
          key={service.num}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="relative border-t border-white/5"
        >
          {/* Background Number */}
          <motion.div
            style={{ y: backgroundY }}
            className="absolute -right-4 md:right-8 top-8 text-[8rem] md:text-[15rem] font-heading font-black text-white/[0.02] select-none pointer-events-none leading-none"
          >
            {service.num}
          </motion.div>

          <div className="max-w-7xl mx-auto px-6 md:px-16 py-16 md:py-24">
            {/* Title Row */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
              <div>
                <span className="text-accent font-mono text-sm">{service.num}</span>
                <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mt-2">{service.title}</h3>
                <p className="font-sans text-accent/80 text-sm md:text-base italic mt-2">{service.tagline}</p>
              </div>
              <div className="text-[10px] font-mono text-white/50 tracking-widest uppercase text-right hidden md:block">
                {service.tech}
              </div>
            </div>

            {/* Description */}
            <p className="font-sans text-white/70 text-base md:text-lg leading-relaxed max-w-3xl mb-12 font-light">
              {service.description}
            </p>

            {/* Examples — Horizontal Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {service.examples.map((ex, j) => (
                <motion.div
                  key={j}
                  whileHover={{ y: -4, borderColor: "rgba(207,181,59,0.3)" }}
                  className="p-6 md:p-8 border border-white/5 bg-white/[0.02] rounded-sm transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                    <span className="font-sans text-xs text-accent tracking-widest uppercase">Case Study {j + 1}</span>
                  </div>
                  <h4 className="font-heading text-xl text-white font-semibold mb-3">{ex.name}</h4>
                  <p className="font-sans text-white/60 text-sm leading-relaxed">{ex.detail}</p>
                </motion.div>
              ))}
            </div>

            {/* Features Strip */}
            <div className="flex flex-wrap gap-3 mb-8">
              {service.features.map((f, k) => (
                <span key={k} className="text-[11px] font-sans text-white/50 px-3 py-1.5 border border-white/10 rounded-full hover:border-accent/30 hover:text-accent/80 transition-colors cursor-default">
                  {f}
                </span>
              ))}
            </div>

            {/* Deliverables */}
            <div className="text-[11px] font-mono text-white/50 tracking-wider">
              DELIVERABLES: {service.deliverables}
            </div>

            {/* Mobile Tech */}
            <div className="md:hidden text-[10px] font-mono text-white/50 tracking-widest uppercase mt-4">
              {service.tech}
            </div>
          </div>
        </motion.div>
      ))}

      {/* Pricing Section */}
      <div className="border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-sans mb-4">Investment</p>
            <h3 className="font-heading text-3xl md:text-5xl font-bold text-white mb-12">
              Transparent <span className="text-accent italic">Pricing.</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricing.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, borderColor: "rgba(207,181,59,0.4)" }}
                className={`p-8 border rounded-sm transition-all duration-300 ${
                  i === 2 ? "border-accent/30 bg-accent/5" : "border-white/10 bg-white/[0.02]"
                }`}
              >
                <span className="text-accent text-[10px] tracking-[0.3em] uppercase font-sans">{p.tier}</span>
                <div className="font-heading text-4xl md:text-5xl font-bold text-white mt-3 mb-2">{p.price}</div>
                <p className="font-sans text-white/50 text-sm mb-6">{p.desc}</p>
                <div className="flex items-center gap-2 text-[10px] font-mono text-white/30 tracking-wider">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                  TIMELINE: {p.timeline}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="#contact" className="inline-block px-10 py-4 bg-accent text-black font-sans font-medium tracking-widest text-sm uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
              Start a Project →
            </a>
            <p className="font-sans text-white/50 text-xs mt-4">UPI · Bank Transfer · International Wire · Crypto accepted</p>
          </div>
        </div>
      </div>
    </section>
  );
}
