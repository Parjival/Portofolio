import { Education as EducationType } from '../types/portfolio';
import { GraduationCap } from 'lucide-react';

interface EducationProps {
  education: EducationType[];
}

export default function Education({ education }: EducationProps) {
  if (education.length === 0) return null;

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <GraduationCap className="text-blue-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Education</h2>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {edu.institution}
                    </h3>
                    <p className="text-lg text-slate-700 mb-2">{edu.degree}</p>
                    {edu.grade && (
                      <p className="text-blue-600 font-semibold">{edu.grade}</p>
                    )}
                  </div>
                  {edu.period && (
                    <div className="text-slate-600 font-medium md:text-right">
                      {edu.period}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
