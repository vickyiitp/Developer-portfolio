"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "AI-Powered Websites",
    tagline: "Not just pages — revenue engines.",
    price: "₹15k+",
    package: "Growth Pack",
    description: "Custom-architected digital experiences that work 24/7 as your best salesperson. Engineered for 0-latency and maximum conversion.",
    features: ["Custom Design System", "SEO 95+ Score", "Analytics Integration", "CMS Setup"],
    tech: "Next.js · React · Vercel",
  },
  {
    num: "02",
    title: "Agentic AI Systems",
    tagline: "Autonomous intelligence that never sleeps.",
    price: "₹50k+",
    package: "Enterprise AI",
    description: "Architecting AI agents that operate independently — making decisions and scaling operations without oversight. Multi-agent orchestration.",
    features: ["Memory Management", "Tool Use Integration", "Real-time Monitoring", "Auto-Scaling"],
    tech: "Python · LangChain · CrewAI",
  },
  {
    num: "03",
    title: "Business Automation",
    tagline: "Delete the busywork. Automate the boring.",
    price: "₹25k+",
    package: "Workflow Suite",
    description: "Eliminate manual processes. From CRM pipelines to invoice generation, I build systems that run your business while you sleep.",
    features: ["500+ App Integrations", "Error Handling Suite", "Audit Logs", "Scheduled Triggers"],
    tech: "Node.js · n8n · Zapier",
  },
  {
    num: "04",
    title: "AI Chatbots & Voice",
    tagline: "Your smartest employee. 24/7/365.",
    price: "₹10k+",
    package: "Support Plus",
    description: "Custom AI bots that understand context and actually solve problems. Available on WhatsApp, Telegram, or Web.",
    features: ["NLP Integration", "Handoff to Human", "Customer Insights", "Multi-Language"],
    tech: "GPT-4 · Twilio · Whisper",
  },
  {
    num: "05",
    title: "E-Commerce Solutions",
    tagline: "Stores that sell while you sleep.",
    price: "₹20k+",
    package: "Commerce Pro",
    description: "Full-stack platforms built for scale. From landing pages to marketplaces, engineering experiences that maximize order value.",
    features: ["Secure Payments", "Inventory Sync", "Order Tracking", "Repeat Buy Logic"],
    tech: "Next.js · Shopify · Stripe",
  },
  {
    num: "06",
    title: "SaaS Products",
    tagline: "From MVP to millions. Scalable.",
    price: "₹75k+",
    package: "SaaS Blueprint",
    description: "Complete SaaS products — authentication, billing, dashboards, multi-tenancy. Software that grows with your user base.",
    features: ["Multi-Tenancy", "Subscription Billing", "RBAC Security", "API & Webhooks"],
    tech: "Next.js · Prisma · Redis",
  },
  {
    num: "07",
    title: "Landing Pages",
    tagline: "One page. Infinite conversions.",
    price: "₹8k+",
    package: "Lite Pack",
    description: "Premium single-page experiences designed for maximum impact. From product launches to lead magnets, engineered for speed and conversion.",
    features: ["Fast Loading (99+)", "Mobile-First Design", "Contact Logic", "Analytics Ready"],
    tech: "Next.js · Tailwind · Framer",
  },
  {
    num: "08",
    title: "Full Stack Apps",
    tagline: "End-to-end digital excellence.",
    price: "₹50k+",
    package: "Custom Scale",
    description: "Complex web applications built from the ground up. Complete with robust backends, secure databases, and intuitive user dashboards.",
    features: ["Secure Auth", "Real-time Data", "Custom Backend", "Infrastructure Setup"],
    tech: "Node.js · Postgres · Docker",
  },
  {
    num: "09",
    title: "Tools & Utilities",
    tagline: "Custom-built for your efficiency.",
    price: "₹5k+",
    package: "Micro-Utility",
    description: "Bespoke scripts and micro-SaaS tools to solve specific business problems. Automate internal tasks with lightweight, high-performance code.",
    features: ["Workflow Scripts", "Data Scrapers", "Automated Alerts", "API Middleware"],
    tech: "Python · Node.js · Google Cloud",
  }
];

export default function ServicesShowcase() {
  return (
    <section id="services" className="w-full relative z-20 overflow-hidden bg-[#0A0A0A]">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-accent/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Section Header */}
      <div className="pt-20 pb-12 px-6 md:px-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-accent text-[10px] tracking-[0.5em] uppercase font-sans mb-4">Engineering Excellence</p>
          <h2 className="font-heading text-[clamp(2rem,6vw,4.5rem)] font-bold text-white leading-tight tracking-tight">
            Premium <span className="text-accent italic">Services.</span>
          </h2>
          <p className="text-white/40 font-sans text-xs md:text-sm mt-4 max-w-md mx-auto">
            High-performance digital assets and automation systems built for the elite. 
            Scaling from ₹5,000 to ₹75,000+.
          </p>
        </motion.div>
      </div>

      {/* Bento Grid — Services */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(207,181,59,0.4)" }}
              className="group relative bg-[#111] border border-white/5 p-8 rounded-sm hover:bg-[#151515] transition-all duration-500 flex flex-col justify-between overflow-hidden"
            >
              {/* Background Accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="text-accent font-mono text-[10px] tracking-widest bg-accent/10 px-2 py-1 rounded-sm uppercase">
                    {service.package}
                  </span>
                  <span className="text-white font-heading text-xl font-bold">{service.price}</span>
                </div>

                <h3 className="font-heading text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="font-sans text-white/40 text-[11px] uppercase tracking-widest mb-6">
                  {service.tagline}
                </p>
                <p className="font-sans text-white/70 text-sm leading-relaxed mb-8 font-light">
                  {service.description}
                </p>

                <div className="space-y-3 mb-8">
                  {service.features.map((f, k) => (
                    <div key={k} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent/60" />
                      <span className="text-[11px] font-sans text-white/50">{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 flex items-center justify-between">
                <span className="text-[10px] font-mono text-white/30 tracking-widest uppercase">
                  {service.tech}
                </span>
                <a 
                  href="/contact" 
                  className="text-[10px] font-sans font-bold text-accent hover:text-white transition-colors flex items-center gap-1 group/btn"
                >
                  HIRE <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center"
        >
          <p className="text-white/40 text-xs font-sans mb-6 italic">Custom solutions available for specific business architectures.</p>
          <a href="/contact" className="inline-block px-10 py-4 bg-accent text-black font-sans font-medium tracking-widest text-xs uppercase hover:bg-white transition-all duration-300 transform hover:-translate-y-1">
            Build Your Own Package →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
