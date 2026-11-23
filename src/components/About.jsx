import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { GraduationCap, MapPin, Code, Cpu, User, CheckCircle2, Sparkles } from 'lucide-react';
import { personalData } from '../data/portfolioData';
import { FloatingObjects } from '../three/FloatingObjects';

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
      sub: "India's Tech Capital & Silicon Valley",
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
      label: "Professional Interests",
      value: "AI & Interactive Experiences",
      sub: "NLP concepts, 3D web interfaces & automation",
      color: "#38BDF8"
    }
  ];

  return (
    <section id="about" className="relative py-28 overflow-hidden bg-[#050509] border-t border-white/5">
      
      {/* 3D Floating Objects Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#22D3EE" />
          <pointLight position={[-5, -5, -2]} intensity={1.5} color="#8B5CF6" />
          <Suspense fallback={null}>
            <FloatingObjects />
          </Suspense>
        </Canvas>
      </div>

      {/* Atmospheric Spatial Glow Pools */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1020]/90 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <User className="w-3.5 h-3.5 text-cyan-400" />
            <span>BIOGRAPHY & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            ABOUT <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">ME</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A snapshot of my academic journey, engineering passions, and vision for building impactful software.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authentic Lifestyle Photograph (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden p-2 bg-[#0B1020]/90 border border-white/15 shadow-2xl group transition-all duration-500 hover:border-cyan-400/50 hover:shadow-[0_20px_60px_-15px_rgba(37,99,235,0.3)]">
              {/* Subtle Glowing Corner Glow */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-blue-600/20 via-cyan-400/20 to-purple-600/20 rounded-2xl blur-lg opacity-40 group-hover:opacity-80 transition pointer-events-none" />

              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-950">
                {/* 
                   AUTHENTIC LIFESTYLE PHOTOGRAPH
                   - Clean authentic colors
                   - Preserves original appearance & lighting
                   - NO destructive grayscale or halftone degradation
                */}
                <img
                  src={personalData.photos.lifestyle}
                  alt="Skandan D Gowda — Authentic Portrait"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-all duration-700 ease-out"
                  loading="lazy"
                />

                {/* Ambient Top Tag */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-lg bg-[#050509]/85 backdrop-blur-md border border-white/10 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span className="text-[11px] font-mono text-cyan-300 font-semibold tracking-wider">
                    SKANDAN D GOWDA
                  </span>
                </div>

                {/* Ambient Bottom Banner */}
                <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-[#050509]/85 backdrop-blur-md border border-white/10 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-300">Academic Status: Third Year Student</span>
                    <span className="text-cyan-400 font-bold">CGPA: {personalData.cgpa}</span>
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
            {/* Direct Prompt Text */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Engineering Practical Digital Solutions</span>
              </div>
              
              <div className="space-y-3.5 text-slate-300 font-sans text-sm sm:text-base leading-relaxed">
                {personalData.aboutText.map((paragraph, idx) => (
                  <p key={idx} className={idx === 0 ? "text-slate-100 font-medium" : ""}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0B1020]/80 border border-white/10 hover:border-cyan-400/40 transition-all group shadow-sm"
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
