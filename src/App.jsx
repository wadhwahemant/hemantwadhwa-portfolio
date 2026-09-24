import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import BootScreen from './components/os/BootScreen';
import OsInterface from './components/os/OsInterface';

function App() {
  const [booted, setBooted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div 
      className="relative min-h-screen bg-[#020204] font-sans text-neutral-200 overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-100"
      onMouseMove={handleMouseMove}
    >
      {/* Global OS Background */}
      <div className="fixed inset-0 z-0 bg-[#020204] pointer-events-none"></div>
      
      {/* Interactive Cursor Tracking Glow */}
      <div 
        className="fixed z-0 pointer-events-none transition-transform duration-300 ease-out mix-blend-screen opacity-40"
        style={{ 
          transform: `translate(${mousePos.x - 300}px, ${mousePos.y - 300}px)`,
          width: '600px', height: '600px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, rgba(0,0,0,0) 70%)'
        }}
      ></div>

      {/* Floating Gamified Robotic Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 border border-cyan-500/5 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
          <div className="w-1 h-1 bg-cyan-500/20 rounded-full absolute top-0"></div>
        </div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 border border-blue-500/5 rounded-full flex items-center justify-center animate-[spin_30s_linear_infinite_reverse]">
          <div className="w-2 h-2 bg-blue-500/20 rounded-full absolute bottom-0"></div>
          <div className="w-1 h-1 bg-cyan-500/30 rounded-full absolute left-0"></div>
        </div>
        
        {/* Subtle glowing orbs/fields */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/10 blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/10 blur-[120px] mix-blend-screen"></div>
      </div>
      
      {/* High-tech grid */}
      <div className="fixed inset-0 z-0 bg-grid opacity-20 pointer-events-none" style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)', WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }}></div>
      
      {/* System scanline effect overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none opacity-[0.04] mix-blend-overlay" style={{ background: 'linear-gradient(rgba(255,255,255,0) 50%, rgba(255,255,255,0.25) 50%), linear-gradient(90deg, rgba(255,0,0,0.06), rgba(0,255,0,0.02), rgba(0,0,255,0.06))', backgroundSize: '100% 2px, 3px 100%' }}></div>
      
      <AnimatePresence mode="wait">
        {!booted ? (
          <BootScreen key="boot" onComplete={() => setBooted(true)} />
        ) : (
          <OsInterface key="os" mousePos={mousePos} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
