"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import Link from "next/link";

const allProjects = [
  {
    slug: "lenscript",
    title: "LenScript",
    description: "Smart Glasses for Real-Time Transcription and Emotional Awareness",
    year: "2024",
    tags: ["Swift", "iOS", "CoreML", "AR Glasses", "Accessibility"],
    award: "Senior Design Capstone Project",
  },
  {
    slug: "nexus",
    title: "Nexus AI Hub",
    description: "Enterprise AI Platform for HR, Finance & Sales Intelligence",
    year: "2025-Present",
    tags: ["Next.js", "AI/ML", "Enterprise", "Full-Stack"],
    award: "Built with Windsurf + Claude Sonnet",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    description: "Modern portfolio website showcasing projects and technical expertise",
    year: "2025",
    tags: ["Next.js", "React", "Framer Motion", "TailwindCSS"],
    award: "Built with Windsurf + Claude Sonnet 3.5",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-primary" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
      {/* Hero Section with Grid Background */}
      <section className="relative pt-32 pb-8 px-6 mb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl text-primary mb-4 tracking-tight" style={{ fontFamily: "var(--font-bungee), Impact, sans-serif", fontWeight: 400 }}>
              MY WORK SO FAR
            </h1>
            <p className="text-accent/50 text-sm tracking-[0.2em] font-sans uppercase">
              Featured Projects
            </p>
          </motion.div>
        </div>

        {/* Grid background - brighter */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(#CFFFE2 1px, transparent 1px), linear-gradient(90deg, #CFFFE2 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }} />
        </div>
      </section>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {allProjects.map((project, index) => (
            <Link key={project.slug} href={`/projects/${project.slug}`}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group border border-primary/20 rounded-2xl p-8 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 h-full flex flex-col"
              >
                {/* Award Badge */}
                {project.award && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 border border-primary/30 rounded-full text-xs text-primary/70 mb-4 self-start">
                    <Award className="w-3 h-3" />
                    {project.award}
                  </div>
                )}

                {/* Title and Year */}
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-3xl text-primary group-hover:text-secondary transition-colors" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {project.title}
                  </h3>
                  <span className="text-accent/40 text-sm font-sans ml-4">
                    {project.year}
                  </span>
                </div>

                {/* Description */}
                <p className="text-accent/70 text-base mb-6 flex-1" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs font-sans px-3 py-1 bg-primary/5 border border-primary/20 text-primary/70 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-primary group-hover:text-secondary transition-colors text-sm font-sans">
                  <span>View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
