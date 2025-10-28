"use client";

import { motion } from "framer-motion";
import { Github, Calendar, Award, Brain, MessageSquare, Sparkles, Zap, Database, Code2, Globe, ArrowRight, CheckCircle2, Bot, Users, TrendingUp } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function PortfolioChatbotProject() {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-primary/30 rounded-full text-xs text-primary/70 mb-6">
            <Award className="w-4 h-4" />
            Built with Windsurf + Claude Sonnet 3.5
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-primary mb-4">
            Portfolio Chatbot
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-accent/60 mb-6">
            Intelligent RAG chatbot with Groq Llama 3.3-70b for personalized portfolio interactions
          </p>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-primary/10">
            <div className="flex items-center gap-2 text-accent/50 text-sm">
              <Calendar className="w-4 h-4" />
              2025
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-12">
            {["Next.js", "RAG", "Groq API", "AI/ML", "LLM", "Llama 3.3-70b", "Framer Motion"].map((tag, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-primary/5 border border-primary/20 rounded-full text-sm text-primary/70"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="space-y-16">
          {/* Overview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert prose-primary max-w-none"
          >
            <h2 className="text-3xl text-primary mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Project Overview
            </h2>
            <p className="text-accent/70 text-lg leading-relaxed">
              An intelligent conversational AI assistant built for my portfolio website using RAG (Retrieval-Augmented Generation) architecture. The chatbot provides personalized, context-aware responses about my projects, skills, experience, and interests using Groq's Llama 3.3-70b model.
            </p>
            <p className="text-accent/70 text-lg leading-relaxed">
              Unlike traditional chatbots with hardcoded responses, this system intelligently retrieves relevant information from a knowledge base and generates natural, conversational answers in first person - making it feel like you're chatting directly with me.
            </p>
          </motion.div>

          {/* Key Features */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <h2 className="text-3xl text-primary mb-8" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Key Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <Brain className="w-6 h-6" />,
                  title: "RAG Architecture",
                  description: "Retrieval-Augmented Generation with keyword-based document matching for accurate, context-aware responses"
                },
                {
                  icon: <Sparkles className="w-6 h-6" />,
                  title: "Intelligent Responses",
                  description: "No hardcoded answers - LLM generates natural, personalized responses based on context and user queries"
                },
                {
                  icon: <Users className="w-6 h-6" />,
                  title: "Name Personalization",
                  description: "Extracts and remembers user's name throughout the conversation for a personal touch"
                },
                {
                  icon: <MessageSquare className="w-6 h-6" />,
                  title: "Conversational Style",
                  description: "Responds in first person as Arfan with warm, confident, and concise answers (max 30 words)"
                },
                {
                  icon: <Zap className="w-6 h-6" />,
                  title: "Fast & Free",
                  description: "Powered by Groq's Llama 3.3-70b - lightning-fast inference with zero API costs"
                },
                {
                  icon: <Globe className="w-6 h-6" />,
                  title: "Clickable Links",
                  description: "Auto-converts URLs to clickable links for LinkedIn, Instagram, and contact information"
                }
              ].map((feature, i) => (
                <div key={i} className="border border-primary/20 rounded-xl p-6 hover:border-primary/40 transition-colors">
                  <div className="text-primary mb-3">{feature.icon}</div>
                  <h3 className="text-xl text-primary mb-2" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
                    {feature.title}
                  </h3>
                  <p className="text-accent/70 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* System Architecture */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h2 className="text-3xl text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              System Architecture
            </h2>
            <div className="border border-primary/20 rounded-xl p-8 bg-primary/5">
              <div className="space-y-4 text-accent/70">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">1</div>
                  <div className="flex-1">
                    <p className="text-primary font-medium mb-1">User Message</p>
                    <p className="text-sm">Frontend sends message + userName to API route</p>
                  </div>
                </div>
                <div className="ml-4 border-l-2 border-primary/20 h-8"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">2</div>
                  <div className="flex-1">
                    <p className="text-primary font-medium mb-1">Document Retrieval</p>
                    <p className="text-sm">Keyword matching on JSON knowledge base (personal info, projects, skills)</p>
                  </div>
                </div>
                <div className="ml-4 border-l-2 border-primary/20 h-8"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">3</div>
                  <div className="flex-1">
                    <p className="text-primary font-medium mb-1">Context Building</p>
                    <p className="text-sm">Combines top 5 relevant documents into context for LLM</p>
                  </div>
                </div>
                <div className="ml-4 border-l-2 border-primary/20 h-8"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">4</div>
                  <div className="flex-1">
                    <p className="text-primary font-medium mb-1">LLM Generation</p>
                    <p className="text-sm">Groq Llama 3.3-70b generates intelligent, personalized response</p>
                  </div>
                </div>
                <div className="ml-4 border-l-2 border-primary/20 h-8"></div>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">5</div>
                  <div className="flex-1">
                    <p className="text-primary font-medium mb-1">Response Display</p>
                    <p className="text-sm">Frontend shows response with clickable links and smooth animations</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Technical Implementation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="text-3xl text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Technical Implementation
            </h2>
            <div className="space-y-6">
              <div className="border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl text-primary mb-3 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  Frontend (ChatBot.tsx)
                </h3>
                <ul className="space-y-2 text-accent/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>React component with Framer Motion animations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Name extraction via regex: /my name is ([a-zA-Z]+)/i</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Auto-converts URLs to clickable links with dangerouslySetInnerHTML</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Smooth scroll to bottom on new messages</span>
                  </li>
                </ul>
              </div>

              <div className="border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl text-primary mb-3 flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  RAG System (simple-rag.ts)
                </h3>
                <ul className="space-y-2 text-accent/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Keyword-based retrieval (no vector embeddings needed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Static JSON knowledge base (personal_info, projects, skills, rag_experience)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>SecureMax IT support-style system prompt for intelligent responses</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>No hardcoded responses - LLM handles everything contextually</span>
                  </li>
                </ul>
              </div>

              <div className="border border-primary/20 rounded-xl p-6">
                <h3 className="text-xl text-primary mb-3 flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  LLM Configuration
                </h3>
                <ul className="space-y-2 text-accent/70 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Model: Groq Llama 3.3-70b-versatile (free, fast)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Temperature: 0.6 (balanced creativity)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Max tokens: 50 (~30 words for concise responses)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span>Response time: ~500ms average</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <h2 className="text-3xl text-primary mb-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Key Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-primary/20 rounded-xl p-6 text-center">
                <div className="text-4xl text-primary mb-2 font-bold">100%</div>
                <div className="text-accent/70 text-sm">Free to Run</div>
                <div className="text-accent/50 text-xs mt-1">Groq API + Vercel</div>
              </div>
              <div className="border border-primary/20 rounded-xl p-6 text-center">
                <div className="text-4xl text-primary mb-2 font-bold">~500ms</div>
                <div className="text-accent/70 text-sm">Response Time</div>
                <div className="text-accent/50 text-xs mt-1">Lightning fast</div>
              </div>
              <div className="border border-primary/20 rounded-xl p-6 text-center">
                <div className="text-4xl text-primary mb-2 font-bold">0</div>
                <div className="text-accent/70 text-sm">Hardcoded Responses</div>
                <div className="text-accent/50 text-xs mt-1">All AI-generated</div>
              </div>
            </div>
          </motion.div>

          {/* Documentation Link */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="border border-primary/20 rounded-xl p-8 bg-primary/5"
          >
            <h3 className="text-2xl text-primary mb-4" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
              Full Documentation
            </h3>
            <p className="text-accent/70 mb-6">
              Detailed architecture, implementation guide, and technical specifications available in the project documentation.
            </p>
            <a
              href="/CHATBOT_ARCHITECTURE.md"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-lg hover:bg-secondary transition-colors font-medium"
            >
              <span>View Full Documentation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>

        </div>
      </article>
    </div>
  );
}
