import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navbar } from './components/Navbar';
import { AIChatbot } from './components/AIChatbot';
import { Footer } from './components/Footer';
import { Modals } from './components/Modals';
import {
  HomePage,
  AboutPage,
  SkillsPage,
  ExperiencePage,
  ProjectsPage,
  EducationPage,
  AchievementsPage,
  ResumePage,
  ContactPage,
} from './pages';
import { Project, Certification } from './types';

type Theme = 'dark' | 'light';

const THEME_KEY = 'azhar-theme-v2'; // v2: multi-page site defaults to the professional light theme

function getInitialTheme(): Theme {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch {
    // Storage unavailable — fall through to default.
  }
  return 'light'; // Light-first professional design.
}

const BASE_TITLE = 'Muhammad Azhar — Software Engineer & Developer';

const PAGE_TITLES: Record<string, string> = {
  '/': BASE_TITLE,
  '/about': `About · Muhammad Azhar`,
  '/skills': `Skills · Muhammad Azhar`,
  '/experience': `Experience · Muhammad Azhar`,
  '/projects': `Projects · Muhammad Azhar`,
  '/education': `Education · Muhammad Azhar`,
  '/achievements': `Achievements · Muhammad Azhar`,
  '/resume': `Resume · Muhammad Azhar`,
  '/contact': `Contact · Muhammad Azhar`,
};

/* All routes of the app — one keyed component so AnimatePresence can animate it. */
const AnimatedRoutes: React.FC<{
  location: ReturnType<typeof useLocation>;
  theme: Theme;
  onSelectProject: (p: Project) => void;
  onSelectCert: (c: Certification) => void;
  onOpenResumeModal: () => void;
}> = ({ location, theme, onSelectProject, onSelectCert, onOpenResumeModal }) => (
  <Routes location={location}>
    <Route path="/" element={<HomePage theme={theme} />} />
    <Route path="/about" element={<AboutPage theme={theme} />} />
    <Route path="/skills" element={<SkillsPage theme={theme} />} />
    <Route path="/experience" element={<ExperiencePage theme={theme} />} />
    <Route
      path="/projects"
      element={<ProjectsPage theme={theme} onSelectProject={onSelectProject} />}
    />
    <Route path="/education" element={<EducationPage theme={theme} />} />
    <Route
      path="/achievements"
      element={<AchievementsPage theme={theme} onSelectCert={onSelectCert} />}
    />
    <Route
      path="/resume"
      element={<ResumePage theme={theme} onOpenResumeModal={onOpenResumeModal} />}
    />
    <Route path="/contact" element={<ContactPage theme={theme} />} />
    <Route path="*" element={<HomePage theme={theme} />} />
  </Routes>
);

interface ShellProps {
  theme: Theme;
  setTheme: (updater: (t: Theme) => Theme) => void;
  onSelectProject: (p: Project) => void;
  onSelectCert: (c: Certification) => void;
  onOpenResumeModal: () => void;
  onCloseProject: () => void;
  onCloseCert: () => void;
  onCloseResumeModal: () => void;
  onOpenPrivacyModal: () => void;
  onOpenTermsModal: () => void;
  onOpenSitemapModal: () => void;
  onClosePrivacyModal: () => void;
  onCloseTermsModal: () => void;
  onCloseSitemapModal: () => void;
  selectedProject: Project | null;
  selectedCert: Certification | null;
  resumeModalOpen: boolean;
  privacyModalOpen: boolean;
  termsModalOpen: boolean;
  sitemapModalOpen: boolean;
}

/* Routed shell: chrome (navbar/footer/chatbot/modals) is persistent, while the
   page swaps with a keyed rise+fade transition. Also resets scroll and updates
   the tab title per route so every page feels like a real, separate page. */
const Shell: React.FC<ShellProps> = ({
  theme,
  setTheme,
  onSelectProject,
  onSelectCert,
  onOpenResumeModal,
  onCloseProject,
  onCloseCert,
  onCloseResumeModal,
  onOpenPrivacyModal,
  onOpenTermsModal,
  onOpenSitemapModal,
  onClosePrivacyModal,
  onCloseTermsModal,
  onCloseSitemapModal,
  selectedProject,
  selectedCert,
  resumeModalOpen,
  privacyModalOpen,
  termsModalOpen,
  sitemapModalOpen,
}) => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = PAGE_TITLES[location.pathname] ?? BASE_TITLE;
  }, [location.pathname]);

  return (
    <div className="min-h-screen font-sans bg-[color:var(--color-bg)] text-[color:var(--color-ink)] selection:bg-primary-500/30">
      <BackgroundEffects theme={theme} />

      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
        onOpenResumeModal={onOpenResumeModal}
      />

      <main className="relative z-10">
        <AnimatePresence mode="wait" initial={false}>
          {/* key = pathname so route changes re-mount the page with its entrance animation */}
          <AnimatedRoutes
            key={location.pathname}
            location={location}
            theme={theme}
            onSelectProject={onSelectProject}
            onSelectCert={onSelectCert}
            onOpenResumeModal={onOpenResumeModal}
          />
        </AnimatePresence>
      </main>

      <AIChatbot
        theme={theme}
        onOpenResumeModal={onOpenResumeModal}
      />

      <Footer
        theme={theme}
        onOpenPrivacyModal={onOpenPrivacyModal}
        onOpenTermsModal={onOpenTermsModal}
        onOpenSitemapModal={onOpenSitemapModal}
      />

      <Modals
        theme={theme}
        resumeModalOpen={resumeModalOpen}
        onCloseResumeModal={onCloseResumeModal}
        selectedProject={selectedProject}
        onCloseProjectModal={onCloseProject}
        selectedCert={selectedCert}
        onCloseCertModal={onCloseCert}
        privacyModalOpen={privacyModalOpen}
        onClosePrivacyModal={onClosePrivacyModal}
        termsModalOpen={termsModalOpen}
        onCloseTermsModal={onCloseTermsModal}
        sitemapModalOpen={sitemapModalOpen}
        onCloseSitemapModal={onCloseSitemapModal}
      />
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
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

  return (
    <BrowserRouter>
      <Shell
        theme={theme}
        setTheme={setTheme}
        onSelectProject={setSelectedProject}
        onSelectCert={setSelectedCert}
        onOpenResumeModal={() => setResumeModalOpen(true)}
        onCloseProject={() => setSelectedProject(null)}
        onCloseCert={() => setSelectedCert(null)}
        onCloseResumeModal={() => setResumeModalOpen(false)}
        onOpenPrivacyModal={() => setPrivacyModalOpen(true)}
        onOpenTermsModal={() => setTermsModalOpen(true)}
        onOpenSitemapModal={() => setSitemapModalOpen(true)}
        onClosePrivacyModal={() => setPrivacyModalOpen(false)}
        onCloseTermsModal={() => setTermsModalOpen(false)}
        onCloseSitemapModal={() => setSitemapModalOpen(false)}
        selectedProject={selectedProject}
        selectedCert={selectedCert}
        resumeModalOpen={resumeModalOpen}
        privacyModalOpen={privacyModalOpen}
        termsModalOpen={termsModalOpen}
        sitemapModalOpen={sitemapModalOpen}
      />
    </BrowserRouter>
  );
}
