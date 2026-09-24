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
      <aside className="w-20 md:w-64 h-full bg-[#0a0a0a]/80 backdrop-blur-md border border-white/5 rounded-2xl flex flex-col items-center md:items-stretch py-6 shrink-0 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50"></div>
        
        {/* Operator Profile */}
        <div className="flex flex-col items-center mb-10 px-4">
          <div className="relative w-12 h-12 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-cyan-500/30 mb-4 p-1">
            <div className="absolute inset-0 border-2 border-cyan-400 rounded-full border-t-transparent animate-spin" style={{ animationDuration: '3s' }}></div>
            {/* The user's actual photo */}
            <div className="w-full h-full bg-neutral-900 rounded-full overflow-hidden flex items-center justify-center text-[8px] text-center text-neutral-500">
              <img src="/photo.jpg" alt="Hemant Wadhwa" className="w-full h-full object-cover" onError={(e) => { e.target.style.display='none' }} />
            </div>
          </div>
          <div className="hidden md:flex flex-col items-center text-center">
            <h2 className="text-white font-display font-bold tracking-widest text-sm">HEMANT.OS</h2>
            <div className="flex items-center gap-2 mt-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] text-green-500 font-mono tracking-widest">SYS_ONLINE</span>
            </div>
          </div>
        </div>

        {/* Navigation Nodes */}
        <nav className="flex flex-col gap-2 w-full px-2 md:px-4 flex-grow">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveModule(item.id)}
              className={`flex items-center gap-3 p-3 md:px-4 rounded-xl transition-all duration-300 font-mono text-xs md:text-sm tracking-widest ${
                activeModule === item.id 
                  ? 'bg-cyan-500/10 border border-cyan-500/30 text-cyan-400' 
                  : 'text-neutral-500 hover:text-neutral-300 hover:bg-white/5 border border-transparent'
              }`}
            >
              <span className={activeModule === item.id ? 'animate-pulse' : ''}>{item.icon}</span>
              <span className="hidden md:block">{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Terminal Toggle */}
        <div className="px-2 md:px-4 mt-auto">
          <button 
            onClick={() => setTerminalOpen(!terminalOpen)}
            className="w-full flex items-center justify-center md:justify-start gap-3 p-3 rounded-xl border border-white/5 bg-white/[0.02] text-neutral-400 hover:text-white transition-colors"
          >
            <TerminalIcon size={18} />
            <span className="hidden md:block font-mono text-xs tracking-widest">TERMINAL</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-grow h-full bg-[#0a0a0a]/60 backdrop-blur-sm border border-white/5 rounded-2xl relative overflow-hidden flex flex-col">
        {/* Module Header */}
        <header className="h-14 border-b border-white/5 flex items-center px-6 shrink-0 bg-white/[0.01]">
          <h1 className="font-mono text-sm tracking-widest text-neutral-400 flex items-center gap-2">
            <span className="text-cyan-500">~/system/</span>{activeModule.toLowerCase()}
          </h1>
        </header>

        {/* Module Content */}
        <div className="flex-grow overflow-y-auto p-6 md:p-10 scrollbar-hide relative">
          <AnimatePresence mode="wait">
            {activeModule === 'IDENTITY' && <IdentityModule key="identity" />}
            {activeModule === 'SKILLS' && <TechTreeModule key="skills" />}
            {activeModule === 'MISSIONS' && <MissionsModule key="missions" />}
            {activeModule === 'JOURNEY' && <JourneyModule key="journey" />}
            {activeModule === 'CONTACT' && <ContactModule key="contact" />}
          </AnimatePresence>
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
