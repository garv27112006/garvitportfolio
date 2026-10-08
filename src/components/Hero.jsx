import React from 'react';
import { ArrowRight, Mail, Linkedin, Sparkles, MapPin, GraduationCap, Code2, Cpu, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  const handleScroll = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/20 via-purple-500/15 to-cyan-500/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Introductions & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold tracking-wide mb-6 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>

            {/* Main Greeting & Name */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Hi, I'm{' '}
              <span className="text-gradient hover:opacity-95 transition-opacity">
                {personalInfo.name}
              </span>
            </h1>

            {/* Role / Tagline */}
            <div className="mt-3 flex items-center gap-2">
              <span className="text-lg sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                {personalInfo.subtitle}
              </span>
            </div>

            {/* College & Location Chips */}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-medium">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <GraduationCap className="w-4 h-4 text-indigo-500" />
                {personalInfo.college}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                <MapPin className="w-4 h-4 text-rose-500" />
                {personalInfo.location}
              </span>
            </div>

            {/* Professional Introduction */}
            <p className="mt-6 text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              {personalInfo.shortBio}
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => handleScroll('#projects')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-600 hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => handleScroll('#contact')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:border-indigo-500/50 hover:bg-slate-50 dark:hover:bg-slate-800/80 shadow-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                <Mail className="w-4 h-4 text-indigo-500" />
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                title="Garvit Agarwal on LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-[#0077b5]" />
                <span className="sm:hidden">LinkedIn</span>
              </a>
            </div>

            {/* Quick Highlights Bar */}
            <div className="mt-10 pt-8 border-t border-slate-200 dark:border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono">
                    {stat.value}
                  </span>
                  <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Premium Interactive Tech Profile Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md relative group">
              {/* Outer decorative gradient frame glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition duration-500" />

              <div className="relative rounded-2xl glass-card overflow-hidden border border-slate-200/80 dark:border-slate-800/80 bg-white/90 dark:bg-slate-900/90 shadow-2xl p-6 sm:p-7">
                
                {/* Code Terminal Top Header */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center space-x-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-indigo-500" />
                    <span>garvit.config.js</span>
                  </div>
                </div>

                {/* Profile Identity Snippet */}
                <div className="mt-5 space-y-4 font-mono text-xs sm:text-sm">
                  <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/90">
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mb-1">
                      const student = &#123;
                    </p>
                    <div className="pl-4 space-y-1 text-slate-700 dark:text-slate-300">
                      <p><span className="text-purple-600 dark:text-purple-400">name:</span> <span className="text-emerald-600 dark:text-emerald-400">"{personalInfo.name}"</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">program:</span> <span className="text-emerald-600 dark:text-emerald-400">"B.Tech"</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">university:</span> <span className="text-emerald-600 dark:text-emerald-400">"JECRC University"</span>,</p>
                      <p><span className="text-purple-600 dark:text-purple-400">focus:</span> [<span className="text-cyan-600 dark:text-cyan-400">"AI"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Web Dev"</span>, <span className="text-cyan-600 dark:text-cyan-400">"Productivity"</span>],</p>
                      <p><span className="text-purple-600 dark:text-purple-400">openForRoles:</span> <span className="text-amber-600 dark:text-amber-400">true</span></p>
                    </div>
                    <p className="text-indigo-600 dark:text-indigo-400 font-semibold mt-1">&#125;;</p>
                  </div>

                  {/* Highlights checklist */}
                  <div className="space-y-2 pt-2 text-xs font-sans">
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>Exploring Modern Generative AI & Large Language Models</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                      <span>Crafting responsive, clean web experiences</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>Building student-centric digital productivity systems</span>
                    </div>
                  </div>

                  {/* Tech Pill Clouds */}
                  <div className="pt-2 flex flex-wrap gap-1.5 font-sans text-xs">
                    {['Python', 'Generative AI', 'JavaScript', 'React', 'HTML/CSS', 'Productivity'].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md bg-indigo-50 dark:bg-indigo-950/50 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/60 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
