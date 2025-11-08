import React from 'react';

const choices = [
  { key: 'students', label: 'Prospective Student' },
  { key: 'research', label: 'Researcher' },
  { key: 'creative', label: 'Creator' },
  { key: 'careers', label: 'Career Services' },
];

export default function ChoiceTabs({ onSelect, activeKey }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 max-w-3xl mx-auto">
      {choices.map((c) => {
        const isActive = activeKey === c.key;
        return (
          <button
            key={c.key}
            onClick={() => onSelect?.(c.key)}
            className={`group relative overflow-hidden rounded-xl border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60 ${
              isActive
                ? 'border-amber-400/70 bg-amber-400/10 shadow-[0_0_0_1px_rgba(251,191,36,0.25),0_8px_30px_rgba(0,0,0,0.35)]'
                : 'border-slate-700/70 bg-slate-900/40 hover:bg-slate-900/70'
            }`}
          >
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-amber-300/10 via-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="px-4 py-3 md:px-5 md:py-4 text-center">
              <span
                className={`text-sm md:text-base font-semibold tracking-wide ${
                  isActive ? 'text-amber-300' : 'text-slate-200 group-hover:text-slate-100'
                }`}
                style={{ fontFeatureSettings: '"ss01" on, "cv02" on' }}
              >
                {c.label}
              </span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
