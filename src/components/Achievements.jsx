import React, { useState } from 'react';
import { 
  Trophy, 
  Award, 
  BookOpen, 
  Code2, 
  Calendar, 
  Sparkles, 
  PlusCircle, 
  CheckCircle, 
  Medal 
} from 'lucide-react';
import { achievementsData } from '../data/portfolioData';

export default function Achievements() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Certifications', 'Courses', 'Hackathons', 'Awards'];

  const filteredAchievements = filter === 'All'
    ? achievementsData
    : achievementsData.filter(item => item.category === filter);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Certifications':
        return Award;
      case 'Courses':
        return BookOpen;
      case 'Hackathons':
        return Code2;
      case 'Awards':
        return Trophy;
      default:
        return Medal;
    }
  };

  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Milestones & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Achievements & Certifications
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A growing record of certifications, completed coursework, hackathons, and academic milestones.
          </p>

          {/* Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  filter === cat
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25 scale-105'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-indigo-400'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredAchievements.map((item) => {
            const IconComp = getCategoryIcon(item.category);

            return (
              <div
                key={item.id}
                className="group relative rounded-2xl glass-card p-6 border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/90 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 flex items-center justify-center border border-indigo-200 dark:border-indigo-800 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>

                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${item.badgeColor || 'bg-indigo-50 text-indigo-600'}`}>
                      {item.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {item.title}
                  </h3>

                  <div className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <span>{item.issuer}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {item.date}
                    </span>
                  </div>

                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>Verified Student Milestone</span>
                </div>
              </div>
            );
          })}

          {/* Scalable "Add Future Milestone" Card */}
          <div className="relative rounded-2xl p-6 border-2 border-dashed border-slate-300 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/40 flex flex-col justify-center items-center text-center hover:border-indigo-400 transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-3">
              <PlusCircle className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Ready for New Milestones
            </h4>
            <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 max-w-xs leading-relaxed">
              New certifications, hackathon wins, and course credentials can be added anytime in <code className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-indigo-500 font-mono text-[11px]">portfolioData.js</code>.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
