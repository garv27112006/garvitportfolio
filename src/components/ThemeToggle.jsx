import React from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="p-2.5 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
        border-slate-200 bg-white/80 hover:bg-slate-100 text-slate-700 shadow-sm
        dark:border-slate-800 dark:bg-slate-900/80 dark:hover:bg-slate-800 dark:text-slate-200"
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-indigo-600 transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
}
