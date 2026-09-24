import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Crosshair } from 'lucide-react';

const MissionsModule = () => {
  const [activeMission, setActiveMission] = useState(null);

  const missions = [
    {
      id: 'setux',
      title: 'SETUX',
      status: 'COMPLETED',
      role: 'DEVELOPER / TEAM LEAD',
      team: 'NATIONNET',
      type: 'GOVERNMENT DIGITAL INTEROPERABILITY',
      link: 'https://github.com/wadhwahemant/SetuX',
      problem: 'Fragmentation between government digital services and portals creates friction for citizens.',
      concept: 'A unified interoperability layer demonstrating systems thinking and practical problem-solving for the Smart India Hackathon.',
      tech: ['Systems Design', 'Product Thinking', 'Architecture'],
      featured: true
    },
    {
      id: 'login',
      title: 'ANIMATED LOGIN UI',
      status: 'ARCHIVED',
      role: 'FRONTEND DEV',
      team: 'SOLO',
      type: 'FRONTEND EXPERIMENT',
      link: null,
      problem: 'Static login pages lack engaging user experience.',
      concept: 'An experimental UI project focused on smooth CSS animations, interactive states, and clean structure.',
      tech: ['HTML', 'CSS', 'UI/UX'],
      featured: false
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-5xl h-full font-mono relative"
    >
      <AnimatePresence>
        {activeMission ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute inset-0 z-20 bg-[#050505] border border-cyan-500/30 rounded-xl overflow-hidden flex flex-col"
          >
            {/* Mission Header */}
            <div className="h-16 border-b border-cyan-500/30 bg-cyan-950/20 flex items-center justify-between px-6">
              <div className="flex items-center gap-3 text-cyan-400">
                <Crosshair size={18} />
                <span className="font-bold tracking-widest text-lg">MISSION: {activeMission.title}</span>
              </div>
              <button 
                onClick={() => setActiveMission(null)}
                className="w-8 h-8 rounded border border-cyan-500/30 flex items-center justify-center text-cyan-500 hover:bg-cyan-500 hover:text-[#050505] transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            
            {/* Mission Details */}
            <div className="flex-grow p-6 md:p-10 overflow-y-auto">
              <div className="grid md:grid-cols-3 gap-8">
                
                {/* Specs */}
                <div className="space-y-6">
                  <div>
                    <div className="text-[10px] text-cyan-500/70 tracking-widest uppercase mb-1">TYPE</div>
                    <div className="text-white text-sm">{activeMission.type}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-500/70 tracking-widest uppercase mb-1">ROLE</div>
                    <div className="text-white text-sm">{activeMission.role}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-500/70 tracking-widest uppercase mb-1">TEAM</div>
                    <div className="text-white text-sm">{activeMission.team}</div>
                  </div>
                  <div>
                    <div className="text-[10px] text-cyan-500/70 tracking-widest uppercase mb-1">STATUS</div>
                    <div className="text-emerald-400 text-sm flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                      {activeMission.status}
                    </div>
                  </div>
                  {activeMission.link && (
                    <div className="pt-4">
                      <a href={activeMission.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 border border-cyan-500/50 bg-cyan-950/30 text-cyan-300 text-xs tracking-widest uppercase hover:bg-cyan-500 hover:text-black transition-colors">
                        <ExternalLink size={14} /> ACCESS_REPOSITORY
                      </a>
                    </div>
                  )}
                </div>

                {/* Intel */}
                <div className="md:col-span-2 space-y-8 border-l border-white/5 pl-8 font-sans">
                  <div>
                    <h3 className="font-mono text-xs text-neutral-500 tracking-widest mb-3 uppercase">Problem_Statement</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">{activeMission.problem}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-neutral-500 tracking-widest mb-3 uppercase">Execution_Concept</h3>
                    <p className="text-neutral-300 leading-relaxed text-sm">{activeMission.concept}</p>
                  </div>
                  <div>
                    <h3 className="font-mono text-xs text-neutral-500 tracking-widest mb-3 uppercase">Technology_Matrix</h3>
                    <div className="flex flex-wrap gap-2">
                      {activeMission.tech.map(t => (
                        <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded font-mono text-[10px] tracking-widest text-cyan-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-full h-full"
          >
            <h2 className="text-2xl text-white font-bold tracking-widest uppercase mb-8 flex items-center gap-3 shrink-0">
              <span className="text-cyan-500">_</span> Mission Database
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
              {missions.map((mission) => (
                <div 
                  key={mission.id}
                  className={`border rounded-xl p-6 relative group overflow-hidden cursor-pointer transition-all duration-500 ${
                    mission.featured 
                      ? 'border-cyan-500/50 bg-cyan-950/20 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]' 
                      : 'border-white/10 bg-white/[0.02] hover:border-cyan-500/30 hover:bg-white/[0.05]'
                  }`}
                  onClick={() => setActiveMission(mission)}
                >
                  {/* Scanline hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/10 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite] pointer-events-none"></div>

                  <div className={`absolute top-0 right-0 w-24 h-24 opacity-10 translate-x-6 -translate-y-6 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-12 ${mission.featured ? 'text-cyan-500' : 'text-white'}`}>
                    <Crosshair size={96} strokeWidth={0.5} />
                  </div>
                  
                  <div className="flex justify-between items-start mb-4">
                    <div className="text-[10px] text-neutral-500 uppercase tracking-widest flex flex-col gap-1">
                      <span className="text-cyan-500">{mission.featured ? 'PRIORITY_MISSION' : 'STANDARD_LOG'}</span>
                      <span>STATUS: {mission.status}</span>
                    </div>
                    {mission.featured && <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>}
                  </div>
                  
                  <h3 className={`text-2xl font-bold mb-2 tracking-wide ${mission.featured ? 'text-white group-hover:text-cyan-300' : 'text-white group-hover:text-cyan-300'} transition-colors`}>
                    {mission.title}
                  </h3>
                  <p className="text-xs text-neutral-400 mb-6 truncate">{mission.type}</p>
                  
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex gap-1">
                      <span className="w-6 h-1 bg-cyan-500/50 rounded-full"></span>
                      <span className="w-2 h-1 bg-cyan-500/20 rounded-full"></span>
                      <span className="w-2 h-1 bg-cyan-500/20 rounded-full"></span>
                    </div>
                    <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-neutral-400 group-hover:text-cyan-400 transition-colors">
                      [ INITIALIZE ]
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Coming Soon */}
              <div className="border border-dashed border-white/10 rounded-xl p-6 flex flex-col items-center justify-center text-center opacity-40 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)]">
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest mb-2">AWAITING_DEPLOYMENT</div>
                <h3 className="text-lg font-bold text-neutral-400 mb-2">CLASSIFIED DIRECTIVE</h3>
                <p className="text-xs text-neutral-500">New system architecture currently in development.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default MissionsModule;
