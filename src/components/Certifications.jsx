import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ShieldCheck, Eye } from 'lucide-react';
import { certifications } from '../data/portfolioData';

function TiltCertificateCard({ cert, onOpenModal }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * 10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      className="h-full"
    >
      <div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => onOpenModal(cert)}
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
          transition: 'transform 0.15s ease-out, box-shadow 0.3s ease',
        }}
        className="h-full p-6 sm:p-7 rounded-2xl editorial-card border border-white/10 hover:border-bronze-400/50 cursor-pointer flex flex-col justify-between group relative overflow-hidden shadow-xl"
      >
        <div className="space-y-4">
          {/* Card Top: Issuer & Type Badge */}
          <div className="flex items-center justify-between gap-2 border-b border-white/5 pb-3">
            <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-noir-850 border border-bronze-500/30 text-bronze-300">
              {cert.type}
            </span>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              {cert.date}
            </span>
          </div>

          {/* Title & Organization */}
          <div className="space-y-1">
            <h3 className="text-lg sm:text-xl font-editorial font-normal text-white group-hover:text-bronze-300 transition-colors line-clamp-2">
              {cert.title}
            </h3>
            <p className="text-xs font-mono text-bronze-400 font-medium">
              Issued by {cert.issuer}
            </p>
          </div>

          {/* Description */}
          <p className="text-xs text-slate-400 font-sans line-clamp-2 leading-relaxed">
            {cert.description}
          </p>

          {/* Verified Skills Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {cert.skills?.slice(0, 3).map((sk, sIdx) => (
              <span
                key={sIdx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-noir-800 border border-white/5 text-slate-300"
              >
                {sk}
              </span>
            ))}
            {cert.skills?.length > 3 && (
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                +{cert.skills.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Card Footer */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-bronze-300 transition-colors">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            Verified Credential
          </span>
          <span className="flex items-center gap-1 text-bronze-300 font-bold group-hover:translate-x-1 transition-transform">
            <span>Inspect</span>
            <Eye className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export function Certifications({ onOpenCertificate }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Professional', 'AI & Innovation', 'Executive LOR'];

  const filteredCerts = certifications.filter((c) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Professional') return c.issuer.includes('Technology') || c.issuer.includes('Foundation');
    if (activeFilter === 'AI & Innovation') return c.issuer.includes('LinkedIn') || c.issuer.includes('Forage');
    if (activeFilter === 'Executive LOR') return c.title.includes('Recommendation');
    return true;
  });

  return (
    <section id="certificates" className="relative py-28 overflow-hidden bg-noir-950 film-grain border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-noir-900 border border-bronze-500/30 text-xs font-mono text-bronze-300">
            <Award className="w-3.5 h-3.5" />
            <span>AUTHENTIC CREDENTIALS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-editorial tracking-tight text-white">
            CERTIFICATIONS & <span className="italic font-normal text-bronze-300">ACHIEVEMENTS</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Interactive 3D tilted credentials. Click any credential card to inspect the official original document.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-3">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all ${
                  activeFilter === f
                    ? 'bg-bronze-500 text-noir-950 font-semibold shadow-sm'
                    : 'bg-noir-850 text-slate-400 hover:text-white border border-white/5'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        {/* 3D Tilt Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCerts.map((cert) => (
            <TiltCertificateCard
              key={cert.id}
              cert={cert}
              onOpenModal={onOpenCertificate}
            />
          ))}
        </div>

        {/* Security / Verification Banner */}
        <div className="mt-12 p-4 rounded-2xl bg-noir-900 border border-bronze-500/20 flex flex-wrap items-center justify-between gap-4 max-w-3xl mx-auto text-xs font-mono text-slate-300">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>All credentials match authenticated submissions with verified institutional IDs.</span>
          </div>
          <span className="text-bronze-300 font-semibold">100% VERIFIED</span>
        </div>

      </div>
    </section>
  );
}
