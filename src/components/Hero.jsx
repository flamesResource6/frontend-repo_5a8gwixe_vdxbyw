import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero({ onSelect, activeKey }) {
  return (
    <section className="relative h-[70vh] md:h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950/90 pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-50">
            <span className="font-serif italic text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-emerald-200 to-emerald-400 drop-shadow-[0_0_15px_rgba(16,185,129,0.25)]">
              Unlock Your Potential!
            </span>
          </h1>
          <p className="mt-4 md:mt-6 text-slate-300/90 text-sm md:text-base lg:text-lg">
            Discover pathways in academia, research, creativity, and careers — designed for ambitious minds ready to excel.
          </p>
        </div>

        <div className="mt-8 md:mt-10 w-full">
          {/* Choice Tabs injected here by parent */}
        </div>
      </div>
    </section>
  );
}
