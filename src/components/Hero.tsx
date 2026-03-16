import { Profile } from '../types/portfolio';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
  if (!profile) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          <img
            src="/profile.jpg"
            alt="Profile"
            className="w-40 h-40 rounded-full mx-auto mb-6"
          />

          <h1 className="text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
            {profile.name}
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto mb-8">
            {profile.summary}
          </p>

          <a
            href="/cv.pdf"
            download
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg inline-block mb-10 transition"
          >
            Download CV
          </a>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300"
            >
              <Mail size={20} />
              <span className="hidden sm:inline">{profile.email}</span>
              <span className="sm:hidden">Email</span>
            </a>

            <a
              href={`tel:${profile.phone}`}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300"
            >
              <Phone size={20} />
              <span className="hidden sm:inline">{profile.phone}</span>
              <span className="sm:hidden">Phone</span>
            </a>

            <a
              href={`https://linkedin.com/in/${profile.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href={`https://github.com/${profile.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-lg transition-all duration-300"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}