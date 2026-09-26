import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

      {/* Floating Gamified Robotic Elements (Interactive) */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        
        {/* Parallax Layer 1 (Far background, moves slow) */}
        <motion.div 
          className="absolute inset-0"
          animate={{ x: (mousePos.x - 500) * -0.02, y: (mousePos.y - 500) * -0.02 }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        >
          <div className="absolute top-[15%] left-[10%] w-48 h-48 border-[0.5px] border-cyan-500/10 rounded-full flex items-center justify-center animate-[spin_40s_linear_infinite]">
            <div className="w-1.5 h-1.5 bg-cyan-500/30 rounded-full absolute top-0 shadow-[0_0_10px_rgba(6,182,212,0.5)]"></div>
            <div className="w-64 h-64 border border-dashed border-cyan-500/5 rounded-full absolute"></div>
          </div>
          <div className="absolute bottom-[30%] left-[80%] w-80 h-80 border border-blue-500/5 rounded-full flex items-center justify-center animate-[spin_50s_linear_infinite_reverse]">
            <div className="w-2 h-2 bg-blue-400/20 rounded-full absolute bottom-0 shadow-[0_0_12px_rgba(59,130,246,0.5)]"></div>
            <div className="w-32 h-32 border-[0.5px] border-blue-500/10 rounded-full absolute animate-[spin_20s_linear_infinite]"></div>
          </div>
          
          <svg className="absolute top-[20%] left-[60%] w-32 h-32 opacity-10 animate-pulse" viewBox="0 0 100 100">
            <polygon points="50,5 95,25 95,75 50,95 5,75 5,25" fill="none" stroke="#06b6d4" strokeWidth="0.5"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
          </svg>
        </motion.div>

        {/* Parallax Layer 2 (Mid-ground, moves faster) */}
        <motion.div 
          className="absolute inset-0"
          animate={{ x: (mousePos.x - 500) * -0.05, y: (mousePos.y - 500) * -0.05 }}
          transition={{ type: "spring", stiffness: 70, damping: 25 }}
        >
          <div className="absolute top-[60%] left-[20%] w-24 h-24 border border-cyan-400/10 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
            <div className="w-2 h-2 bg-cyan-400/40 rounded-full absolute right-0 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
            <div className="absolute w-[150%] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent rotate-45"></div>
          </div>
          
          {/* Cybernetic UI HUD Elements */}
          <div className="absolute top-[10%] right-[20%] opacity-20">
            <div className="flex flex-col gap-1 text-[8px] font-mono text-cyan-500 tracking-widest">
              <div>SYS.CORE // ACTIVE</div>
              <div className="w-16 h-[1px] bg-cyan-500/50 mt-1 mb-1"></div>
              <div className="flex gap-1"><span className="w-2 h-2 bg-blue-500 rounded-sm animate-pulse"></span> OVERRIDE</div>
            </div>
          </div>
          <div className="absolute bottom-[10%] left-[30%] opacity-20 flex gap-2">
            <div className="w-1 h-8 bg-cyan-500/30"></div>
            <div className="w-1 h-12 bg-cyan-400/50"></div>
            <div className="w-1 h-6 bg-blue-500/40"></div>
            <div className="w-1 h-10 bg-cyan-300/30"></div>
          </div>
        </motion.div>

        {/* Subtle glowing orbs/fields */}
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-cyan-900/15 blur-[100px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/15 blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-cyan-600/5 blur-[150px] mix-blend-screen pointer-events-none"></div>
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
