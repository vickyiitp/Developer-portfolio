"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshTransmissionMaterial, ContactShadows, Environment, Stars, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';

function InteractiveScene({ isMobile }) {
  const coreRef = useRef();
  const lightRef = useRef();
  const groupRef = useRef();
  
  // Track pointer globally so it works on mobile scroll/touches outside canvas
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      let clientX, clientY;
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else {
        clientX = e.clientX;
        clientY = e.clientY;
      }
      
      pointer.current.x = (clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  useFrame((state, delta) => {
    if (!groupRef.current || !lightRef.current || !coreRef.current) return;

    const t = performance.now() / 1000;

    // Use global pointer instead of R3F state.pointer
    const mx = pointer.current.x;
    const my = pointer.current.y;

    // 2. Light following cursor
    lightRef.current.position.x = THREE.MathUtils.lerp(lightRef.current.position.x, mx * 5, 0.1);
    lightRef.current.position.y = THREE.MathUtils.lerp(lightRef.current.position.y, my * 5, 0.1);

    // 3. Core persistent rotation
    coreRef.current.rotation.y = Math.sin(t / 4) / 2;
    coreRef.current.rotation.z = t / 3;
    coreRef.current.position.y = Math.sin(t / 1.5) / 10;
  });

  return (
    <group ref={groupRef}>
      {/* Light following cursor */}
      <spotLight ref={lightRef} position={[0, 0, 5]} angle={0.3} penumbra={1} intensity={2} color="#cfb53b" castShadow />

      {/* Floating Core */}
      <Float speed={3} rotationIntensity={1.5} floatIntensity={1.5}>
        {/* Outer Glass Shell */}
        <mesh ref={coreRef} castShadow={!isMobile} receiveShadow={!isMobile}>
          <icosahedronGeometry args={[1.6, 0]} />
          <MeshTransmissionMaterial 
            backside={!isMobile}
            samples={isMobile ? 1 : 2} 
            resolution={isMobile ? 128 : 512}
            thickness={0.8} 
            roughness={0.1} 
            transmission={isMobile ? 0.9 : 0.99} 
            ior={1.2} 
            chromaticAberration={isMobile ? 0.1 : 0.3} 
            anisotropy={0.2}
            color="#cfb53b"
          />
        </mesh>
        
        {/* Inner Dark Core */}
        <mesh>
          <octahedronGeometry args={[1.1, 0]} />
          <meshStandardMaterial color="#050505" wireframe={true} emissive="#cfb53b" emissiveIntensity={0.2} opacity={0.6} transparent />
        </mesh>
      </Float>

      {/* Orbiting particles representing data or platforms */}
      <OrbitingIcons />
    </group>
  );
}

function OrbitingIcons() {
  const group = useRef();
  
  useFrame((state, delta) => {
    if (!group.current) return;
    const t = performance.now() / 1000;
    group.current.rotation.y = t * 0.15;
    group.current.rotation.z = Math.sin(t * 0.2) * 0.1;
  });

  return (
    <group ref={group}>
      {[...Array(4)].map((_, i) => (
        <mesh 
          key={i} 
          position={[
            Math.cos((i * Math.PI) / 2) * 3.5, 
            Math.sin((i * Math.PI) / 2) * 1.5, 
            Math.sin((i * Math.PI) / 2) * 3.5
          ]}
        >
          <sphereGeometry args={[0.08, 16, 16]} />
          <meshBasicMaterial color={i % 2 === 0 ? "#cfb53b" : "#ffffff"} />
        </mesh>
      ))}
    </group>
  );
}

export default function Hero3D() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
      <Canvas
        shadows={!isMobile ? { type: THREE.PCFShadowMap } : false}
        dpr={isMobile ? [1, 1] : [1, 1.5]}
        camera={{ position: [0, 0, 6], fov: 45 }}
        gl={{ alpha: true, antialias: !isMobile, powerPreference: "default" }}
      >
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />

        {/* Deep Space Background for High End luxury feel */}
        {!isMobile && <Stars radius={100} depth={50} count={2500} factor={6} saturation={0} fade speed={1.5} />}

        <ambientLight intensity={0.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffffff" />
        <directionalLight position={[0, 5, 0]} intensity={0.5} color="#ffffff" />

        {/* Interactive Interactive Scene matching mouse */}
        <InteractiveScene isMobile={isMobile} />

        {/* Soft shadow directly below the core */}
        {!isMobile && <ContactShadows resolution={256} frames={1} position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#cfb53b" />}

      </Canvas>
    </div>
  );
}