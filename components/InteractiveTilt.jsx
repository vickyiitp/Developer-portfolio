"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function InteractiveTilt({ children, className = "" }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);
  const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], ["-20px", "20px"]);
  const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], ["-20px", "20px"]);

  const handlePointerMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    let clientX, clientY;
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const mouseX = clientX - rect.left;
    const mouseY = clientY - rect.top;

    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handlePointerLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onPointerMove={handlePointerMove}
      onTouchMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onTouchEnd={handlePointerLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group ${className}`}
    >
      <motion.div style={{ x: shadowX, y: shadowY }} className="absolute inset-0 bg-[#CFB53B]/20 blur-[50px] -z-10 transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
      <div style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }} className="w-full h-full">
         {children}
      </div>
    </motion.div>
  );
}
