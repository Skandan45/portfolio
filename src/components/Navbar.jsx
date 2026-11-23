import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export function Navbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#050509]/85 backdrop-blur-2xl border-b border-white/10 py-3.5 shadow-xl shadow-black/60'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Monogram Left */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="group flex items-center gap-2 font-display text-xl sm:text-2xl font-extrabold tracking-tight text-white transition-all"
          >
            <span className="bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent group-hover:to-cyan-400">
              SKANDAN<span className="text-cyan-400">.</span>
            </span>
          </a>

          {/* Nav Links (Desktop) with Animated Underline / Pill */}
          <nav className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0B1020]/80 border border-white/10 backdrop-blur-2xl shadow-inner">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3.5 py-1 text-xs font-mono font-medium transition-colors ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30 rounded-full border border-cyan-400/50 shadow-[0_0_15px_-3px_rgba(34,211,238,0.4)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Status & Action */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Small Availability Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1020]/90 border border-cyan-400/30 backdrop-blur-xl shadow-[0_0_15px_-4px_rgba(34,211,238,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-[11px] font-mono text-cyan-300 font-medium">
                Available for Opportunities
              </span>
            </div>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-mono font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-slate-950 transition-all shadow-[0_0_20px_-4px_rgba(34,211,238,0.5)] hover:scale-105 active:scale-95"
            >
              <span>Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-[#0B1020] border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#050509]/95 border-b border-white/10 backdrop-blur-2xl overflow-hidden px-4 py-6 space-y-4"
          >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0B1020] border border-cyan-400/30 w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="text-xs font-mono text-cyan-300 font-medium">
                Available for Opportunities
              </span>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`px-4 py-2.5 rounded-xl text-sm font-mono transition-colors flex items-center justify-between ${
                      isActive
                        ? 'bg-blue-600/20 text-cyan-300 border border-cyan-400/30'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <Sparkles className="w-3.5 h-3.5 text-cyan-400" />}
                  </a>
                );
              })}
            </nav>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-mono text-xs font-bold bg-gradient-to-r from-blue-600 to-cyan-500 text-slate-950 shadow-glow-cyan"
            >
              <span>LET'S CONNECT</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
