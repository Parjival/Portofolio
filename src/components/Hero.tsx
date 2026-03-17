import { Profile } from '../types/portfolio';
import { Mail, Phone, Linkedin, Github, Download, Sparkles } from 'lucide-react';

interface HeroProps {
  profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
  if (!profile) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>

      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50"></div>

      <div className="container relative mx-auto px-6 py-20 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl mx-auto">

          <div className="flex-shrink-0 relative group animate-fade-in">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative">
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="w-72 h-96 object-cover rounded-2xl shadow-2xl border border-white/10 transform transition duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full blur-2xl opacity-50"></div>
            </div>
          </div>

          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-in-up">

            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full text-blue-400 text-sm font-medium mb-4">
              <Sparkles size={16} className="animate-pulse" />
              <span>Available for opportunities</span>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent leading-tight">
                {profile.name}
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {profile.summary}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Mail size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Email</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Phone size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">Phone</span>
              </a>

              <a
                href={`https://linkedin.com/in/${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Linkedin size={18} className="text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">LinkedIn</span>
              </a>

              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Github size={18} className="text-white-400 group-hover:scale-110 transition-transform" />
                <span className="text-sm font-medium">GitHub</span>
              </a>
            </div>

            <div className="pt-4">
              <a
                href="/Irfanul_Huda.pdf"
                download
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                <span>Download CV</span>
                <div className="absolute inset-0 rounded-xl bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur"></div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
}
