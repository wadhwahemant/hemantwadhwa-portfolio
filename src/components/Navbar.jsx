import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-full flex items-center justify-between w-[90%] max-w-2xl border border-white/10"
      initial={{ y: -100, x: '-50%', opacity: 0 }}
      animate={{ y: 0, x: '-50%', opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <a href="#" className="text-white font-display font-bold text-lg tracking-tight">HW.</a>
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="hover:text-white transition-colors">Work</a>
        <a href="#journey" className="hover:text-white transition-colors">Journey</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
      </div>
    </motion.nav>
  );
};
export default Navbar;
