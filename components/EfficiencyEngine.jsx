"use client";

import { useState } from "react";

const industries = [
  {
    id: "logistics",
    name: "Logistics",
    services: [
      "Automated Tracking API",
      "Inventory Forecasting AI",
      "Fleet Management Dashboard",
    ],
  },
  {
    id: "ecommerce",
    name: "E-Commerce",
    services: [
      "Abandoned Cart Recovery Bots",
      "Dynamic Pricing Algorithms",
      "Headless CMS Integration",
    ],
  },
  {
    id: "restaurants",
    name: "Restaurants",
    services: [
      "No-Commission Ordering System",
      "Automated Shift Scheduling",
      "Inventory Waste Predicter",
    ],
  },
  {
    id: "creators",
    name: "Content Creators",
    services: [
      "Automated Video Clipping",
      "Cross-Platform Sync Bots",
      "Sponsorship Outreach CRM",
    ],
  },
  {
    id: "realestate",
    name: "Real Estate",
    services: [
      "Virtual Tour Generators",
      "Automated Lead Scoring",
      "Property Alert Webhooks",
    ],
  },
  {
    id: "healthcare",
    name: "Healthcare",
    services: [
      "HIPAA-Compliant Patient Portals",
      "Automated Appointment Reminders",
      "Medical Billing Scrapers",
    ],
  },
];

const workflowSteps = [
  {
    num: "01",
    title: "Audit.",
    description: "Identifying manual bottlenecks in your current pipeline.",
  },
  {
    num: "02",
    title: "Architect.",
    description: "Engineering custom Unity/API automation logic at IIT Patna standards.",
  },
  {
    num: "03",
    title: "Automate.",
    description: "Deploying zero-latency tools that turn 10-hour tasks into 2-second scripts.",
  },
];

export default function EfficiencyEngine() {
  const [activeIndustry, setActiveIndustry] = useState(industries[0]);

  return (
    <section className="relative w-full py-24 md:py-36 overflow-hidden">
      {/* 3D Blueprint/Grid Background */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: "perspective(1000px) rotateX(60deg) scale(2)",
          transformOrigin: "top center",
        }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        <div className="mb-16 md:mb-24 text-center md:text-left relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            How We <span className="text-accent italic">Engineer</span> Profit.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Solution Hub (Industry Selector) */}
          <div className="flex flex-col space-y-8">
            <h3 className="font-sans text-[#CFB53B] uppercase tracking-[0.2em] text-sm hidden md:block">
              Solution Hub
            </h3>
            
            {/* The Horizontal Scroller */}
            <div className="flex overflow-x-auto pb-4 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide space-x-3 snap-x">
              {industries.map((ind) => {
                const isActive = activeIndustry.id === ind.id;
                return (
                  <button
                    key={ind.id}
                    onClick={() => setActiveIndustry(ind)}
                    className={`
                      snap-start shrink-0 px-6 py-2.5 rounded-full font-sans text-sm transition-all duration-300
                      backdrop-blur-md border outline-none
                      ${isActive 
                        ? "bg-[#CFB53B]/10 border-[#CFB53B] text-white" 
                        : "bg-white/5 border-white/10 text-white/50 hover:bg-white/10 hover:text-white/80"}
                    `}
                  >
                    {ind.name}
                  </button>
                );
              })}
            </div>

            {/* Service Card (SEO Keyword Injection) */}
            <div className="w-full min-h-[180px] mt-4 p-8 rounded-sm bg-gradient-to-br from-white/5 to-transparent border border-white/5 backdrop-blur-sm relative overflow-hidden group transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#CFB53B]/10 rounded-full blur-3xl -mr-10 -mt-10" />
              
              <h4 className="font-sans font-light text-white text-xl mb-6 flex items-center">
                <span className="w-8 h-[1px] bg-[#CFB53B] mr-4 inline-block" />
                {activeIndustry.name} Solutions
              </h4>
              
              <ul className="space-y-4">
                {activeIndustry.services.map((service, i) => (
                  <li key={i} className="font-sans font-light text-white/80 flex items-start text-sm md:text-base">
                    <span className="text-[#CFB53B] mr-3 mt-0.5 opacity-70">▹</span>
                    {service}
                  </li>
                ))}
              </ul>
              
              {/* Hidden SEO Tags Area (Readable by bots, practically invisible to users) */}
              <div className="sr-only">
                SEO Tags: Automation for {activeIndustry.name}, {activeIndustry.services.join(", ")}
              </div>
            </div>
          </div>

          {/* Right Column: The Rule Book (Workflow) */}
          <div className="flex flex-col space-y-12 md:space-y-16 mt-8 lg:mt-0">
            {workflowSteps.map((step) => (
              <div key={step.num} className="flex items-start group">
                {/* Number Indicator */}
                <div className="font-heading font-black text-4xl md:text-5xl lg:text-6xl text-white/10 mt-1 mr-6 md:mr-10 group-hover:text-[#CFB53B]/30 transition-colors duration-500">
                  {step.num}
                </div>
                
                {/* Step Content */}
                <div className="flex flex-col pt-2">
                  <h4 className="font-sans font-medium text-white text-xl md:text-2xl mb-2 tracking-wide">
                    {step.title}
                  </h4>
                  <p className="font-sans font-light text-white/60 text-base md:text-lg leading-relaxed md:max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
