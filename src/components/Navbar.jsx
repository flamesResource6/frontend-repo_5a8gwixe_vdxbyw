import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 bg-slate-950/70 border-b border-slate-800/70">
      <div className="max-w-7xl mx-auto px-6 h-14 md:h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
            <GraduationCap className="size-5" />
          </div>
          <div>
            <p className="text-slate-100 font-extrabold tracking-tight leading-none">Talentscape</p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400/80">University Exploration</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-300/90">
          <a href="#" className="hover:text-emerald-300 transition-colors">Programs</a>
          <a href="#" className="hover:text-emerald-300 transition-colors">Research</a>
          <a href="#" className="hover:text-emerald-300 transition-colors">Studios</a>
          <a href="#" className="hover:text-emerald-300 transition-colors">Careers</a>
        </nav>
      </div>
    </header>
  );
}
