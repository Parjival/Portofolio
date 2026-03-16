import { Achievement } from '../types/portfolio';
import { Trophy } from 'lucide-react';

interface AchievementsProps {
  achievements: Achievement[];
}

export default function Achievements({ achievements }: AchievementsProps) {
  if (achievements.length === 0) return null;

  const groupedAchievements = achievements.reduce((acc, achievement) => {
    if (!acc[achievement.category]) {
      acc[achievement.category] = [];
    }
    acc[achievement.category].push(achievement);
    return acc;
  }, {} as Record<string, Achievement[]>);

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-emerald-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-3 mb-12">
            <Trophy className="text-emerald-600" size={32} />
            <h2 className="text-4xl font-bold text-slate-900">Achievements</h2>
          </div>

          <div className="space-y-6">
            {Object.entries(groupedAchievements).map(([category, items]) => (
              <div
                key={category}
                className="bg-white p-6 rounded-xl border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-bold text-emerald-700 mb-4">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map((achievement) => (
                    <li
                      key={achievement.id}
                      className="flex items-start gap-3 text-slate-700"
                    >
                      <div className="w-2 h-2 rounded-full bg-emerald-500 mt-2 flex-shrink-0"></div>
                      <span className="leading-relaxed">{achievement.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
