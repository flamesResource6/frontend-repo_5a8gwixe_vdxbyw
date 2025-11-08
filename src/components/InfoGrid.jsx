import React from 'react';
import { BookOpen, FlaskConical, Sparkles, Briefcase } from 'lucide-react';

const content = {
  students: {
    icon: BookOpen,
    title: 'Pathways for Prospective Students',
    body:
      'Explore programs, scholarships, and mentorships tailored to your strengths. Build a foundation for excellence with curated guidance.',
  },
  research: {
    icon: FlaskConical,
    title: 'Frontier Research Opportunities',
    body:
      'Join laboratories, publications, and grants. Collaborate with leading faculty on high-impact projects that shape the future.',
  },
  creative: {
    icon: Sparkles,
    title: 'Studios for Creators & Innovators',
    body:
      'From design studios to maker spaces, transform ideas into artifacts. Showcase your work and grow your creative portfolio.',
  },
  careers: {
    icon: Briefcase,
    title: 'Career Services & Industry',
    body:
      'Internships, fellowships, and placements with world-class organizations. Map your path and accelerate your journey.',
  },
};

export default function InfoGrid({ activeKey }) {
  const { icon: Icon, title, body } = content[activeKey] ?? content.students;
  return (
    <section className="relative py-12 md:py-16 bg-gradient-to-b from-slate-950 to-slate-950/95">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(16,185,129,0.08),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-[1.1fr,1fr] gap-8 items-start">
          <div className="rounded-2xl border border-slate-800/80 bg-slate-900/50 p-6 md:p-8 shadow-lg shadow-black/30">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
                <Icon className="size-5 md:size-6" />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight">
                {title}
              </h2>
            </div>
            <p className="mt-4 text-slate-300/90 leading-relaxed">
              {body}
            </p>
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-24 rounded-xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-800/80 backdrop-blur-sm flex items-center justify-center text-slate-300/80 text-sm"
                >
                  Highlight {i + 1}
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/40">
            <img
              src="https://images.unsplash.com/photo-1529336953121-a0ce23dba610?q=80&w=1600&auto=format&fit=crop"
              alt="Scholarly ambiance"
              className="w-full h-72 md:h-full object-cover object-center scale-[1.02]"
            />
            <div className="p-5 md:p-6">
              <p className="text-slate-300/90 text-sm md:text-base">
                A refined environment where ambition meets opportunity. Our framework prioritizes clarity, mentorship, and measurable outcomes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
