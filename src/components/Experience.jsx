import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Award, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { internships } from '../data/portfolioData';

export function Experience({ onOpenCertificate }) {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-[#050509] border-t border-white/5">
      {/* Background spatial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B1020]/90 border border-cyan-400/30 text-xs font-mono text-cyan-300">
            <Briefcase className="w-3.5 h-3.5 text-cyan-400" />
            <span>INDUSTRY INTERNSHIPS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold font-display tracking-tight text-white">
            PROFESSIONAL <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">EXPERIENCE</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Verified engineering internships backed by official certificates of completion and executive letters of recommendation.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Vertical Central Timeline Bar */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-cyan-400 via-blue-600 to-purple-600 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-16">
            {internships.map((job, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={job.id}
                  className={`relative flex flex-col md:flex-row gap-8 items-center ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 md:left-1/2 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0B1020] border-2 border-cyan-400 flex items-center justify-center text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)] z-20 hidden sm:flex">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                  </div>

                  {/* Spacer Column for Desktop Alternating Layout */}
                  <div className="w-full md:w-1/2 hidden md:block" />

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="w-full md:w-1/2"
                  >
                    <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 hover:border-cyan-400/40 relative group space-y-6 shadow-xl">
                      
                      {/* Top Header */}
                      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                              {job.company}
                            </span>
                            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-400/10 text-cyan-300 border border-cyan-400/30">
                              VERIFIED
                            </span>
                          </div>
                          <p className="text-sm font-semibold text-slate-300 mt-0.5">
                            {job.role}
                          </p>
                        </div>

                        <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0B1020] border border-white/10 text-xs font-mono text-cyan-300">
                          <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                          <span>{job.duration}</span>
                        </div>
                      </div>

                      {/* Highlight Banner */}
                      <div className="px-3.5 py-2 rounded-xl bg-blue-600/15 border border-blue-500/30 text-xs font-mono text-cyan-300 flex items-center gap-2">
                        <Award className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{job.highlight}</span>
                      </div>

                      {/* Bullet Achievements */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-sans">
                        {job.achievements.map((ach, achIdx) => (
                          <li key={achIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{ach}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Document Preview & Action Triggers */}
                      <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
                        {job.certificateImage && (
                          <button
                            onClick={() =>
                              onOpenCertificate({
                                title: `${job.company} — Certificate of Completion`,
                                issuer: job.company,
                                date: job.date,
                                verificationId: job.credentialId,
                                signatory: job.signatory,
                                fileUrl: job.certificateImage,
                                isPdf: false,
                                description: `Official internship completion certificate recognizing Skandan D Gowda's work as a Web Development Intern.`
                              })
                            }
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-[#0B1020] hover:bg-[#131B2E] text-white transition-all border border-white/10 hover:border-cyan-400/50 shadow-sm"
                          >
                            <Award className="w-3.5 h-3.5 text-cyan-400" />
                            <span>View Certificate</span>
                          </button>
                        )}

                        {job.recommendationImage && (
                          <button
                            onClick={() =>
                              onOpenCertificate({
                                title: `${job.company} — Letter of Recommendation`,
                                issuer: job.company,
                                date: job.date,
                                verificationId: job.credentialId,
                                signatory: job.signatory,
                                fileUrl: job.recommendationImage,
                                pdfUrl: job.recommendationPdf,
                                isPdf: false,
                                description: `Official Letter of Recommendation from SkillCraft Technology commending Skandan D Gowda's technical dedication, problem-solving abilities, and high professionalism.`
                              })
                            }
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-purple-600/20 hover:bg-purple-600/30 text-purple-200 transition-all border border-purple-500/40 hover:border-purple-400"
                          >
                            <FileText className="w-3.5 h-3.5 text-purple-400" />
                            <span>Letter of Recommendation</span>
                          </button>
                        )}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
