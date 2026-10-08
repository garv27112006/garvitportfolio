import React, { useState } from 'react';
import { 
  Code2, 
  Palette, 
  FileCode2, 
  Terminal, 
  Brain, 
  Sparkles, 
  Globe, 
  Zap, 
  Layers,
  CheckCircle2
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon strings to Lucide components
const iconMap = {
  Code2,
  Palette,
  FileCode2,
  Terminal,
  Brain,
  Sparkles,
  Globe,
  Zap
};

export default function Skills() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Development', 'Programming', 'AI & Intelligence', 'Productivity'];

  const filteredSkills = filter === 'All' 
    ? skillsData 
    : skillsData.filter(skill => {
        if (filter === 'Web Development') {
          return skill.category === 'Web Development' || skill.category === 'Core Tech';
        }
        if (filter === 'Programming') {
          return skill.category.includes('Programming');
        }
        return skill.category === filter;
      });

  return (
    <section id="skills" className="py-24 relative">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Toolkit</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Skills & Core Competencies
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A comprehensive overview of programming languages, frameworks, AI concepts, and productivity tools I actively build with.
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

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;

            return (
              <div
                key={skill.name}
                className="group relative rounded-2xl glass-card p-6 border border-slate-200/90 dark:border-slate-800/90 bg-white/90 dark:bg-slate-900/90 hover:border-indigo-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Top header: Icon + Level pill */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.badgeColor} p-2.5 text-white shadow-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60">
                      {skill.level}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </h3>
                  <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {skill.category}
                  </div>

                  {/* Description */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {skill.description}
                  </p>
                </div>

                {/* Bottom active learning badge */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Applied in active projects</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skill Summary Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 border border-indigo-500/20 text-center max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="flex h-3 w-3 rounded-full bg-indigo-500 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium">
              Continuously adopting modern frameworks, developer tools, and practical AI implementations through hands-on coursework and projects.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
