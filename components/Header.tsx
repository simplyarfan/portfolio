"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = (isOpen: boolean) => {
    setMobileMenuOpen(isOpen);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mobileMenuChange', { detail: { isOpen } }));
    }
  };

  const navItems = [
    { name: "ABOUT", path: "/about" },
    { name: "WORK", path: "/projects" },
    { name: "BLOG", path: "/blog" },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 border-b border-primary/10 ${
        mobileMenuOpen ? 'bg-black' : 'bg-black/80 backdrop-blur-md'
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="group">
          <span className="text-xl text-primary group-hover:text-secondary transition-colors tracking-wide" style={{ fontFamily: "var(--font-bungee), Impact, sans-serif", fontWeight: 400 }}>
            Syed Arfan
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-sm tracking-wider transition-all duration-200 font-sans px-4 py-2 inline-block ${
                pathname === item.path
                  ? "text-primary"
                  : "text-accent/50 hover:text-primary hover:translate-y-[-2px]"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link href="https://github.com/simplyarfan" target="_blank" rel="noopener noreferrer">
            <div className="px-4 py-2 text-accent/50 hover:text-primary hover:-translate-y-1 transition-all duration-200 inline-block">
              <Github className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => toggleMenu(!mobileMenuOpen)}
          className="md:hidden text-primary p-2"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence mode="wait">
        {mobileMenuOpen && (
          <>
            {/* Blurred backdrop for bottom area */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => toggleMenu(false)}
              className="fixed inset-0 bg-black/50 backdrop-blur-md z-[90] md:hidden"
            />
            
            {/* Solid menu container */}
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 left-0 right-0 bg-black z-[100] md:hidden"
            >
              {/* Header with Logo and Close */}
              <div className="flex items-center justify-between p-6 border-b border-primary/10">
                <Link 
                  href="/" 
                  onClick={() => toggleMenu(false)}
                  className="text-xl text-primary hover:text-secondary transition-colors tracking-wide"
                  style={{ fontFamily: "var(--font-bungee), Impact, sans-serif", fontWeight: 400 }}
                >
                  Syed Arfan
                </Link>
                <button
                  onClick={() => toggleMenu(false)}
                  className="text-primary p-2 hover:text-secondary transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links - Centered with spacing */}
              <div 
                className="flex-1 flex flex-col items-center justify-center px-6 py-8"
                onClick={(e) => {
                  // Only close if clicking the background, not the buttons
                  if (e.target === e.currentTarget) {
                    toggleMenu(false);
                  }
                }}
              >
                <nav className="flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="w-full max-w-xs"
                  >
                    <Link
                      href={item.path}
                      onClick={() => toggleMenu(false)}
                      className={`block text-center text-lg font-sans tracking-wider py-4 px-8 border rounded-lg transition-all duration-300 ${
                        pathname === item.path
                          ? "text-primary border-primary/50 bg-primary/5"
                          : "text-accent/70 border-primary/20 hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="w-full max-w-xs"
                >
                  <Link
                    href="https://github.com/simplyarfan"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => toggleMenu(false)}
                    className="flex items-center justify-center gap-3 text-lg font-sans text-accent/70 border border-primary/20 rounded-lg py-4 px-8 hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </Link>
                </motion.div>
                </nav>
              </div>

              {/* Footer - Clickable to close */}
              <div 
                onClick={() => toggleMenu(false)}
                className="p-6 border-t border-primary/10 text-center mb-4 cursor-pointer"
              >
                <p className="text-xs text-accent/40 font-sans tracking-wider">
                  © 2025 Syed Arfan Hussain
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
