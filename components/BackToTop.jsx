"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, rotate: 180 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          exit={{ opacity: 0, y: 20, rotate: 180 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 right-6 md:right-12 w-12 h-12 bg-background border border-accent/30 flex items-center justify-center rounded-sm text-accent hover:bg-accent hover:text-black transition-all duration-500 z-50"
          aria-label="Back to Top"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
