import React from 'react';
import { motion } from 'framer-motion';
import { Satellite } from 'lucide-react';

const GithubIcon = ({size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
);

const LinkedinIcon = ({size=24}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const ContactModule = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="max-w-3xl font-mono flex flex-col items-center text-center justify-center h-full w-full"
    >
      {/* Interactive Communication Portal */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 mb-12 flex items-center justify-center group cursor-pointer">
        {/* Outer expanding rings */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/10 group-hover:border-cyan-500/30 transition-colors duration-700"></div>
        <motion.div 
          className="absolute inset-4 rounded-full border border-cyan-500/20 group-hover:border-cyan-400/50 transition-colors duration-500"
          animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute inset-8 rounded-full border border-dashed border-cyan-500/30 group-hover:border-cyan-300/60 transition-colors duration-500"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Core signal orb */}
        <motion.div 
          className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-cyan-950/80 border-2 border-cyan-400/80 shadow-[0_0_30px_rgba(6,182,212,0.4)] flex items-center justify-center relative overflow-hidden group-hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] group-hover:bg-cyan-900 transition-all duration-300"
          animate={{
            boxShadow: [
              "0 0 20px rgba(6,182,212,0.3)",
              "0 0 40px rgba(6,182,212,0.6)",
              "0 0 20px rgba(6,182,212,0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* Signal wave effect inside core */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-cyan-500/0 via-cyan-400/20 to-cyan-500/0"
            animate={{ y: ["100%", "-100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
          <div className="relative z-10 text-cyan-300 flex items-center justify-center group-hover:scale-125 group-hover:text-cyan-100 transition-all duration-300">
            <Satellite size={48} className="animate-pulse drop-shadow-[0_0_8px_rgba(6,182,212,0.8)]" strokeWidth={1.5} />
          </div>
        </motion.div>
        
        {/* Decorative connection lines */}
        <div className="absolute top-1/2 -left-20 w-16 h-px bg-gradient-to-r from-transparent to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-1/2 -right-20 w-16 h-px bg-gradient-to-l from-transparent to-cyan-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="text-emerald-400 text-xs tracking-widest uppercase">Signal Locked</span>
        </div>
        <h2 className="text-2xl md:text-4xl text-white font-bold tracking-widest uppercase mb-4 group-hover:text-cyan-400 transition-colors">
          ESTABLISH CONNECTION
        </h2>
        <p className="text-neutral-400 text-xs md:text-sm max-w-lg leading-relaxed">
          COMMUNICATION PROTOCOLS ACTIVE. AWAITING TRANSMISSION FOR NEW OPPORTUNITIES, MISSIONS, AND COLLABORATIONS.
        </p>
      </div>
      
      <div className="flex gap-6">
        <a href="https://github.com/wadhwahemant" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-neutral-500 hover:text-cyan-400 transition-colors group">
          <div className="w-14 h-14 border border-white/10 group-hover:border-cyan-500/50 bg-[#050505] rounded-xl flex items-center justify-center transition-colors">
            <GithubIcon size={20} />
          </div>
          <span className="text-[10px] tracking-widest uppercase">GITHUB</span>
        </a>
        <a href="https://www.linkedin.com/in/hemant-wadhwa-5633b3429" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-neutral-500 hover:text-cyan-400 transition-colors group">
          <div className="w-14 h-14 border border-white/10 group-hover:border-cyan-500/50 bg-[#050505] rounded-xl flex items-center justify-center transition-colors">
            <LinkedinIcon size={20} />
          </div>
          <span className="text-[10px] tracking-widest uppercase">LINKEDIN</span>
        </a>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=wadhwahemant77@gmail.com" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-3 text-neutral-500 hover:text-cyan-400 transition-colors group">
          <div className="w-14 h-14 border border-white/10 group-hover:border-cyan-500/50 bg-[#050505] rounded-xl flex items-center justify-center transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          </div>
          <span className="text-[10px] tracking-widest uppercase">EMAIL</span>
        </a>
      </div>
    </motion.div>
  );
};

export default ContactModule;
