import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Cpu, Sparkles, BookOpen, User, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "College & Degree",
      value: "Atria Institute of Technology",
      sub: "B.E. Information Science (3rd Year, CGPA 8.45)",
      color: "#22D3EE"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      sub: "India's Premier Silicon Valley Tech Hub",
      color: "#2563EB"
    },
    {
      icon: Code,
      label: "Engineering Focus",
      value: "Software & Web Development",
      sub: "Java, Python, React.js, SQL & Modern Tooling",
      color: "#8B5CF6"
    },
    {
      icon: Cpu,
      label: "Technical Interests",
      value: "AI & Interactive Experiences",
      sub: "NLP concepts, 3D web interfaces & automation",
      color: "#EC4899"
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-navy-900/40">
      {/* Background Subtle Cyber Elements */}
      <div className="absolute inset-0 cyber-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-electric-500/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-cyan-400/30 text-xs font-mono text-cyan-400">
            <User className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            ABOUT <span className="text-gradient-cyan-purple">ME</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A snapshot of my academic journey, engineering passions, and vision for building impactful software.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photo & Interactive HUD Card (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden p-1 bg-gradient-to-tr from-cyan-400 via-electric-500 to-neon-purple shadow-2xl">
              <div className="relative rounded-[22px] overflow-hidden bg-navy-950 p-3">
                <div className="relative aspect-[3/4] rounded-xl overflow-hidden border border-white/10">
                  <img
                    src={personalData.photos.lifestyle}
                    alt="Skandan D Gowda - Lifestyle Portrait"
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Floating HUD Overlay Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-navy-900/85 backdrop-blur-md border border-cyan-400/30 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                    <span className="text-[11px] font-mono text-cyan-300 font-semibold">
                      SKANDAN D GOWDA
                    </span>
                  </div>

                  <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-navy-950/85 backdrop-blur-md border border-white/15 text-xs font-mono">
                    <div className="flex items-center justify-between text-slate-300">
                      <span>Status: Third Year Student</span>
                      <span className="text-cyan-400 font-bold">CGPA: {personalData.cgpa}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Authentic Biography & Academic Pillars (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Direct Authentic Prompt Text */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Engineering Practical Digital Solutions
              </h3>
              
              <div className="space-y-3.5 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                {personalData.aboutText.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-slate-100 font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Quick Facts / Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-navy-800/40 border border-white/5 hover:border-cyan-400/30 transition-all group"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="p-2.5 rounded-lg shrink-0"
                        style={{ backgroundColor: `${item.color}15`, color: item.color }}
                      >
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                          {item.label}
                        </span>
                        <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                          {item.value}
                        </h4>
                        <p className="text-xs text-slate-400">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
