"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";

const featuredProjects = [
  {
    id: 1,
    title: "Red Sea",
    description: "AI-powered evacuation route predictor",
    tags: ["AI/ML", "Next.js", "Python"],
    gradient: "from-red-900/40 to-orange-900/40",
    icon: "📍",
    award: "🏆 Winner at cmd-f Hackathon, 2024",
    github: "https://github.com/simplyarfan",
  },
  {
    id: 2,
    title: "Cognify",
    description: "Cognitive platform for neurodivergent developers",
    tags: ["React", "AI", "Accessibility"],
    gradient: "from-purple-900/40 to-pink-900/40",
    icon: "🧠",
    award: "🎓 UC Berkeley AI Hackathon, 2024",
    github: "https://github.com/simplyarfan",
  },
  {
    id: 3,
    title: "Urbani",
    description: "B2B AI Startup for Urban Regeneration",
    tags: ["B2B", "AI", "Urban Tech"],
    gradient: "from-cyan-900/40 to-blue-900/40",
    icon: "🏙️",
    award: "ProductHacks Hackathon, 2024",
    github: "https://github.com/simplyarfan",
  },
  {
    id: 4,
    title: "Holospace",
    description: "Social Platform for 3D Content Creation",
    tags: ["3D", "Social", "WebGL"],
    gradient: "from-indigo-900/40 to-purple-900/40",
    icon: "🎨",
    github: "https://github.com/simplyarfan",
  },
];

export default function Home() {
  const vantaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let vantaEffect: any;
    
    // Load Three.js and Vanta scripts
    const loadScripts = async () => {
      // Load Three.js
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      document.head.appendChild(threeScript);

      await new Promise((resolve) => {
        threeScript.onload = resolve;
      });

      // Load Vanta Globe
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.globe.min.js';
      document.head.appendChild(vantaScript);

      await new Promise((resolve) => {
        vantaScript.onload = resolve;
      });

      // Initialize Vanta
      if (vantaRef.current && (window as any).VANTA) {
        vantaEffect = (window as any).VANTA.GLOBE({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 400.00,
          minWidth: 400.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0x5fffef,
          backgroundColor: 0x0,
        });
      }
    };

    loadScripts();

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-primary">
      {/* Hero Section - Smaller */}
      <section className="relative pt-32 pb-8 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="px-4 py-1.5 border border-primary/30 rounded-full text-xs tracking-widest text-primary/70 pulse-glow font-mono">
                @simplyarfan
              </div>
            </motion.div>

            {/* Name - Smaller */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-primary"
              style={{ 
                fontSize: "clamp(2.5rem, 8vw, 6rem)", 
                lineHeight: 1.1, 
                letterSpacing: "0.05em",
                fontFamily: "var(--font-bungee), Impact, sans-serif"
              }}
            >
              SYED ARFAN
            </motion.h1>

            {/* Tagline with rotating words */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-accent/60 text-sm tracking-[0.2em] font-sans uppercase flex items-center justify-center gap-2"
            >
              <span className="rotating-words">
                <span className="rotating-word">DEVELOPER</span>
                <span className="rotating-word">YOUTUBER</span>
                <span className="rotating-word">BUILDER</span>
                <span className="rotating-word">DEVELOPER</span>
              </span>
              <span>×</span>
              <span>DESIGNER</span>
              <span>×</span>
              <span>CREATOR</span>
            </motion.p>
          </motion.div>
        </div>

        {/* Grid background - subtle */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#CFFFE2 1px, transparent 1px), linear-gradient(90deg, #CFFFE2 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>
      </section>

      {/* About Statement */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl md:text-2xl lg:text-3xl leading-relaxed text-accent/90" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              I build <span className="text-primary">digital experiences</span> that are <span className="text-primary">minimal</span>, <span className="text-primary">functional</span>, and <span className="text-primary">memorable</span>.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vanta Globe Section */}
      <section className="relative overflow-hidden">
        {/* Vanta Globe Container - Full Width */}
        <div 
          ref={vantaRef}
          className="w-full h-[600px]"
        />
      </section>

    </div>
  );
}
