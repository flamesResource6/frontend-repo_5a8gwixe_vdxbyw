import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChoiceTabs from './components/ChoiceTabs';
import InfoGrid from './components/InfoGrid';

export default function App() {
  const [activeKey, setActiveKey] = useState('students');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <main className="pt-14 md:pt-16">
        <div className="relative">
          <Hero activeKey={activeKey} onSelect={setActiveKey} />
          <div className="absolute bottom-6 left-0 right-0 px-6">
            <ChoiceTabs activeKey={activeKey} onSelect={setActiveKey} />
          </div>
        </div>

        <InfoGrid activeKey={activeKey} />

        <footer className="border-t border-slate-800/70 bg-slate-950/80">
          <div className="max-w-7xl mx-auto px-6 py-10 md:py-12 grid md:grid-cols-3 gap-6 text-sm text-slate-400">
            <div>
              <p className="font-semibold text-slate-200">Our Commitment</p>
              <p className="mt-2 leading-relaxed">
                We connect drive with direction — aligning talent, mentorship, and opportunity to deliver transformative outcomes.
              </p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">Contact</p>
              <p className="mt-2">admissions@talentscape.edu</p>
              <p>+1 (555) 123-4567</p>
            </div>
            <div>
              <p className="font-semibold text-slate-200">Legal</p>
              <p className="mt-2">Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
