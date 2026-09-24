import React, { useState, useEffect } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { AIChatbot } from './components/AIChatbot';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import { Project, Certification } from './types';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Modal states
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);

  // Observe active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'education', 'experience', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Dynamic Canvas Background particles & glow */}
      <BackgroundEffects theme="dark" />

      {/* Sticky Navigation Header */}
      <Navbar
        theme="dark"
        activeSection={activeSection}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          theme="dark"
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        <About theme="dark" />

        <Education theme="dark" />

        <Experience theme="dark" />

        <Skills theme="dark" />

        <Certifications
          theme="dark"
          onSelectCert={(cert) => setSelectedCert(cert)}
        />

        <Projects
          theme="dark"
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <ResumeSection
          theme="dark"
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        <Contact theme="dark" />
      </main>

      {/* Floating AI Portfolio Assistant Chatbot */}
      <AIChatbot
        theme="dark"
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      {/* Footer */}
      <Footer
        theme="dark"
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
        onOpenSitemapModal={() => setSitemapModalOpen(true)}
      />

      {/* Modals & Dialogs */}
      <Modals
        theme="dark"
        resumeModalOpen={resumeModalOpen}
        onCloseResumeModal={() => setResumeModalOpen(false)}
        selectedProject={selectedProject}
        onCloseProjectModal={() => setSelectedProject(null)}
        selectedCert={selectedCert}
        onCloseCertModal={() => setSelectedCert(null)}
        privacyModalOpen={privacyModalOpen}
        onClosePrivacyModal={() => setPrivacyModalOpen(false)}
        termsModalOpen={termsModalOpen}
        onCloseTermsModal={() => setTermsModalOpen(false)}
        sitemapModalOpen={sitemapModalOpen}
        onCloseSitemapModal={() => setSitemapModalOpen(false)}
      />
    </div>
  );
}
