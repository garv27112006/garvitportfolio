import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, Award, CheckCircle } from 'lucide-react';
import { educationData } from '../data/portfolioData';

export default function Education() {
  const edu = educationData[0];

  return (
    <section id="education" className="py-24 relative bg-slate-100/50 dark:bg-slate-950/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Education & Learning Path
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            My formal engineering coursework and the foundational technical areas I am mastering.
          </p>
        </div>

        {/* Education Timeline / Showcase Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative glass-card rounded-3xl p-7 sm:p-10 border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 shadow-xl overflow-hidden">
            
            {/* Top Accent Gradient Border */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500" />

            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
              
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-indigo-600 to-purple-600 text-white flex items-center justify-center shadow-lg shadow-indigo-500/30 shrink-0">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800 mb-1.5">
                    {edu.status}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400 mt-1">
                    {edu.institution}
                  </div>
                </div>
              </div>

              {/* Badges for Year & Location */}
              <div className="flex flex-wrap md:flex-col gap-2 shrink-0 md:text-right">
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-3.5 h-3.5 text-indigo-500" />
                  <span>{edu.period}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                  <MapPin className="w-3.5 h-3.5 text-rose-500" />
                  <span>{edu.location}</span>
                </div>
              </div>

            </div>

            {/* Description */}
            <p className="mt-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
              {edu.description}
            </p>

            {/* Relevant Learning Areas */}
            <div className="mt-8">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4 text-indigo-500" />
                <h4 className="text-sm uppercase tracking-wider font-bold text-slate-900 dark:text-white">
                  Relevant Learning Areas & Coursework
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {edu.learningAreas.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/80 dark:border-slate-800/80 hover:border-indigo-500/40 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-200">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Extra academic highlights */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Active coursework combining theory with live coding</span>
              </div>
              <div className="font-mono text-indigo-600 dark:text-indigo-400 font-medium">
                JECRC University • Department of Engineering
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
