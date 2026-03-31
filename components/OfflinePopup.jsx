"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WifiOff, Phone, Mail, Terminal, RefreshCw } from "lucide-react";

export default function OfflinePopup() {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    // Check initial state
    if (!navigator.onLine) {
      setIsOffline(true);
    }

    const handleOffline = () => setIsOffline(true);
    const handleOnline = () => {
      setIsOffline(false);
      // Auto-reload the page when connection is restored to fetch fresh assets
      window.location.reload();
    };

    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);


  return (
    <AnimatePresence>
      {isOffline && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/80 backdrop-blur-md px-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="w-full max-w-md bg-[#0A0A0A] border border-red-500/30 rounded-lg p-8 relative overflow-hidden shadow-[0_0_50px_rgba(239,68,68,0.15)]"
          >
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" 
                 style={{ backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(239,68,68,0.4) 0%, transparent 60%)' }} />

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-red-500/10 flex items-center justify-center mb-6">
                <WifiOff className="text-red-500 w-8 h-8 animate-pulse" />
              </div>

              <h2 className="font-heading text-2xl font-bold text-white mb-2">
                Connection Lost.
              </h2>
              <p className="font-sans text-white/50 text-sm mb-8">
                Your network dropped, but Devil Labs never sleeps. If you&apos;re looking to upgrade your business, you can still reach out to us while offline.  

              {/* Mini Services List */}
              <div className="w-full bg-white/[0.03] border border-white/5 rounded-md p-4 mb-6 text-left">
                <div className="flex items-center gap-2 mb-3">
                  <Terminal className="text-[#CFB53B] w-4 h-4" />
                  <span className="font-sans text-xs tracking-widest text-[#CFB53B] uppercase">What We Build</span>
                </div>
                <ul className="space-y-2 font-sans font-light text-sm text-white/70">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span><strong>AI Websites:</strong> High-converting platforms</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span><strong>Automation:</strong> CRM, Invoicing, Workflows</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span><strong>AI Agents:</strong> Voice bots & WhatsApp chatbots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-0.5">•</span>
                    <span><strong>SaaS MVP:</strong> Full-stack product development</span>
                  </li>
                </ul>
              </div>

              {/* Direct Contact */}
              <div className="w-full flex flex-col gap-3 mb-8">
                <a href="tel:+918102099678" className="flex items-center justify-center gap-3 w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-sm">
                  <Phone className="w-4 h-4 text-white/70" />
                  <span className="font-sans text-sm text-white">+91 8102099678</span>
                </a>
                <a href="mailto:vickyykumar14@gmail.com" className="flex items-center justify-center gap-3 w-full py-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-sm">
                  <Mail className="w-4 h-4 text-white/70" />
                  <span className="font-sans text-sm text-white">vickyykumar14@gmail.com</span>
                </a>
              </div>

              {/* Reload Button */}
              <button
                onClick={() => window.location.reload()}
                className="flex items-center gap-2 font-sans text-xs tracking-widest text-white/40 uppercase hover:text-white transition-colors group"
              >
                <RefreshCw className="w-3 h-3 group-hover:rotate-180 transition-transform duration-500" />
                Retry Connection
              </button>

            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
