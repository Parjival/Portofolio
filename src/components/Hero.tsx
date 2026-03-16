import { Profile } from '../types/portfolio';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
  if (!profile) return null;

  return (
    <div className="text-center">
  <img
    src="/profile.jpg"
    alt="Profile"
    className="w-40 h-40 rounded-full mx-auto mb-4"/>

  <h1 className="text-4xl font-bold">Irfanul Huda</h1>
</div>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
  <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

  <div className="text-center z-10">
    <img
      src="/profile.jpg"
      alt="Profile"
      className="w-40 h-40 rounded-full mx-auto mb-4"
    />

    <h1 className="text-4xl font-bold">Irfanul Huda</h1>

    <a
      href="/cv.pdf"
      download
      className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4 inline-block"
    >
      Download CV
    </a>
  </div>
</section>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
              {profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto">
              {profile.summary}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">{profile.email}</span>
              <span className="sm:hidden">Email</span>
            </a>
            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">{profile.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>
            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300 hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
