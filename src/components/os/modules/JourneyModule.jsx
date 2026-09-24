import React from 'react';
import { motion } from 'framer-motion';

const JourneyModule = () => {
  const timeline = [
    {
      year: "2026",
      title: "SIH TEAM LEAD / DEVELOPER",
      entity: "NATIONNET • SETUX PROJECT",
      active: true
    },
    {
      year: "2026",
      title: "TECH TEAM MEMBER",
      entity: "FREE AND OPEN SOURCE SOFTWARE CLUB",
      active: false
    },
    {
      year: "2026",
      title: "TECH TEAM MEMBER",
      entity: "TECHSPACE CLUB",
      active: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl font-mono"
    >
      <h2 className="text-2xl text-white font-bold tracking-widest uppercase mb-8 flex items-center gap-3">
        <span className="text-cyan-500">_</span> System Logs & Telemetry
      </h2>
      
      <div className="grid md:grid-cols-[1fr_300px] gap-12 pb-12">
        {/* Timeline */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 bg-cyan-500 animate-ping rounded-full"></span>
            <div className="text-xs text-neutral-500 tracking-widest">EXECUTION_HISTORY</div>
          </div>
          
          <div className="relative border-l-2 border-cyan-500/20 ml-2 space-y-8 py-2">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-8 group cursor-default"
              >
                {/* Active node indicator */}
                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded flex items-center justify-center bg-[#050505] group-hover:scale-125 transition-transform">
                  <div className={`w-2 h-2 rotate-45 ${item.active ? 'bg-cyan-400 shadow-[0_0_12px_#22d3ee]' : 'bg-neutral-600 group-hover:bg-cyan-500/50'} transition-colors`}></div>
                </div>
                
                {/* Hover line connection */}
                <div className="absolute left-0 top-3 w-6 h-px bg-cyan-500/50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></div>

                <div className="border border-white/5 bg-white/[0.01] group-hover:bg-cyan-950/20 group-hover:border-cyan-500/30 p-4 rounded-xl transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <div className="text-[10px] text-cyan-500/70 tracking-widest mb-1 font-bold">[{item.year}] {item.active && <span className="text-emerald-400 ml-2 animate-pulse">ACTIVE_INSTANCE</span>}</div>
                  <h3 className="text-white font-bold tracking-wider mb-1 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                  <div className="text-xs text-neutral-400">{item.entity}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education Data */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-neutral-500"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            <div className="text-xs text-neutral-500 tracking-widest">ACADEMIC_TELEMETRY</div>
          </div>
          
          <div className="border border-cyan-500/20 bg-[#050508] p-6 rounded-xl font-sans relative overflow-hidden group hover:border-cyan-400/50 transition-colors">
            {/* Scanning line effect */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -translate-y-full group-hover:animate-[scan_3s_ease-in-out_infinite]"></div>
            
            <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.15),transparent)] pointer-events-none"></div>

            <h3 className="font-display font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">SRM University, Sonipat</h3>
            <p className="text-xs text-cyan-500/70 mb-6 font-mono tracking-widest">B.TECH CSE (2029)</p>
            
            <div className="space-y-4 relative z-10">
              <div className="flex justify-between items-center bg-cyan-950/30 border border-cyan-500/30 p-3 rounded-lg shadow-[inset_0_0_10px_rgba(6,182,212,0.1)]">
                <span className="font-mono text-[10px] tracking-widest text-cyan-100 uppercase">YEAR 1 CGPA</span>
                <span className="font-display font-bold text-cyan-400 text-lg group-hover:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)] transition-all">9.37</span>
              </div>
              <div className="flex justify-between items-center p-2 group/row hover:bg-white/5 rounded transition-colors">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 group-hover/row:text-neutral-300">SEM 2 SGPA</span>
                <span className="font-display font-bold text-white text-sm group-hover/row:text-cyan-300 transition-colors">9.50</span>
              </div>
              <div className="flex justify-between items-center p-2 border-t border-white/5 group/row hover:bg-white/5 rounded transition-colors">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500 group-hover/row:text-neutral-300">SEM 1 SGPA</span>
                <span className="font-display font-bold text-white text-sm group-hover/row:text-cyan-300 transition-colors">9.23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JourneyModule;
