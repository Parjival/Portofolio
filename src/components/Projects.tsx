import { Project } from '../types/portfolio';
import { Code2, Calendar } from 'lucide-react';

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Code2 className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-slate-900">
                    {project.title}
                  </h3>
                  {project.period && (
                    <div className="flex items-center gap-1 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  )}
                </div>

                {project.type && (
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
                    {project.type}
                  </div>
                )}

                <p className="text-slate-700 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.split(', ').map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
