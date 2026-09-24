import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Cpu, Briefcase, GitCommit, MessageSquare, Terminal as TerminalIcon } from 'lucide-react';

import IdentityModule from './modules/IdentityModule';
import TechTreeModule from './modules/TechTreeModule';
import MissionsModule from './modules/MissionsModule';
import JourneyModule from './modules/JourneyModule';
import ContactModule from './modules/ContactModule';
import H01Assistant from './H01Assistant';
import TerminalLayer from './TerminalLayer';

const OsInterface = () => {
  const [activeModule, setActiveModule] = useState('IDENTITY');
  const [terminalOpen, setTerminalOpen] = useState(false);

  const navItems = [
    { id: 'IDENTITY', icon: <User size={18} />, label: 'IDENTITY' },
    { id: 'SKILLS', icon: <Cpu size={18} />, label: 'TECH TREE' },
    { id: 'MISSIONS', icon: <Briefcase size={18} />, label: 'MISSIONS' },
    { id: 'JOURNEY', icon: <GitCommit size={18} />, label: 'LOGS' },
    { id: 'CONTACT', icon: <MessageSquare size={18} />, label: 'COMMS' },
  ];

  return (
    <motion.div 
      className="absolute inset-0 z-10 flex p-2 md:p-6 gap-6 h-screen overflow-hidden"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Sidebar HUD */}
      <aside className="w-20 md:w-64 h-full bg-[#050508]/90 backdrop-blur-xl border border-cyan-500/10 rounded-2xl flex flex-col items-center md:items-stretch py-6 shrink-0 relative overflow-hidden shadow-[4px_0_24px_rgba(0,0,0,0.5)] z-20">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
        
        {/* Operator Profile */}
        <div className="flex flex-col items-center mb-10 px-4 group cursor-default">
          <div className="relative w-12 h-12 md:w-32 md:h-32 rounded-full mb-4 p-2">
            {/* Interactive High-Tech Shield/Scanner */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/10 group-hover:border-cyan-400/30 transition-colors duration-500"></div>
            
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/20 animate-[spin_10s_linear_infinite] group-hover:border-cyan-400/50 group-hover:animate-[spin_4s_linear_infinite] transition-colors"></div>
            
            <svg className="absolute inset-[-10px] w-[calc(100%+20px)] h-[calc(100%+20px)] animate-[spin_8s_linear_infinite_reverse] opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" fill="none" stroke="rgba(6,182,212,0.4)" strokeWidth="1" strokeDasharray="10 30" />
              <circle cx="50" cy="50" r="48" fill="none" stroke="rgba(6,182,212,0.2)" strokeWidth="0.5" strokeDasharray="5 15" />
            </svg>

            {/* Radar scanner line */}
            <div className="absolute inset-1 rounded-full overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-[50%] h-[50%] origin-bottom-right bg-gradient-to-br from-cyan-500/0 to-cyan-400/40 animate-[spin_2s_linear_infinite]"></div>
            </div>

            {/* The user's actual photo */}
            <div className="relative w-full h-full bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center border-2 border-cyan-500/30 group-hover:border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.4)] z-10 transition-all duration-500">
              {/* Photo is now fully colored */}
              <img src="/photo.jpg" alt="Hemant Wadhwa" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" onError={(e) => { e.target.style.display='none' }} />
              <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay group-hover:opacity-0 transition-opacity"></div>
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center text-center">
            <h2 className="text-white font-display font-bold tracking-widest text-sm group-hover:text-cyan-300 transition-colors">HEMANT.OS</h2>
            <div className="flex items-center gap-2 mt-2 bg-cyan-950/30 px-3 py-1 rounded-full border border-cyan-500/20">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(6,182,212,0.8)]"></span>
              <span className="text-[10px] text-cyan-400 font-mono tracking-widest uppercase">SYS_ONLINE</span>
            </div>
          </div>
        </div>

        {/* Navigation Nodes */}
        <nav className="flex flex-col gap-2 w-full px-2 md:px-4 flex-grow z-10">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`group relative flex items-center gap-3 p-3 md:px-4 rounded-xl transition-all duration-300 font-mono text-xs md:text-sm tracking-widest overflow-hidden ${
                activeModule === item.id 
                  ? 'bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 shadow-[inset_0_0_20px_rgba(6,182,212,0.1)]' 
                  : 'text-neutral-500 hover:text-cyan-100 hover:bg-white/[0.02] border border-transparent hover:border-white/5'
              }`}
            >
              {activeModule === item.id && (
                <motion.div layoutId="activeNavIndicator" className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></motion.div>
              )}
              
              <span className={`relative z-10 transition-transform duration-300 ${activeModule === item.id ? 'scale-110 drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]' : 'group-hover:scale-110 group-hover:text-cyan-400'}`}>
                {item.icon}
              </span>
              <span className="hidden md:block relative z-10 group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
              
              {activeModule === item.id && (
                <div className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping opacity-50"></div>
              )}
            </button>
          ))}
        </nav>

        {/* Terminal Toggle */}
        <div className="px-2 md:px-4 mt-auto pb-4">
          <button 
            onClick={() => setTerminalOpen(!terminalOpen)}
            className="group w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl border border-white/5 bg-[#030305] text-neutral-500 hover:text-cyan-400 hover:border-cyan-500/30 transition-all duration-300 overflow-hidden relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 -translate-x-full group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
            <TerminalIcon size={18} className="group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.8)] relative z-10" />
            <span className="hidden md:block font-mono text-xs tracking-widest relative z-10">SYS_TERMINAL</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow h-full bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl relative overflow-hidden flex flex-col group/main">
        {/* Module Header */}
        <header className="h-14 border-b border-white/5 flex items-center px-6 shrink-0 bg-white/[0.01] relative z-10">
          <h1 className="font-mono text-sm tracking-widest text-neutral-400 flex items-center gap-2">
            <span className="text-cyan-500">~/system/</span>{activeModule.toLowerCase()}
          </h1>
        </header>

        {/* Module Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 scrollbar-hide relative z-10 pr-8 md:pr-32">
          <AnimatePresence mode="wait">
            {activeModule === 'IDENTITY' && <IdentityModule key="identity" />}
            {activeModule === 'SKILLS' && <TechTreeModule key="skills" />}
            {activeModule === 'MISSIONS' && <MissionsModule key="missions" />}
            {activeModule === 'JOURNEY' && <JourneyModule key="journey" />}
            {activeModule === 'CONTACT' && <ContactModule key="contact" />}
          </AnimatePresence>
        </div>

        {/* Interactive Right-Side Telemetry (Blue Dots) */}
        <div className="absolute top-0 right-0 w-24 md:w-32 h-full border-l border-cyan-500/5 bg-gradient-to-l from-cyan-950/10 to-transparent pointer-events-none opacity-50 group-hover/main:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-around py-20 z-0">
          {/* Vertical connection line */}
          <div className="absolute top-0 bottom-0 right-1/2 w-px bg-gradient-to-b from-transparent via-cyan-500/20 to-transparent"></div>
          
          {/* Interactive Node 1 */}
          <div className="relative group/node pointer-events-auto cursor-crosshair">
            <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] animate-pulse group-hover/node:scale-150 group-hover/node:bg-white transition-all"></div>
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity text-[8px] font-mono text-cyan-400 tracking-widest whitespace-nowrap">
              SYS_NODE_01
            </div>
          </div>

          {/* Interactive Node 2 */}
          <div className="relative group/node pointer-events-auto cursor-crosshair">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] animate-ping group-hover/node:animate-none group-hover/node:scale-150 group-hover/node:bg-cyan-300 transition-all"></div>
            <div className="absolute -left-20 top-1/2 -translate-y-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity text-[8px] font-mono text-blue-400 tracking-widest whitespace-nowrap">
              NET_UPLINK_OK
            </div>
            {/* Connecting horizontal line */}
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-px bg-blue-500/30"></div>
          </div>

          {/* Interactive Node 3 */}
          <div className="relative group/node pointer-events-auto cursor-crosshair">
            <div className="w-4 h-4 rounded-full border-2 border-cyan-400 flex items-center justify-center group-hover/node:rotate-90 transition-transform duration-300">
              <div className="w-1 h-1 rounded-full bg-cyan-300"></div>
            </div>
            <div className="absolute -left-16 top-1/2 -translate-y-1/2 opacity-0 group-hover/node:opacity-100 transition-opacity text-[8px] font-mono text-cyan-300 tracking-widest whitespace-nowrap">
              DATA_STREAM
            </div>
          </div>

          {/* Scattered background dots */}
          <div className="absolute right-4 top-1/4 w-1 h-1 bg-cyan-500/50 rounded-full animate-bounce"></div>
          <div className="absolute right-8 bottom-1/3 w-1.5 h-1.5 bg-blue-400/40 rounded-full animate-pulse"></div>
          <div className="absolute right-6 top-2/3 w-1 h-1 bg-cyan-300/60 rounded-full animate-[ping_3s_infinite]"></div>
          
          <div className="absolute bottom-4 right-1/2 translate-x-1/2 text-[8px] font-mono text-cyan-500/30 -rotate-90 tracking-widest origin-bottom whitespace-nowrap">
            SECURE_CONNECTION_ESTABLISHED
          </div>
        </div>
      </main>

      {/* H-01 Assistant Overlay */}
      <H01Assistant />

      {/* Terminal Overlay */}
      <TerminalLayer isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

    </motion.div>
  );
};

export default OsInterface;
