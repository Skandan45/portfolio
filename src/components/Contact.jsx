import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare, ArrowUpRight } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isCopied, setIsCopied] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState(null);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Direct mailto generation with prefilled fields
    const subjectEncoded = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const bodyEncoded = encodeURIComponent(
      `Hello Skandan,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent via skandan-portfolio-3d`
    );

    const mailtoLink = `mailto:${personalData.email}?subject=${subjectEncoded}&body=${bodyEncoded}`;
    
    // Open default mail client
    window.location.href = mailtoLink;

    setSubmittedStatus({
      success: true,
      message: `Direct mail composer initialized for ${personalData.email}. Thank you for connecting!`
    });

    // Reset fields
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmittedStatus(null);
    }, 8000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 overflow-hidden bg-navy-950/70">
      {/* Background glow effects */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-electric-500/15 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 -right-40 w-96 h-96 bg-neon-purple/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-electric-400/30 text-xs font-mono text-cyan-400">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>START A CONVERSATION</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-display text-white">
            LET'S <span className="text-gradient-cyan-purple">CONNECT</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Interested in software developer internships, full-stack projects, or technical collaboration? Reach out directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels & Social Hub (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 space-y-6">
              <div>
                <h3 className="text-xl font-bold font-display text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-slate-400 font-sans mt-1">
                  Bengaluru, Karnataka, India • Indian Standard Time (IST)
                </p>
              </div>

              {/* Email Block with Copy Feature */}
              <div className="p-4 rounded-xl bg-navy-900/80 border border-white/10 space-y-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Primary Developer Email
                </span>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-sm sm:text-base font-mono font-semibold text-cyan-300 break-all">
                    {personalData.email}
                  </span>
                  <button
                    onClick={copyEmail}
                    className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-200 transition-colors shrink-0"
                    title="Copy email address"
                  >
                    {isCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
                {isCopied && (
                  <p className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Email copied to clipboard!
                  </p>
                )}
              </div>

              {/* Social Channels List */}
              <div className="space-y-3">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                  Verified Social Networks
                </span>

                <a
                  href={personalData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-navy-800/50 hover:bg-navy-800 border border-white/5 hover:border-cyan-400/40 flex items-center justify-between text-xs font-mono text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-slate-400 group-hover:text-cyan-400 transition-colors" />
                    <span>github.com/Skandan45</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                <a
                  href={personalData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-navy-800/50 hover:bg-navy-800 border border-white/5 hover:border-electric-400/40 flex items-center justify-between text-xs font-mono text-slate-200 transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-slate-400 group-hover:text-electric-400 transition-colors" />
                    <span>linkedin.com/in/skandan-d-gowda-208b52401</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-electric-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>

              {/* Availability Status Box */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-3">
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                <div className="text-xs font-mono">
                  <p className="text-emerald-300 font-bold">Currently Open to Internships</p>
                  <p className="text-slate-400 text-[11px]">Software Development & Web Engineering</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Validated Interactive Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-card border border-white/10 relative">
              <h3 className="text-xl font-bold font-display text-white mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Rivera"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.name
                          ? 'border-rose-500/70 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-400 focus:shadow-glow-cyan'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-slate-300 block">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                        errors.email
                          ? 'border-rose-500/70 focus:border-rose-400'
                          : 'border-white/10 focus:border-cyan-400 focus:shadow-glow-cyan'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Developer Internship Opportunity"
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all ${
                      errors.subject
                        ? 'border-rose-500/70 focus:border-rose-400'
                        : 'border-white/10 focus:border-cyan-400 focus:shadow-glow-cyan'
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Your Message *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about the role, project scope, or opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-navy-900/90 border text-sm text-white placeholder-slate-500 focus:outline-none transition-all resize-none ${
                      errors.message
                        ? 'border-rose-500/70 focus:border-rose-400'
                        : 'border-white/10 focus:border-cyan-400 focus:shadow-glow-cyan'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-[11px] font-mono text-rose-400 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submission Status Notice */}
                {submittedStatus && (
                  <div className="p-3.5 rounded-xl bg-cyan-400/15 border border-cyan-400/40 text-xs font-mono text-cyan-300 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{submittedStatus.message}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-mono text-xs font-bold tracking-wider bg-gradient-to-r from-electric-500 via-cyan-400 to-neon-purple hover:from-electric-400 hover:to-neon-violet text-slate-950 transition-all shadow-glow-cyan flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE DIRECTLY</span>
                </button>

                <p className="text-[11px] font-mono text-slate-400 text-center pt-2">
                  🔒 Direct client transmission. No mock backend or fake email queues.
                </p>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
