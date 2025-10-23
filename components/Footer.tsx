"use client";

import Link from "next/link";
import { Github, Linkedin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/10 pt-6 pb-8 px-6" style={{ fontFamily: "var(--font-space-grotesk), sans-serif" }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left - Name and Copyright */}
        <div className="flex items-center gap-4">
          <span className="text-sm text-accent/70">
            Syed Arfan Hussain
          </span>
          <span className="text-accent/30">/</span>
          <span className="text-xs text-accent/50">
            © {currentYear} Syed Arfan Hussain
          </span>
        </div>

        {/* Center - Links */}
        <div className="flex items-center gap-6">
          <Link href="/about" className="text-sm text-accent/50 hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-accent/30">/</span>
          <Link href="/blog" className="text-sm text-accent/50 hover:text-primary transition-colors">
            Blog
          </Link>
          <span className="text-accent/30">/</span>
          <Link href="/projects" className="text-sm text-accent/50 hover:text-primary transition-colors">
            Projects
          </Link>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <Link 
            href="https://github.com/simplyarfan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent/50 hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1 inline-block"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link 
            href="https://linkedin.com/in/syedarfan" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-accent/50 hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1 inline-block"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link 
            href="https://instagram.com/simplyarfan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/50 hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1 inline-block"
          >
            <Instagram className="w-5 h-5" />
          </Link>
          <Link 
            href="https://www.youtube.com/@simplyarfan"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent/50 hover:text-primary transition-all duration-200 hover:scale-110 hover:-translate-y-1 inline-block"
          >
            <Youtube className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
