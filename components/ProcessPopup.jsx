"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, MonitorPlay, FileSignature, Wallet, Cpu, Rocket, ArrowRight, ShieldCheck, Activity } from "lucide-react";

export default function ProcessPopup() {
  const [isOpen, setIsOpen] = useState(false);

  // Listen for custom event to open popup from other components (like Contact form)
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("openProcessPopup", handleOpen);
    return () => window.removeEventListener("openProcessPopup", handleOpen);
  }, []);

  const steps = [
    {
      icon: <MessageSquare size={20} />,
      title: "1. Client Communication",
      desc: "Deep dive into your problem statement and requirements to understand exactly what you need.",
      color: "text-blue-400",
      bg: "bg-blue-400/10",
    },
    {
      icon: <MonitorPlay size={20} />,
      title: "2. Demo & Trust Building",
      desc: "I provide an initial demo or MVP concept completely free to earn your trust and visualize the solution.",
      color: "text-purple-400",
      bg: "bg-purple-400/10",
    },
    {
      icon: <FileSignature size={20} />,
      title: "3. Solutions & Adjustments",
      desc: "We finalize the features, tech stack, and budget. Transparent discussion on timelines and project scope.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: <Wallet size={20} />,
      title: "4. Terms & 50% Advance",
      desc: "We kick off the project formally with a 50% upfront payment. The remaining is milestone-based.",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      icon: <Cpu size={20} />,
      title: "5. AI-Powered Delivery",
      desc: "Writing code efficiently using AI tools to accelerate delivery without compromising standard architectures.",
      color: "text-rose-400",
      bg: "bg-rose-400/10",
    },
    {
      icon: <Rocket size={20} />,
      title: "6. Handover & Clearances",
      desc: "Project testing, remaining payment clearance, and seamless deployment. We build in trust.",
      color: "text-cyan-400",
      bg: "bg-cyan-400/10",
    },
  ];

  return (
    <>
      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[90%] md:w-[450px] bg-zinc-950 border-r border-zinc-800 z-50 overflow-y-auto max-h-screen shadow-2xl"
            >
              <div className="p-6 sticky top-0 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800 flex justify-between items-center z-10">
                <div>
                  <h2 className="text-xl font-bold text-white flex items-center gap-2">
                    <ShieldCheck className="text-emerald-400" size={24} />
                    Project Lifecycle
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">100% Transparency. Built on Trust.</p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-zinc-800 rounded-full text-zinc-400 hover:text-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 space-y-8 relative">
                {/* Visual Graph Area */}
                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex flex-col gap-3 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full"></div>
                  <h3 className="text-sm font-semibold text-zinc-300 flex items-center gap-2">
                    <Activity size={16} className="text-blue-400" /> AI Delivery Speed vs Traditional
                  </h3>
                  <div className="flex items-end gap-2 h-24 mt-2">
                    {/* Fake Bar Chart */}
                    <div className="w-1/2 flex flex-col items-center gap-2">
                      <div className="w-8 h-8 bg-zinc-800 rounded-t-sm" />
                      <span className="text-[10px] text-zinc-500">Traditional</span>
                    </div>
                    <div className="w-1/2 flex flex-col items-center gap-2">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: "4rem" }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="w-8 bg-emerald-500/80 rounded-t-sm shadow-[0_0_15px_rgba(16,185,129,0.4)]" 
                      />
                      <span className="text-[10px] text-emerald-400 font-medium">My AI Workflow</span>
                    </div>
                  </div>
                </div>

                {/* Steps Timeline */}
                <div className="relative">
                  {/* Vertical Line */}
                  <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-blue-500/30 via-emerald-500/30 to-cyan-500/30" />

                  <div className="space-y-6">
                    {steps.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * idx }}
                        className="flex gap-4 relative z-10"
                      >
                        <div className={`shrink-0 w-12 h-12 rounded-full flex items-center justify-center border border-zinc-800 ${step.bg} ${step.color} shadow-lg shadow-black/50`}>
                          {step.icon}
                        </div>
                        <div className="pt-1">
                          <h4 className="text-base font-bold text-zinc-200">{step.title}</h4>
                          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center mt-8">
                  <h4 className="text-white font-semibold mb-2">Freelancer Code of Ethics</h4>
                  <p className="text-xs text-zinc-400 px-2 leading-relaxed">
                    By strictly adhering to a 50% upfront, milestone-based payment structure, we ensure mutual commitment. Unforeseen delays are communicated proactively, and IP is handed over upon final clearance.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
