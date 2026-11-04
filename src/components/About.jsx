import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Code, Cpu, User, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      label: "College & Degree",
      value: "Atria Institute of Technology",
      sub: "B.E. Information Science (3rd Year, CGPA 8.45)",
      color: "#C59B6D"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bengaluru, Karnataka",
      sub: "India's Premier Silicon Valley Tech Hub",
      color: "#D4AF7A"
    },
    {
      icon: Code,
      label: "Engineering Focus",
      value: "Software & Web Development",
      sub: "Java, Python, React.js, SQL & Modern Tooling",
      color: "#8C6239"
    },
    {
      icon: Cpu,
      label: "Technical Interests",
      value: "AI & Interactive Experiences",
      sub: "NLP concepts, 3D web interfaces & automation",
      color: "#E2E8F0"
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-noir-950 film-grain border-t border-white/5">
      {/* Soft warm spotlight in background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-bronze-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900 border border-bronze-500/30 text-xs font-mono text-bronze-300">
            <User className="w-3.5 h-3.5" />
            <span>BIOGRAPHY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial tracking-tight text-white">
            ABOUT <span className="italic font-normal text-bronze-300">ME</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A snapshot of my academic journey, engineering passions, and vision for building impactful software.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Photo & Frame (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden p-2 bg-noir-900 border border-bronze-500/30 shadow-portrait-shadow group">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-noir-950">
                <img
                  src={personalData.photos.lifestyle}
                  alt="Skandan D Gowda - Lifestyle Portrait"
                  className="w-full h-full object-cover object-center filter grayscale-[80%] contrast-[115%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  loading="lazy"
                />

                {/* Ambient Overlay Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-noir-950/85 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-400"></span>
                  <span className="text-[11px] font-mono text-bronze-300 font-semibold tracking-wider">
                    SKANDAN D GOWDA
                  </span>
                </div>

                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-noir-950/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>Status: Third Year Student</span>
                    <span className="text-bronze-300 font-bold">CGPA: {personalData.cgpa}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Authentic Biography & Academic Pillars (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Direct Authentic Prompt Text */}
            <div className="p-6 sm:p-8 rounded-2xl editorial-card border border-white/10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-editorial font-normal text-white">
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
                    className="p-4 rounded-xl bg-noir-900/70 border border-white/5 hover:border-bronze-500/40 transition-all group"
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
                        <h4 className="text-sm font-bold text-white group-hover:text-bronze-300 transition-colors">
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
