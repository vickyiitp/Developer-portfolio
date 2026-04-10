"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text, Line, Sphere, Float, Environment, PerspectiveCamera, Html } from "@react-three/drei";
import * as THREE from "three";
import { motion } from "framer-motion";

function Node({ position, color, label, delay = 0 }) {
  const mesh = useRef();
  
  useFrame((state, delta) => {
    if (!mesh.current) return;
    const t = performance.now() / 1000;
    mesh.current.position.y = position[1] + Math.sin(t * 2 + delay) * 0.2;
  });

  return (
    <group position={position} ref={mesh}>
      <Sphere args={[0.4, 32, 32]}>
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} opacity={0.9} transparent />
      </Sphere>
      <Html center position={[0, -0.8, 0]} className="pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-sm border border-white/10 text-white font-mono text-[10px] tracking-widest uppercase whitespace-nowrap shadow-[0_0_15px_rgba(207,181,59,0.15)]">
          {label}
        </div>
      </Html>
    </group>
  );
}

function DataParticles({ start, end, color }) {
  const group = useRef();
  const count = 3;
  
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      offset: i / count,
      speed: 0.5 + (0.1 * i) // deterministic speeds based on index
    }));
  }, [count]);

  useFrame((state, delta) => {
    const t = performance.now() / 1000;
    if (group.current) {
      group.current.children.forEach((child, i) => {
        if (i < particles.length) {
            const p = particles[i];
            const progress = ((t * p.speed + p.offset) % 1).toFixed(3);
            const vecStart = new THREE.Vector3(...start);
            const vecEnd = new THREE.Vector3(...end);
            
            // Recompute position each frame without maintaining local object state
            // since we don't save the progress directly
            child.position.lerpVectors(vecStart, vecEnd, parseFloat(progress));
        }
      });
    }
  });

  return (
    <group ref={group}>
      {particles.map((_, i) => (
        <mesh key={i}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshBasicMaterial color={color} />
        </mesh>
      ))}
    </group>
  );
}

function Scene() {
  const nodes = [
    { pos: [-3, 0.5, 0], color: "#ffffff", label: "Input / Trigger" },
    { pos: [0, -0.5, 0], color: "#CFB53B", label: "AI Automation Core" },
    { pos: [3, 0.5, 0], color: "#06b6d4", label: "Output / Revenue" }
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[0, 5, 0]} intensity={1} color="#CFB53B" />
      <Environment files="/potsdamer_platz_1k.hdr" />

      <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
        <group rotation={[0.2, -0.1, 0]}>
          {/* Glowing Connecting Lines */}
          <Line points={[nodes[0].pos, nodes[1].pos]} color="white" opacity={0.2} transparent lineWidth={2} />
          <Line points={[nodes[1].pos, nodes[2].pos]} color="#CFB53B" opacity={0.3} transparent lineWidth={2} />
          
          {/* Animated Data Particles along the lines */}
          <DataParticles start={nodes[0].pos} end={nodes[1].pos} color="#ffffff" />
          <DataParticles start={nodes[1].pos} end={nodes[2].pos} color="#CFB53B" />

          {/* Core Nodes */}
          {nodes.map((n, i) => (
            <Node key={i} position={n.pos} color={n.color} label={n.label} delay={i * 1.5} />
          ))}
        </group>
      </Float>

      {/* Very constrained interactive orbit controls for premium feel */}
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        maxPolarAngle={Math.PI / 1.8} 
        minPolarAngle={Math.PI / 2.2} 
        maxAzimuthAngle={0.2} 
        minAzimuthAngle={-0.2} 
      />
    </>
  );
}

export default function Workflow3D() {
  return (
    <section className="w-full py-24 md:py-32 relative bg-[#060606] overflow-hidden border-t border-white/5">
      
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#CFB53B]/5 blur-[120px] pointer-events-none z-0 rounded-full" />

      <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10 flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mb-12"
        >
          <p className="text-[#CFB53B] font-mono text-[10px] tracking-[0.3em] uppercase mb-4">The Architecture</p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] font-bold text-white drop-shadow-[0_4px_12px_rgba(207,181,59,0.15)] leading-[1.1] mb-6">
            From Manual Labor to <br/>
            <span className="text-[#CFB53B] italic">Automated Pipeline.</span>
          </h2>
          <p className="text-white/50 font-sans text-sm md:text-base font-light leading-relaxed">
            Interact with the digital node system below. This is how we map raw inputs into AI models to generate instantaneous, profitable outputs for your business—zero human intervention required.
          </p>
        </motion.div>

        {/* 3D Canvas Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="w-full h-[400px] md:h-[500px] border border-white/10 bg-black/40 rounded-[2rem] overflow-hidden shadow-2xl relative"
        >
          {/* Subtle grid texture overlay */}
          <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          
          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 7], fov: 40 }} className="z-10 outline-none">
            <Scene />
          </Canvas>

          {/* Interactive Hint */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/5 backdrop-blur-md px-4 py-2 border border-white/10 rounded-full flex items-center gap-2 pointer-events-none z-20">
            <div className="w-1.5 h-1.5 bg-[#CFB53B] rounded-full animate-pulse px-0" />
            <span className="text-white/60 font-mono text-[9px] tracking-widest uppercase">Click & Drag to Rotate</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}