import { Profile } from '../types/portfolio';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

interface HeroProps {
  profile: Profile | null;
}

export default function Hero({ profile }: HeroProps) {
  if (!profile) return null;

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6 py-20">
        
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-5xl mx-auto">

          {/* Image */}
          <div className="flex-shrink-0">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="w-64 h-80 object-cover rounded-xl shadow-lg border border-white/10"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left">

            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              {profile.name}
            </h1>

            <p className="text-lg text-slate-300 mb-6 max-w-xl">
              {profile.summary}
            </p>

            {/* Contact */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center md:justify-start">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"
              >
                <Mail size={18} />
                <span>Email</span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"
              >
                <Phone size={18} />
                <span>Phone</span>
              </a>

              <a
                href={`https://linkedin.com/in/${profile.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>

              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Download CV (lower placement) */}
            <div className="mt-6">
              <a
                href="/Irfanul_Huda.pdf"
                download
                className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg inline-block transition"
              >
                Download CV
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}