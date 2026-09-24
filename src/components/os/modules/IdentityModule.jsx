import React from 'react';
import { motion } from 'framer-motion';

const IdentityModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl font-mono"
    >
      <div className="border border-white/10 bg-white/[0.02] rounded-xl p-6 md:p-8 mb-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </div>
        
        <h2 className="text-2xl text-white font-bold tracking-widest uppercase mb-6 flex items-center gap-3">
          <span className="text-cyan-500">_</span> Operator Identity
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="space-y-4 text-neutral-400">
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-neutral-500">NAME:</span>
              <span className="text-white">Hemant Wadhwa</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-neutral-500">ROLE:</span>
              <span className="text-white">AI/ML + Full Stack Developer</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-neutral-500">LOCATION:</span>
              <span className="text-white">Karnal, Haryana, India</span>
            </div>
            <div className="flex border-b border-white/5 pb-2">
              <span className="w-32 text-neutral-500">STATUS:</span>
              <span className="text-emerald-400">Actively learning & building</span>
            </div>
          </div>
          
          <div className="bg-[#050505] p-4 border border-white/5 rounded-lg text-xs leading-relaxed text-neutral-400 font-sans relative">
            <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500/50"></div>
            <p className="mb-4">
              <strong className="text-white font-medium">SYSTEM QUERY:</strong> Who is Hemant?
            </p>
            <p className="mb-2">
              I am a B.Tech CSE student at SRM University, Sonipat. My primary vector is developing strong foundations in programming and Data Structures & Algorithms.
            </p>
            <p className="mb-2">
              Beyond the core, I explore the intersection of AI/ML and modern web development, aiming to turn real-world problems into scalable technical architectures.
            </p>
            <p>
              I value consistency, curiosity, and continuous iteration over immediate perfection.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border border-white/10 bg-white/[0.02] rounded-xl p-6 group hover:border-cyan-500/30 transition-colors">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-neutral-500 tracking-widest uppercase">Mission Directives</h3>
            <span className="text-[10px] text-cyan-400 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-500/20">ACTIVE</span>
          </div>
          <ul className="space-y-4 text-sm text-neutral-300">
            <li className="flex items-start gap-3 group/item">
              <div className="mt-1 w-3 h-3 border border-cyan-500/50 rotate-45 group-hover/item:bg-cyan-400 transition-colors"></div>
              <div>
                <div className="text-white group-hover/item:text-cyan-300 transition-colors">Deepening DSA using C++</div>
                <div className="text-[10px] text-neutral-500 mt-1 uppercase">Core Algorithm Tree</div>
              </div>
            </li>
            <li className="flex items-start gap-3 group/item">
              <div className="mt-1 w-3 h-3 border border-cyan-500/50 rotate-45 group-hover/item:bg-cyan-400 transition-colors"></div>
              <div>
                <div className="text-white group-hover/item:text-cyan-300 transition-colors">Full-stack web development</div>
                <div className="text-[10px] text-neutral-500 mt-1 uppercase">React Architecture</div>
              </div>
            </li>
            <li className="flex items-start gap-3 group/item">
              <div className="mt-1 w-3 h-3 border border-cyan-500/50 rotate-45 group-hover/item:bg-cyan-400 transition-colors"></div>
              <div>
                <div className="text-white group-hover/item:text-cyan-300 transition-colors">AI/ML software engineering</div>
                <div className="text-[10px] text-neutral-500 mt-1 uppercase">Long-Term Systems</div>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="border border-white/10 bg-white/[0.02] rounded-xl p-6 relative overflow-hidden group hover:border-cyan-500/30 transition-colors">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-full blur-3xl group-hover:bg-cyan-500/10 transition-colors"></div>
          
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-sm font-bold text-neutral-500 tracking-widest uppercase">System Stats</h3>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/40 px-2 py-1 rounded border border-emerald-500/20">LEVEL 01</span>
          </div>
          
          <div className="space-y-6 relative z-10">
            <div>
              <div className="flex justify-between items-end mb-2">
                <span className="text-neutral-400 text-[10px] uppercase tracking-widest">Academic Base (YEAR 1)</span>
                <span className="text-white font-display text-xl font-bold tracking-wider">9.37<span className="text-xs text-neutral-500 font-mono">/10 CGPA</span></span>
              </div>
              <div className="w-full h-1.5 bg-[#050505] rounded-full overflow-hidden border border-white/5">
                <div className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 w-[93.7%] relative">
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <div className="flex justify-between text-[10px] text-neutral-500 pt-2 uppercase tracking-widest">
                <span>SEM 1: 9.23 SGPA</span>
                <span>SEM 2: 9.50 SGPA</span>
              </div>
            </div>
            
            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2">
                <span className="text-neutral-500">Developer XP</span>
                <span className="text-cyan-400">IN PROGRESS</span>
              </div>
              <div className="w-full flex gap-1 h-1">
                <div className="h-full flex-1 bg-cyan-500"></div>
                <div className="h-full flex-1 bg-cyan-500"></div>
                <div className="h-full flex-1 bg-cyan-500/30"></div>
                <div className="h-full flex-1 bg-white/5"></div>
                <div className="h-full flex-1 bg-white/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default IdentityModule;
