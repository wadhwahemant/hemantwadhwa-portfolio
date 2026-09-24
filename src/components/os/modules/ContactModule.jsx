import React from 'react';
import { motion } from 'framer-motion';

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
      className="max-w-3xl font-mono flex flex-col items-center text-center justify-center h-full"
    >
      <div className="w-16 h-16 border border-cyan-500/50 rounded-full flex items-center justify-center mb-8 relative">
        <div className="absolute inset-0 rounded-full border border-cyan-400 animate-ping opacity-20"></div>
        <span className="text-cyan-400">⚡</span>
      </div>
      
      <h2 className="text-3xl md:text-5xl text-white font-bold tracking-widest uppercase mb-4">
        ESTABLISH CONNECTION
      </h2>
      
      <p className="text-neutral-400 text-sm max-w-lg mb-12 leading-relaxed">
        I am currently looking for new opportunities, internships, and exciting projects. 
        Whether you have a query, an idea, or just want to connect, my inbox is open.
      </p>
      
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
