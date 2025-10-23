"use client";

import { motion } from "framer-motion";
import { Github, Calendar, Award, Brain, Target, Building2, Code2, BarChart3, Globe, FlaskConical, Rocket, Trophy, CheckCircle2, Mic, Headphones, Radio, Shield, Zap, Users, Image as ImageIcon, ArrowRight, ChevronDown, Maximize2, X, Sparkles } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = [
  {
    slug: "lenscript",
    title: "LenScript",
    description: "Smart Glasses for Real-Time Transcription and Emotional Awareness",
    year: "2024",
    tags: ["Swift", "iOS", "CoreML", "AVFoundation", "NLTagger", "BLE", "AR Glasses"],
    hasImages: true,
    content: `Senior Design Capstone Project at College of Engineering – Department of Computer Science and Engineering. LenScript is an assistive smart glasses system designed to provide real-time speech-to-text transcription combined with sentiment detection and speaker identification.

Developed as a capstone project to enhance accessibility for the hearing-impaired by displaying live captions and emotional context through AR glasses.

## Project Overview

LenScript bridges the communication gap for individuals with hearing impairments by providing real-time transcription with emotional context directly on AR glasses. The system processes audio entirely on-device using Apple&apos;s frameworks, ensuring privacy and minimal latency.

Key Innovation: Unlike existing solutions, LenScript combines speech recognition with sentiment analysis and speaker identification, providing not just what is being said, but how it&apos;s being said and who is saying it.

## Key Features

FEATURE_CARDS

## System Architecture

The system follows a sophisticated processing pipeline:

Audio Input → Voice Detection → Noise Cancellation → Speech-to-Text → Sentiment Analysis → Speaker Identification → AR Display

All processing happens on-device using:
- Swift for iOS development
- AVFoundation for audio processing
- CoreML for machine learning models
- Natural Language framework for sentiment analysis
- Bluetooth Low Energy for AR glasses communication

## Technical Implementation

TECH_GRID

## Performance Metrics

TABLE_METRICS

## Impact & Applications

IMPACT_SECTIONS

## Research & Development

CHALLENGES_LIST

### Alternative Solutions Evaluated
TABLE_ALTERNATIVES

LenScript addresses gaps in existing solutions by combining all features in a privacy-first, offline system.

## Future Enhancements

1. Multilingual Support: Add real-time translation capabilities
2. Haptic Feedback: Vibration alerts for emotional cues
3. Extended Emotions: Beyond positive/negative/neutral classification
4. Personalization: Adaptive thresholds based on user preferences
5. Context Awareness: Environmental sound recognition

RECOGNITION_SECTION`,
    award: "Senior Design Capstone Project",
    role: "Lead Developer & Product Ideator",
  },
  {
    slug: "nexus",
    title: "Nexus AI Hub",
    description: "Enterprise AI Platform for HR, Finance & Sales Intelligence",
    year: "2025-Present",
    tags: ["Next.js", "React", "Node.js", "AI/ML", "Enterprise", "Full-Stack"],
    github: "https://github.com/simplyarfan/simpleAI",
    content: `An in-house enterprise AI hub currently in development, designed to revolutionize how businesses leverage artificial intelligence across HR, Finance, and Sales departments.

## The Vision

Nexus isn&apos;t just another enterprise tool—it&apos;s a complete reimagining of how businesses interact with AI. By consolidating HR, Finance, and Sales intelligence into a single, cohesive platform, we&apos;re eliminating the chaos of juggling multiple systems and creating a unified command center for business operations.

## Platform Modules

NEXUS_MODULES

## The Tech Behind the Magic

NEXUS_TECH_SHOWCASE

## Building with AI

NEXUS_AI_JOURNEY

## What Makes Nexus Different

NEXUS_DIFFERENTIATORS

## Current Development

Active development with core modules implemented. Each dashboard is being refined with real-world feedback, and new AI capabilities are being integrated weekly. The platform represents the future of AI-assisted enterprise software—where intelligent automation meets intuitive design.`,
    award: "Built with Windsurf + Claude Sonnet",
    role: "Full-Stack Developer",
  },
  {
    slug: "portfolio",
    title: "Personal Portfolio",
    description: "Modern portfolio website showcasing projects and technical expertise",
    year: "2025",
    tags: ["Next.js", "React", "TypeScript", "Framer Motion", "TailwindCSS"],
    github: "https://github.com/simplyarfan/portfolio",
    content: `A modern, minimalist portfolio website built to showcase my projects, technical skills, and professional journey. This very website you're viewing!

## The Story

You know that feeling when you visit a website and everything just *clicks*? That's what I wanted to create. Not another cookie-cutter portfolio, but a digital space that feels alive, responsive, and genuinely represents who I am as a developer.

## Design DNA

PORTFOLIO_DESIGN_PRINCIPLES

## What's Under the Hood

PORTFOLIO_TECH_STACK

## The Build Process

PORTFOLIO_BUILD_STORY

## Performance That Matters

PORTFOLIO_METRICS

This portfolio isn&apos;t just a showcase—it&apos;s proof that with the right tools, clear vision, and a bit of AI magic, you can build something that stands out in a sea of templates.`,
    award: "Built with Windsurf + Claude Sonnet 3.5",
    role: "Designer & Developer",
  },
];

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    notFound();
  }

  const images = [
    { src: "/images/LenScript_Figure_1.png", title: "Fig. 1: Block Diagram", desc: "System architecture showing data flow from microphone to AR display" },
    { src: "/images/LenScript_Figure_2.png", title: "Fig. 2: Workflow Diagram", desc: "Processing pipeline from voice detection to display" },
    { src: "/images/LenScript_Figure_3.png", title: "Fig. 3: Noise Cancellation", desc: "High-pass filtering algorithm" },
    { src: "/images/LenScript_Figure_5.png", title: "Fig. 4: Speech-to-Text", desc: "Voice detection and transcription process" },
    { src: "/images/LenScript_Figure_6.png", title: "Fig. 5: Sentiment Analysis", desc: "Emotion detection workflow" },
    { src: "/images/LenScript_Figure_7.png", title: "Fig. 6: Use Case Diagram", desc: "User interaction with system modules" },
  ];

  return (
    <div className="min-h-screen bg-black text-primary pt-32 pb-20 px-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
      <article className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link
          href="/projects"
          className="inline-flex items-center text-accent/50 hover:text-primary transition-colors mb-8 text-sm"
        >
          ← Back to Projects
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Award Badge */}
          {project.award && (
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full text-xs text-primary/70 mb-6">
              <Award className="w-4 h-4" />
              {project.award}
            </div>
          )}

          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            {project.title}
          </h1>

          <p className="text-lg text-accent/60 mb-6">{project.description}</p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-primary/10">
            <div className="flex items-center gap-2 text-accent/50 text-sm">
              <Calendar className="w-4 h-4" />
              {project.year}
            </div>

            {project.role && (
              <div className="text-accent/50 text-sm">
                Role: {project.role}
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {project.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-invert prose-primary max-w-none"
        >
          <div className="text-accent/80 leading-relaxed space-y-8">
            {project.content.split('\n\n').map((paragraph, index) => {
              // Handle Nexus Modules - Horizontal Cards with Numbers
              if (paragraph === 'NEXUS_MODULES') {
                const modules = [
                  { num: "01", title: "CV Intelligence", desc: "AI-powered resume parsing, skill matching, and candidate ranking. Processes hundreds of applications in seconds." },
                  { num: "02", title: "Interview Coordinator", desc: "Automated scheduling with AI-generated questions. Streamlines the entire interview workflow." },
                  { num: "03", title: "LivelyHR", desc: "Real-time analytics, performance tracking, and predictive workforce planning in one dashboard." },
                  { num: "04", title: "LivelyFinance", desc: "Financial visualization with AI expense categorization and budget forecasting." },
                  { num: "05", title: "LivelySales", desc: "Pipeline visualization, AI lead scoring, and predictive sales forecasting." },
                ];
                return (
                  <div key={index} className="space-y-4 my-8">
                    {modules.map((module, i) => (
                      <div key={i} className="flex gap-6 p-6 border-l-4 border-primary/50 bg-primary/5 hover:bg-primary/10 transition-all">
                        <div className="text-5xl font-bold text-primary/20">{module.num}</div>
                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-primary mb-2">{module.title}</h4>
                          <p className="text-accent/70 leading-relaxed">{module.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Nexus Tech Showcase - Single Column with Icons
              if (paragraph === 'NEXUS_TECH_SHOWCASE') {
                return (
                  <div key={index} className="my-8 p-8 border border-primary/20 rounded-xl bg-gradient-to-br from-primary/5 to-transparent">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <Code2 className="w-12 h-12 text-primary mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-primary mb-2">Frontend</h4>
                        <p className="text-sm text-accent/60">Next.js 14 • React 18 • TypeScript • TailwindCSS</p>
                      </div>
                      <div className="text-center">
                        <Building2 className="w-12 h-12 text-primary mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-primary mb-2">Backend</h4>
                        <p className="text-sm text-accent/60">Node.js • Express • Redis • JWT Auth</p>
                      </div>
                      <div className="text-center">
                        <Brain className="w-12 h-12 text-primary mx-auto mb-3" />
                        <h4 className="text-lg font-bold text-primary mb-2">AI/ML</h4>
                        <p className="text-sm text-accent/60">Custom Models • API Integration • Real-time Processing</p>
                      </div>
                    </div>
                  </div>
                );
              }

              // Handle Nexus AI Journey - Timeline Style
              if (paragraph === 'NEXUS_AI_JOURNEY') {
                const journey = [
                  "Windsurf IDE + Claude Sonnet 3.5 as my AI pair programmer",
                  "Rapid prototyping of UI components and dashboard layouts",
                  "AI-generated API endpoints and database schemas",
                  "Intelligent debugging and performance optimization",
                  "Automated code documentation and best practices"
                ];
                return (
                  <div key={index} className="my-8">
                    <div className="space-y-3">
                      {journey.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                            <span className="text-primary font-bold text-sm">{i + 1}</span>
                          </div>
                          <p className="text-accent/80 pt-1">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              // Handle Nexus Differentiators - Large Cards
              if (paragraph === 'NEXUS_DIFFERENTIATORS') {
                return (
                  <div key={index} className="grid md:grid-cols-2 gap-6 my-8">
                    <div className="p-8 border border-primary/30 rounded-xl bg-primary/5 hover:scale-105 transition-transform">
                      <Zap className="w-10 h-10 text-primary mb-4" />
                      <h4 className="text-2xl font-bold text-primary mb-3">All-in-One Platform</h4>
                      <p className="text-accent/70">No more switching between tools. Everything your business needs in one place.</p>
                    </div>
                    <div className="p-8 border border-primary/30 rounded-xl bg-primary/5 hover:scale-105 transition-transform">
                      <Shield className="w-10 h-10 text-primary mb-4" />
                      <h4 className="text-2xl font-bold text-primary mb-3">Enterprise-Grade Security</h4>
                      <p className="text-accent/70">Role-based access control and JWT authentication keep your data safe.</p>
                    </div>
                    <div className="p-8 border border-primary/30 rounded-xl bg-primary/5 hover:scale-105 transition-transform">
                      <Target className="w-10 h-10 text-primary mb-4" />
                      <h4 className="text-2xl font-bold text-primary mb-3">AI-Powered Insights</h4>
                      <p className="text-accent/70">Make data-driven decisions with intelligent analytics and predictions.</p>
                    </div>
                    <div className="p-8 border border-primary/30 rounded-xl bg-primary/5 hover:scale-105 transition-transform">
                      <Rocket className="w-10 h-10 text-primary mb-4" />
                      <h4 className="text-2xl font-bold text-primary mb-3">Built for Scale</h4>
                      <p className="text-accent/70">Modular architecture grows with your business needs.</p>
                    </div>
                  </div>
                );
              }

              // Handle Portfolio Design Principles - Quote Style Cards
              if (paragraph === 'PORTFOLIO_DESIGN_PRINCIPLES') {
                const principles = [
                  { icon: <Sparkles className="w-12 h-12" />, title: "Minimal", desc: "Every pixel has a purpose. No clutter, no noise—just clean, intentional design." },
                  { icon: <Zap className="w-12 h-12" />, title: "Functional", desc: "Beautiful is useless without utility. Every animation, every interaction serves the user." },
                  { icon: <Target className="w-12 h-12" />, title: "Memorable", desc: "Stand out without screaming. Subtle details that make you go &apos;wait, that&apos;s cool&apos;." },
                ];
                return (
                  <div key={index} className="grid md:grid-cols-3 gap-6 my-8">
                    {principles.map((p, i) => (
                      <div key={i} className="relative p-8 border-2 border-primary/20 rounded-2xl hover:border-primary/50 transition-all group">
                        <div className="text-primary mb-4">{p.icon}</div>
                        <h4 className="text-2xl font-bold text-primary mb-3">{p.title}</h4>
                        <p className="text-accent/70 italic">&ldquo;{p.desc}&rdquo;</p>
                        <div className="absolute top-4 right-4 text-primary/10 text-8xl font-bold group-hover:text-primary/20 transition-colors">{i + 1}</div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Portfolio Tech Stack - Compact List
              if (paragraph === 'PORTFOLIO_TECH_STACK') {
                return (
                  <div key={index} className="my-8 p-6 bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary">
                    <div className="flex flex-wrap gap-4 items-center">
                      <span className="text-accent/60">Built with:</span>
                      {["Next.js 14", "TypeScript", "TailwindCSS", "Framer Motion", "Lucide Icons"].map((tech, i) => (
                        <span key={i} className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-primary font-mono text-sm hover:scale-110 transition-transform">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              }

              // Handle Portfolio Build Story - Narrative Cards
              if (paragraph === 'PORTFOLIO_BUILD_STORY') {
                const story = [
                  { icon: <Brain className="w-6 h-6" />, title: "Ideation", text: "Sketched designs, explored color palettes, defined the vibe" },
                  { icon: <Code2 className="w-6 h-6" />, title: "Development", text: "Windsurf + Claude Sonnet 3.5 as my coding partner" },
                  { icon: <Zap className="w-6 h-6" />, title: "Iteration", text: "Refined animations, tweaked spacing, perfected interactions" },
                  { icon: <Rocket className="w-6 h-6" />, title: "Launch", text: "Deployed to Vercel with automatic CI/CD" },
                ];
                return (
                  <div key={index} className="grid md:grid-cols-2 gap-4 my-8">
                    {story.map((s, i) => (
                      <div key={i} className="flex gap-4 p-6 bg-primary/5 rounded-xl border border-primary/10 hover:border-primary/30 transition-all">
                        <div className="text-primary mt-1">{s.icon}</div>
                        <div>
                          <h5 className="font-bold text-primary mb-1">{s.title}</h5>
                          <p className="text-sm text-accent/60">{s.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Portfolio Metrics - Stats Grid
              if (paragraph === 'PORTFOLIO_METRICS') {
                const metrics = [
                  { label: "Lighthouse Score", value: "95+", desc: "Performance, Accessibility, Best Practices, SEO" },
                  { label: "Load Time", value: "<1s", desc: "First Contentful Paint" },
                  { label: "Components", value: "25+", desc: "Reusable, modular React components" },
                  { label: "Animations", value: "50+", desc: "Smooth Framer Motion transitions" },
                ];
                return (
                  <div key={index} className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
                    {metrics.map((m, i) => (
                      <div key={i} className="text-center p-6 border border-primary/20 rounded-xl hover:bg-primary/5 transition-colors">
                        <div className="text-4xl font-bold text-primary mb-2">{m.value}</div>
                        <div className="text-sm font-semibold text-accent/80 mb-1">{m.label}</div>
                        <div className="text-xs text-accent/50">{m.desc}</div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Nexus Feature Cards
              if (paragraph === 'FEATURE_CARDS_NEXUS') {
                const features = [
                  { icon: <Brain className="w-5 h-5" />, title: "CV Intelligence", desc: "Automated resume parsing and candidate screening with AI-powered skill matching and intelligent ranking." },
                  { icon: <Users className="w-5 h-5" />, title: "Interview Coordinator", desc: "Automated scheduling, AI-assisted question generation, and real-time candidate evaluation tools." },
                  { icon: <BarChart3 className="w-5 h-5" />, title: "LivelyHR Dashboard", desc: "Real-time HR analytics, performance tracking, and predictive workforce planning insights." },
                  { icon: <Globe className="w-5 h-5" />, title: "LivelyFinance Dashboard", desc: "Financial visualization, AI expense categorization, and budget forecasting with anomaly detection." },
                  { icon: <Target className="w-5 h-5" />, title: "LivelySales Dashboard", desc: "Sales pipeline visualization, AI-driven lead scoring, and predictive sales forecasting." },
                  { icon: <Zap className="w-5 h-5" />, title: "Unified Platform", desc: "Single hub for all business intelligence tools with role-based access and real-time sync." },
                ];
                return (
                  <div key={index} className="grid md:grid-cols-2 gap-6 my-8">
                    {features.map((feature, i) => (
                      <div key={i} className="p-6 border border-primary/20 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="text-primary mt-1">{feature.icon}</div>
                          <div>
                            <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                            <p className="text-sm text-accent/70 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Feature Cards
              if (paragraph === 'FEATURE_CARDS') {
                const features = [
                  { icon: <Mic className="w-5 h-5" />, title: "Real-Time Speech-to-Text", desc: "Powered by Apple's SFSpeechRecognizer with Whisper integration (13-37% WER). Outperforms Google Speech-to-Text with minimal latency." },
                  { icon: <Headphones className="w-5 h-5" />, title: "Sentiment Analysis", desc: "On-device detection using NLTagger with 95% accuracy. Displays emotional context as visual symbols (+, -, =)." },
                  { icon: <Users className="w-5 h-5" />, title: "Speaker Diarization", desc: "MFCC feature extraction for speaker differentiation. DER of ≈17% helps identify who is speaking." },
                  { icon: <Radio className="w-5 h-5" />, title: "Noise Cancellation", desc: "High-pass filtering using AVAudioEngine with +7-9 dB SNR improvement for clear audio." },
                  { icon: <Zap className="w-5 h-5" />, title: "AR Display Integration", desc: "BLE connection to Vuzix smart glasses with live captions and sentiment indicators." },
                  { icon: <Shield className="w-5 h-5" />, title: "Privacy-First Design", desc: "100% offline processing. No cloud dependencies. All data stays on device." },
                ];
                return (
                  <div key={index} className="grid md:grid-cols-2 gap-6 my-8">
                    {features.map((feature, i) => (
                      <div key={i} className="p-6 border border-primary/20 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                        <div className="flex items-start gap-4">
                          <div className="text-primary mt-1">{feature.icon}</div>
                          <div>
                            <h4 className="text-lg font-sans font-semibold text-primary mb-2">{feature.title}</h4>
                            <p className="text-sm text-accent/70 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Nexus Tech Grid
              if (paragraph === 'TECH_GRID_NEXUS') {
                return (
                  <div key={index} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-primary mb-3">Frontend Stack</h4>
                        <div className="space-y-1 text-sm text-accent/70">
                          <div><span className="text-primary">Framework:</span> Next.js 14</div>
                          <div><span className="text-primary">UI Library:</span> React 18</div>
                          <div><span className="text-primary">Styling:</span> TailwindCSS</div>
                          <div><span className="text-primary">Animations:</span> Framer Motion</div>
                          <div><span className="text-primary">Language:</span> TypeScript</div>
                        </div>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-primary mb-3">Backend & Infrastructure</h4>
                        <div className="space-y-1 text-sm text-accent/70">
                          <div><span className="text-primary">Runtime:</span> Node.js</div>
                          <div><span className="text-primary">API:</span> RESTful APIs</div>
                          <div><span className="text-primary">Database:</span> Redis</div>
                          <div><span className="text-primary">Auth:</span> JWT + RBAC</div>
                          <div><span className="text-primary">Deployment:</span> Netlify</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Handle Tech Grid
              if (paragraph === 'TECH_GRID') {
                return (
                  <div key={index} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-primary mb-3">Core Technologies</h4>
                        <div className="space-y-1 text-sm text-accent/70">
                          <div><span className="text-primary">Language:</span> Swift</div>
                          <div><span className="text-primary">IDE:</span> Xcode</div>
                          <div><span className="text-primary">Audio:</span> AVFoundation, AVAudioEngine</div>
                          <div><span className="text-primary">Speech:</span> SFSpeechRecognizer, Whisper</div>
                          <div><span className="text-primary">ML:</span> CoreML, NLTagger</div>
                          <div><span className="text-primary">Hardware:</span> Vuzix Ultralite Smart Glasses</div>
                        </div>
                      </div>
                      <div className="p-4 border border-primary/20 rounded-lg">
                        <h4 className="text-sm font-semibold text-primary mb-3">Key Algorithms</h4>
                        <div className="space-y-2 text-sm text-accent/70">
                          <div>• Noise Cancellation (High-pass filtering)</div>
                          <div>• Voice Activity Detection</div>
                          <div>• Speech-to-Text (SFSpeechRecognizer + Whisper)</div>
                          <div>• Sentiment Classification (NLTagger)</div>
                          <div>• Speaker Diarization (MFCC-based)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              // Handle Nexus Challenges List
              if (paragraph === 'CHALLENGES_LIST_NEXUS') {
                const challenges = [
                  { title: "Rapid Prototyping", desc: "Quickly iterate on UI/UX designs and component architectures" },
                  { title: "Code Generation", desc: "Generate boilerplate code, API endpoints, and database schemas" },
                  { title: "Problem Solving", desc: "Debug complex issues and optimize performance bottlenecks" },
                  { title: "Best Practices", desc: "Implement industry-standard patterns and security measures" },
                ];
                return (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-semibold text-primary mb-4">AI-Assisted Development Approach</h3>
                    {challenges.map((challenge, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 border-l-2 border-primary/30 pl-4">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <div>
                          <span className="text-primary font-semibold">{challenge.title}:</span>
                          <span className="text-accent/70"> {challenge.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Challenges List
              if (paragraph === 'CHALLENGES_LIST') {
                const challenges = [
                  { title: "Real-time Processing", desc: "Optimized pipeline for minimal latency" },
                  { title: "Battery Efficiency", desc: "Balanced accuracy with power consumption" },
                  { title: "Noise Environments", desc: "Developed effective filtering algorithms" },
                  { title: "Speaker Separation", desc: "Implemented MFCC-based diarization" },
                ];
                return (
                  <div key={index} className="space-y-3">
                    <h3 className="text-xl font-sans font-semibold text-primary mb-4">Challenges Overcome</h3>
                    {challenges.map((challenge, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 border-l-2 border-primary/30 pl-4">
                        <span className="text-primary font-semibold">{i + 1}.</span>
                        <div>
                          <span className="text-primary font-semibold">{challenge.title}:</span>
                          <span className="text-accent/70"> {challenge.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                );
              }

              // Handle Nexus Impact Sections
              if (paragraph === 'IMPACT_SECTIONS_NEXUS') {
                return (
                  <div key={index} className="space-y-6">
                    <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                      <h3 className="text-lg font-semibold text-primary mb-3">Enterprise Efficiency</h3>
                      <ul className="space-y-2 text-sm text-accent/70">
                        <li>• Streamlines HR, Finance, and Sales operations under one platform</li>
                        <li>• Reduces time spent on repetitive tasks through AI automation</li>
                        <li>• Provides actionable insights for data-driven decision making</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                      <h3 className="text-lg font-semibold text-primary mb-3">Scalable Architecture</h3>
                      <ul className="space-y-2 text-sm text-accent/70">
                        <li>• Modular design allows easy addition of new features</li>
                        <li>• Role-based access control for enterprise security</li>
                        <li>• Real-time data synchronization across all modules</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                      <h3 className="text-lg font-semibold text-primary mb-3">AI-Powered Innovation</h3>
                      <ul className="space-y-2 text-sm text-accent/70">
                        <li>• Demonstrates effective use of AI in enterprise software</li>
                        <li>• Showcases modern web development best practices</li>
                        <li>• Proves viability of AI-assisted development workflows</li>
                      </ul>
                    </div>
                  </div>
                );
              }

              // Handle Impact Sections
              if (paragraph === 'IMPACT_SECTIONS') {
                return (
                  <div key={index} className="space-y-6">
                    <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                      <h3 className="text-lg font-sans font-semibold text-primary mb-3">Accessibility</h3>
                      <ul className="space-y-2 text-sm text-accent/70">
                        <li>• Enables real-time accessible communication for the hearing-impaired</li>
                        <li>• Provides emotional context often missed in traditional captioning</li>
                        <li>• Supports independent participation in conversations</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                      <h3 className="text-lg font-sans font-semibold text-primary mb-3">Privacy & Security</h3>
                      <ul className="space-y-2 text-sm text-accent/70">
                        <li>• Fully offline operation protects user privacy</li>
                        <li>• No data transmission to external servers</li>
                        <li>• Compliant with healthcare privacy standards</li>
                      </ul>
                    </div>
                    <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                      <h3 className="text-lg font-sans font-semibold text-primary mb-3">Future Applications</h3>
                      <ul className="space-y-2 text-sm text-accent/70">
                        <li>• Foundation for multi-language transcription</li>
                        <li>• Potential for real-time translation</li>
                        <li>• Context-aware AR assistance tools</li>
                        <li>• Educational accessibility tools</li>
                      </ul>
                    </div>
                  </div>
                );
              }

              // Handle Recognition Section
              if (paragraph === 'RECOGNITION_SECTION') {
                return (
                  <div key={index} className="space-y-8">
                    <div>
                      <h2 className="text-3xl font-sans font-bold text-primary mb-6 flex items-center gap-3">
                        <Trophy className="w-6 h-6" />
                        Recognition
                      </h2>
                      <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                        <p className="text-base text-accent/70 mb-3 font-sans">
                          <span className="text-primary font-semibold font-sans">Senior Design Capstone Project</span>
                        </p>
                        <p className="text-sm text-accent/60 mb-4 font-sans">
                          College of Engineering – Department of Computer Science and Engineering
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm font-sans">
                          <div>
                            <span className="text-primary font-sans">Role:</span>
                            <span className="text-accent/70 font-sans"> Lead Developer & Product Ideator</span>
                          </div>
                          <div>
                            <span className="text-primary font-sans">Team Lead:</span>
                            <span className="text-accent/70 font-sans"> Syed Arfan Hussain</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-3xl font-sans font-bold text-primary mb-6 flex items-center gap-3">
                        <CheckCircle2 className="w-6 h-6" />
                        Technical Validation
                      </h2>
                      <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                        <p className="text-base text-accent/70 mb-4 font-sans">
                          The system was rigorously tested across multiple scenarios:
                        </p>
                        <div className="grid md:grid-cols-2 gap-3 text-sm text-accent/70 font-sans">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Quiet indoor environments
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Noisy public spaces
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Multi-speaker conversations
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            Various accents and speech patterns
                          </div>
                        </div>
                        <p className="text-sm text-accent/60 mt-4 italic font-sans">
                          Results demonstrate consistent performance and reliability for real-world accessibility applications.
                        </p>
                      </div>
                    </div>

                    {/* GitHub Link */}
                    {project.github && (
                      <div className="flex justify-center">
                        <Link
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 px-6 py-3 border border-primary/30 rounded-lg text-primary hover:bg-primary hover:text-black transition-all duration-300 font-sans"
                        >
                          <Github className="w-5 h-5" />
                          View on GitHub
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              // Handle tables
              if (paragraph === 'TABLE_METRICS') {
                return (
                  <div key={index} className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-4 px-4 text-primary font-sans font-semibold">Test Category</th>
                          <th className="text-left py-4 px-4 text-primary font-sans font-semibold">Metric</th>
                          <th className="text-left py-4 px-4 text-primary font-sans font-semibold">Result</th>
                        </tr>
                      </thead>
                      <tbody className="text-accent/70">
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">Speech Recognition</td>
                          <td className="py-3 px-4">Word Error Rate (WER)</td>
                          <td className="py-3 px-4">13-37%</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">Speaker Diarization</td>
                          <td className="py-3 px-4">Diarization Error Rate (DER)</td>
                          <td className="py-3 px-4">≈17%</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">Noise Reduction</td>
                          <td className="py-3 px-4">SNR Improvement</td>
                          <td className="py-3 px-4">+7-9 dB</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">Sentiment Analysis</td>
                          <td className="py-3 px-4">Accuracy (NLTagger)</td>
                          <td className="py-3 px-4">95%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              }
              
              if (paragraph === 'TABLE_ALTERNATIVES') {
                return (
                  <div key={index} className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-primary/20">
                          <th className="text-left py-4 px-4 text-primary font-sans font-semibold">Solution</th>
                          <th className="text-left py-4 px-4 text-primary font-sans font-semibold">Limitation</th>
                        </tr>
                      </thead>
                      <tbody className="text-accent/70">
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">XanderGlasses</td>
                          <td className="py-3 px-4">Lacked sentiment awareness</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">TranscribeGlass</td>
                          <td className="py-3 px-4">Limited offline capabilities</td>
                        </tr>
                        <tr className="border-b border-primary/10">
                          <td className="py-3 px-4">Captify</td>
                          <td className="py-3 px-4">No speaker identification</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                );
              }

              // Handle System Architecture with visual pipeline
              if (paragraph.includes('Audio Input →')) {
                return (
                  <div key={index} className="my-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
                      {['Audio Input', 'Voice Detection', 'Noise Cancellation', 'Speech-to-Text', 'Sentiment Analysis', 'Speaker ID', 'AR Display'].map((step, i, arr) => (
                        <div key={i} className="flex items-center gap-3">
                          <div className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-lg text-primary font-mono text-xs whitespace-nowrap">
                            {step}
                          </div>
                          {i < arr.length - 1 && <ArrowRight className="w-4 h-4 text-primary" />}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }

              if (paragraph.startsWith('## ')) {
                const title = paragraph.replace('## ', '');
                let icon = null;
                if (title.includes('Project Overview')) icon = <Brain className="w-6 h-6" />;
                else if (title.includes('Key Features')) icon = <Target className="w-6 h-6" />;
                else if (title.includes('System Architecture')) icon = <Building2 className="w-6 h-6" />;
                else if (title.includes('Technical Implementation')) icon = <Code2 className="w-6 h-6" />;
                else if (title.includes('Performance Metrics')) icon = <BarChart3 className="w-6 h-6" />;
                else if (title.includes('Impact')) icon = <Globe className="w-6 h-6" />;
                else if (title.includes('Research')) icon = <FlaskConical className="w-6 h-6" />;
                else if (title.includes('Future')) icon = <Rocket className="w-6 h-6" />;
                else if (title.includes('Recognition')) icon = <Trophy className="w-6 h-6" />;
                else if (title.includes('Validation')) icon = <CheckCircle2 className="w-6 h-6" />;
                
                return (
                  <h2 key={index} className="text-3xl font-bold text-primary mt-16 mb-6 first:mt-0 flex items-center gap-3">
                    {icon}
                    {title}
                  </h2>
                );
              }
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="text-xl font-semibold text-primary mt-10 mb-4">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('- ')) {
                const items = paragraph.split('\n');
                return (
                  <ul key={index} className="space-y-2 ml-6">
                    {items.map((item, i) => (
                      <li key={i} className="text-accent/70 leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                        <span>{item.replace('- ', '')}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              if (paragraph.match(/^\d+\./)) {
                const items = paragraph.split('\n');
                return (
                  <ol key={index} className="space-y-2 ml-6 list-decimal">
                    {items.map((item, i) => (
                      <li key={i} className="text-accent/70 leading-relaxed pl-2">
                        {item.replace(/^\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }
              // Highlight key terms
              let processedText = paragraph;
              // Add underline to key terms
              const keyTerms = ['real-time', 'on-device', 'offline', 'privacy', 'sentiment', 'transcription', 'accessibility'];
              keyTerms.forEach(term => {
                const regex = new RegExp(`\\b${term}\\b`, 'gi');
                processedText = processedText.replace(regex, `<span class="text-primary underline decoration-primary/30 underline-offset-4">${term}</span>`);
              });
              
              return (
                <p key={index} className="text-base leading-relaxed">
                  {paragraph}
                </p>
              );
            })}

            {/* GitHub Link - Show for all projects that have a github URL */}
            {project.github && (
              <div className="flex justify-center mt-16">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 border border-primary/30 rounded-lg text-primary hover:bg-primary hover:text-black transition-all duration-300 font-sans"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </Link>
              </div>
            )}
          </div>
        </motion.div>

        {/* Images Section for LenScript */}
          {project.hasImages && project.slug === 'lenscript' && (
            <div className="mt-16">
              <details className="border border-primary/20 rounded-lg group">
                <summary className="cursor-pointer p-6 hover:bg-primary/5 transition-colors flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-primary inline-flex items-center gap-3">
                    <ImageIcon className="w-6 h-6" />
                    System Diagrams & Visualizations
                  </h2>
                  <ChevronDown className="w-5 h-5 text-primary transition-transform group-open:rotate-180" />
                </summary>
              
              <div className="grid md:grid-cols-3 gap-4 p-6">
                {images.map((image, index) => (
                  <div key={index} className="space-y-2">
                    <div 
                      onClick={() => setSelectedImage(image.src)}
                      className="relative border border-primary/20 rounded-lg overflow-hidden bg-primary/5 cursor-pointer group hover:border-primary/50 transition-all aspect-[4/3]"
                    >
                      <img 
                        src={image.src}
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                        <Maximize2 className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <p className="text-xs text-accent/60">
                      <span className="text-primary font-semibold">{image.title}</span> - {image.desc}
                    </p>
                  </div>
                ))}
              </div>
              </details>
            </div>
          )}

        {/* Footer Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-primary/10"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors"
          >
            ← View All Projects
          </Link>
        </motion.div>
      </article>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-primary hover:text-secondary transition-colors p-2"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={selectedImage}
            alt="Expanded diagram"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
