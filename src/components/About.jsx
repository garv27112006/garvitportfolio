import React from 'react';
import { 
  User, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Compass, 
  Target, 
  Workflow, 
  Code,
  ArrowUpRight 
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: Code,
      title: "Modern Web Engineering",
      desc: "Passionate about creating clean, accessible, and high-performance user interfaces using modern tools like React, Tailwind CSS, and JavaScript.",
      color: "text-indigo-500",
      bg: "bg-indigo-50 dark:bg-indigo-950/40 border-indigo-200 dark:border-indigo-800/60"
    },
    {
      icon: Sparkles,
      title: "Artificial & Generative AI",
      desc: "Curious explorer of AI algorithms, large language models, prompt workflows, and practical applications that enhance digital products.",
      color: "text-purple-500",
      bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-200 dark:border-purple-800/60"
    },
    {
      icon: Workflow,
      title: "Digital Productivity Systems",
      desc: "Dedicated to designing efficient study workflows, automation habits, and tools that reduce friction and maximize student learning throughput.",
      color: "text-cyan-500",
      bg: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-800/60"
    },
    {
      icon: Target,
      title: "Hands-on Practical Building",
      desc: "Strong believer in learning by doing. Every theoretical concept is reinforced through real-world experiments and tangible portfolio projects.",
      color: "text-emerald-500",
      bg: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-800/60"
    }
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <User className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Passionate Student, Curious Technologist
          </h2>
          <p className="mt-3 text-base text-slate-600 dark:text-slate-400 max-w-2xl">
            A closer look into my background, academic mindset, and what fuels my curiosity in tech.
          </p>
        </div>

        {/* Narrative & Quick Info Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-card rounded-2xl p-7 sm:p-9 border border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Hello! I'm <span className="text-indigo-600 dark:text-indigo-400">{personalInfo.name}</span>.
              </h3>
              
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.detailedBio.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Personal values / tags */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {[
                  "Problem Solver",
                  "Continuous Learner",
                  "Collaborative Teammate",
                  "AI & Web Explorer",
                  "Future Software Engineer"
                ].map((item, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700/60"
                  >
                    #{item}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote Card */}
            <div className="rounded-2xl p-6 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-slate-900/40 border border-indigo-500/20 backdrop-blur-sm text-slate-200">
              <p className="italic text-sm sm:text-base font-serif">
                "I believe that technology and artificial intelligence are at their best when they simplify complexities and elevate human productivity."
              </p>
              <div className="mt-3 text-xs font-mono text-indigo-400">
                — Garvit Agarwal, B.Tech Student
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars & Attributes */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="text-xs uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400 px-1">
              What I Focus On
            </h4>

            <div className="grid grid-cols-1 gap-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 hover:border-indigo-500/30 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2.5 rounded-xl border ${pillar.bg} ${pillar.color} shrink-0`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h5 className="text-base font-bold text-slate-900 dark:text-white">
                          {pillar.title}
                        </h5>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Details Card */}
            <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block font-medium">Institution</span>
                  <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">{personalInfo.college}</span>
                </div>
                <div>
                  <span className="text-slate-500 dark:text-slate-400 block font-medium">Base Location</span>
                  <span className="font-bold text-slate-900 dark:text-white mt-0.5 block">{personalInfo.location}</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
