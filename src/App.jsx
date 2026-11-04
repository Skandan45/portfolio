import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CertificateModal } from './components/CertificateModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { useSmoothScroll } from './hooks/useSmoothScroll';

export function App() {
  // Initialize Lenis smooth scroll
  useSmoothScroll();

  const [activeSection, setActiveSection] = useState('hero');
  const [selectedCertificate, setSelectedCertificate] = useState(null);
  const [isCertModalOpen, setIsCertModalOpen] = useState(false);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);

  // Intersection Observer to track active section for Navbar
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'skills', 'experience', 'projects', 'certificates', 'education', 'contact'];
    
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((item) => {
        if (item && item.observer && item.el) {
          item.observer.unobserve(item.el);
        }
      });
    };
  }, []);

  const handleOpenCertificate = (cert) => {
    setSelectedCertificate(cert);
    setIsCertModalOpen(true);
  };

  const handleCloseCertificate = () => {
    setIsCertModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-[#050509] text-white selection:bg-neon-purple selection:text-white relative">
      {/* Sticky Glass Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience onOpenCertificate={handleOpenCertificate} />
        <Projects onOpenProjectModal={() => setIsProjectModalOpen(true)} />
        <Certifications onOpenCertificate={handleOpenCertificate} />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <CertificateModal
        certificate={selectedCertificate}
        isOpen={isCertModalOpen}
        onClose={handleCloseCertificate}
      />

      <ProjectDetailModal
        isOpen={isProjectModalOpen}
        onClose={() => setIsProjectModalOpen(false)}
      />
    </div>
  );
}

export default App;
