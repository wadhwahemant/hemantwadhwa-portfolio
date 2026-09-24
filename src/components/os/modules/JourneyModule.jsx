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
      
      <div className="grid md:grid-cols-[1fr_300px] gap-12">
        {/* Timeline */}
        <div>
          <div className="text-xs text-neutral-500 tracking-widest mb-6">EXECUTION_HISTORY</div>
          
          <div className="relative border-l border-white/10 ml-2 space-y-10 py-2">
            {timeline.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-6"
              >
                <div className={`absolute -left-[5px] top-1.5 w-2 h-2 rounded-full ${item.active ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-neutral-600'}`}></div>
                
                <div className="text-[10px] text-cyan-500/70 tracking-widest mb-1">[{item.year}]</div>
                <h3 className="text-white font-bold tracking-wider mb-1">{item.title}</h3>
                <div className="text-xs text-neutral-400">{item.entity}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Education Data */}
        <div>
          <div className="text-xs text-neutral-500 tracking-widest mb-6">ACADEMIC_DATA</div>
          
          <div className="border border-white/10 bg-[#050505] p-5 rounded-xl font-sans">
            <h3 className="font-display font-bold text-white mb-1">SRM University, Sonipat</h3>
            <p className="text-xs text-neutral-400 mb-6 font-mono tracking-widest">B.TECH CSE (2029)</p>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center bg-white/5 p-2 rounded">
                <span className="font-mono text-[10px] tracking-widest text-neutral-300">YEAR 1 CGPA</span>
                <span className="font-display font-bold text-cyan-400">9.37</span>
              </div>
              <div className="flex justify-between items-center p-2">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500">SEM 2 SGPA</span>
                <span className="font-display font-bold text-white text-sm">9.50</span>
              </div>
              <div className="flex justify-between items-center p-2 border-t border-white/5">
                <span className="font-mono text-[10px] tracking-widest text-neutral-500">SEM 1 SGPA</span>
                <span className="font-display font-bold text-white text-sm">9.23</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JourneyModule;
