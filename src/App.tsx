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

type Theme = 'dark' | 'light';

const THEME_KEY = 'azhar-theme';

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // Storage unavailable — fall through to default.
  }
  return 'dark'; // Dark-first, per design.
}

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);
  const [sitemapModalOpen, setSitemapModalOpen] = useState(false);

  // Persist theme and reflect it on <html data-theme="...">.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Storage unavailable — theme stays in memory for this session.
    }
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'achievements', 'resume', 'contact'];
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans bg-[color:var(--color-bg)] text-[color:var(--color-ink)] selection:bg-primary-500/30">
      <BackgroundEffects theme={theme} />

      <Navbar
        theme={theme}
        activeSection={activeSection}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      />

      <main className="relative z-10">
        <Hero theme={theme} />

        <About theme={theme} />
        <Skills theme={theme} />
        <Experience theme={theme} />

        <Projects
          theme={theme}
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        <Education theme={theme} />
        <Certifications
          theme={theme}
          onSelectCert={(cert) => setSelectedCert(cert)}
        />

        <ResumeSection
          theme={theme}
          onOpenResumeModal={() => setResumeModalOpen(true)}
        />

        <Contact theme={theme} />
      </main>

      <AIChatbot
        theme={theme}
        onOpenResumeModal={() => setResumeModalOpen(true)}
      />

      <Footer
        theme={theme}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
        onOpenSitemapModal={() => setSitemapModalOpen(true)}
      />

      <Modals
        theme={theme}
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
