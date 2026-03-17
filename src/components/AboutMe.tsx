import { Profile } from '../types/portfolio';
import { User } from 'lucide-react';

interface AboutMeProps {
  profile: Profile | null;
}

export default function AboutMe({ profile }: AboutMeProps) {
  if (!profile?.about_me) return null;

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <User className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-lg">
            <p className="text-lg text-slate-700 leading-relaxed">
              {profile.about_me}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
