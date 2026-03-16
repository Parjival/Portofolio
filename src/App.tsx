import { usePortfolio } from './hooks/usePortfolio';
import Hero from './components/Hero';
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
      <Education education={education} />
      <Projects projects={projects} />
      <Skills skills={skills} />
      <Achievements achievements={achievements} />
      <Certifications certifications={certifications} />
      <Activities activities={activities} />

      <footer className="bg-slate-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-400">
            Built with React, TypeScript, Tailwind CSS & Supabase
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
