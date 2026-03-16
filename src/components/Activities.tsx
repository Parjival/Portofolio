import { Activity } from '../types/portfolio';
import { Users } from 'lucide-react';

interface ActivitiesProps {
  activities: Activity[];
}

export default function Activities({ activities }: ActivitiesProps) {
  if (activities.length === 0) return null;

  return (
    <section id="activities" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Users className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Leadership & Activities</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div
                key={activity.id}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-bold text-slate-900">
                    {activity.role}
                  </h3>
                  <p className="text-emerald-600 font-semibold">
                    {activity.organization}
                  </p>
                  {activity.period && (
                    <p className="text-sm text-slate-600">{activity.period}</p>
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
