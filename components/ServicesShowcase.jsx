"use client";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Conversion Landing Pages",
    tagline: "One page. Infinite revenue.",
    price: "₹10k+",
    package: "Lite Pack",
    description: "Premium single-page experiences designed for maximum impact. From product launches to lead magnets, engineered for speed and 95+ conversion scores.",
    features: ["Fast Loading (99+)", "Mobile-First Design", "A/B Testing Setup", "Analytics Ready"],
    tech: "Next.js · Tailwind · Framer",
  },
  {
    num: "02",
    title: "Corporate Web Platforms",
    tagline: "Scalable architecture for leaders.",
    price: "₹35k+",
    package: "Growth Suite",
    description: "High-performance business websites with integrated CMS systems. Built to grow with your organization while maintaining zero-latency performance.",
    features: ["Headless CMS Sync", "Multi-Page SEO", "Custom Admin Panel", "Team Training"],
    tech: "Next.js · Sanity · Vercel",
  },
  {
    num: "03",
    title: "Agentic AI Orchestration",
    tagline: "Autonomous systems that work for you.",
    price: "₹75k+",
    package: "Intelligence+",
    description: "Architecting multi-agent AI systems that operate independently. From custom RAG pipelines to autonomous decision-making agents.",
    features: ["Memory Management", "LLM Tool Use", "Custom RAG Sync", "Auto-Scaling"],
    tech: "Python · LangChain · OpenAI",
  },
  {
    num: "04",
    title: "Full-Stack SaaS/MVP",
    tagline: "From concept to production. Fast.",
    price: "₹90k+",
    package: "Platform Pro",
    description: "End-to-end SaaS products built for scale. Complete with authentication, subscription billing, and real-time user dashboards.",
    features: ["Secure Auth System", "Stripe Integration", "Postgres Migration", "Docker Ready"],
    tech: "Node.js · Prisma · Docker",
  },
  {
    num: "05",
    title: "Headless E-Commerce",
    tagline: "Stores that sell at light speed.",
    price: "₹50k+",
    package: "Commerce Elite",
    description: "Next-gen commerce engines built on headless architectures. Engineered to handle thousands of SKUs with sub-second page loads.",
    features: ["Inventory Logic", "Global CDN Sync", "Order Automation", "Secure Payments"],
    tech: "Next.js · Shopify · Stripe",
  },
  {
    num: "06",
    title: "Workflow Automation",
    tagline: "Delete the busywork. Automate everything.",
    price: "₹25k+",
    package: "Auto-Pilot",
    description: "Eliminate manual business processes. Building bridges between your apps to create seamless, hands-off operation cycles.",
    features: ["API Integration", "n8n/Zapier Flow", "Error Monitoring", "Daily Audit Logs"],
    tech: "Node.js · Python · n8n",
  },
  {
    num: "07",
    title: "Performance & SEO Growth",
    tagline: "Rank higher. Load faster. Sell more.",
    price: "₹15k+",
    package: "Scale Max",
    description: "Technical audit and optimization of existing digital assets. Fixing speed bottlenecks and perfecting on-page technical SEO for 2026.",
    features: ["Core Web Vitals", "Semantic HTML Fix", "Image Optimization", "Ranking Roadmap"],
    tech: "Lighthouse · Search Console",
  },
  {
    num: "08",
    title: "Micro-Tools & Utilities",
    tagline: "Custom tools for specific problems.",
    price: "₹8k+",
    package: "Utility Pack",
    description: "Bespoke scripts, browser extensions, or lightweight tools tailored to solve one specific pain point in your workflow.",
    features: ["Browser Extension", "Data Scraping", "Custom CLI Tools", "Task Automation"],
    tech: "JS · Python · Chrome API",
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
            Scaling from ₹8,000 to ₹90,000+.
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
                  href={`/contact?service=${encodeURIComponent(service.title)}`} 
                  className="text-[10px] font-sans font-bold text-accent hover:text-white transition-colors flex items-center gap-1 group/btn"
                >
                  DEPLOY <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
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
