"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [cursorText, setCursorText] = useState("");

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 400 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 400 });

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setTimeout(() => setIsDesktop(!isTouchDevice), 0);

    if (isTouchDevice) return;

    // Hide default cursor
    document.body.style.cursor = "none";

    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const down = () => setIsClicking(true);
    const up = () => setIsClicking(false);

    const handleHoverIn = (e) => {
      const el = e.target.closest("a, button, [role='button'], input, textarea, select");
      if (el) {
        setIsHovering(true);
        const label = el.getAttribute("data-cursor") || "";
        setCursorText(label);
      }
    };

    const handleHoverOut = (e) => {
      const el = e.target.closest("a, button, [role='button'], input, textarea, select");
      if (el) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
    };
  }, [mouseX, mouseY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Main Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : isClicking ? 6 : 10,
            height: isHovering ? 48 : isClicking ? 6 : 10,
            borderRadius: "50%",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="bg-white flex items-center justify-center"
        >
          {cursorText && isHovering && (
            <span className="text-black text-[8px] font-mono font-bold tracking-wider uppercase">{cursorText}</span>
          )}
        </motion.div>
      </motion.div>

      {/* Trailing Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 64 : 32,
            height: isHovering ? 64 : 32,
            opacity: isClicking ? 0.8 : 0.3,
            borderColor: isHovering ? "rgba(207,181,59,0.5)" : "rgba(255,255,255,0.2)",
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="rounded-full border"
          style={{ borderWidth: "1px" }}
        />
      </motion.div>
    </>
  );
}
