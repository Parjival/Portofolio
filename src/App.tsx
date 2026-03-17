import { usePortfolio } from './hooks/usePortfolio';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Activities from './components/Activities';
import { Loader2 } from 'lucide-react';

function App() {
  const {
    profile,
    education,
    projects,
    skills,
    achievements,
    certifications,
    activities,
    loading,
    error,
  } = usePortfolio();

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-400 animate-spin mx-auto mb-4" />
          <p className="text-white text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-6">
          <p className="text-red-400 text-lg mb-4">Error loading portfolio</p>
          <p className="text-slate-400">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero profile={profile} />
      <AboutMe profile={profile} />
      <Education education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Achievements achievements={achievements} />
      <Certifications certifications={certifications} />
      <Activities activities={activities} />

     <footer className="bg-slate-900 text-white py-10 border-t border-white/10">
  <div className="container mx-auto px-6">

    <div className="flex flex-col md:flex-row justify-between items-center gap-6">

      {/* Left - Name & Role */}
      <div className="text-center md:text-left">
        <h2 className="text-lg font-semibold">Irfanul Huda</h2>
        <p className="text-slate-400 text-sm">
          Undergrad Student | AI Researcher | DevOps Enthusiast
        </p>
      </div>

      {/* Middle - Tech Stack */}
      <div className="text-center">
        <p className="text-slate-400 text-sm">
          Built with React, TypeScript, Tailwind CSS & Supabase
        </p>
      </div>

      {/* Right - Links */}
      <div className="flex gap-4">
        <a
          href="https://github.com/Parjival"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition"
        >
          GitHub
        </a>

        <a
          href="linkedin.com/in/irfanul-huda-434526226"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-white transition"
        >
          LinkedIn
        </a>

        <a
          href="mailto:irfan.huda2000@gmail.com"
          className="text-slate-400 hover:text-white transition"
        >
          Email
        </a>
      </div>
    </div>

    {/* Bottom line */}
    <div className="mt-8 text-center text-slate-500 text-sm">
      © {new Date().getFullYear()} Irfanul Huda. All rights reserved.
    </div>

  </div>
</footer>
    </div>
  );
}

export default App;
